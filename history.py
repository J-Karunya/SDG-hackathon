from flask import Flask, request, send_file, jsonify, render_template
import pandas as pd
import mysql.connector
import os
from datetime import datetime

app = Flask(__name__)

# Ensure 'reports/' folder exists
REPORT_FOLDER = "reports"
if not os.path.exists(REPORT_FOLDER):
    os.makedirs(REPORT_FOLDER)

# Connect to MySQL
def get_db_connection():
    return mysql.connector.connect(
        host="localhost", user="root", password="password", database="exam_tracker"
    )

# Generate and Save Report
@app.route('/generate_report', methods=['GET'])
def generate_report():
    db = get_db_connection()
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM students")
    students = cursor.fetchall()
    db.close()

    df = pd.DataFrame(students)

    # Create a unique filename
    filename = f"StudentReport_{datetime.now().strftime('%Y%m%d_%H%M%S')}.xlsx"
    filepath = os.path.join(REPORT_FOLDER, filename)

    # Save Excel file
    df.to_excel(filepath, index=False, engine='openpyxl')

    # Store in database
    db = get_db_connection()
    cursor = db.cursor()
    cursor.execute("INSERT INTO report_history (filename) VALUES (%s)", (filename,))
    db.commit()
    db.close()

    return jsonify({"message": "Report generated successfully", "filename": filename})

# Fetch Report History
@app.route('/report_history', methods=['GET'])
def report_history():
    db = get_db_connection()
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM report_history ORDER BY generated_at DESC")
    reports = cursor.fetchall()
    db.close()
    return jsonify(reports)

# Download a Specific Report
@app.route('/download_report/<filename>', methods=['GET'])
def download_report(filename):
    filepath = os.path.join(REPORT_FOLDER, filename)
    if os.path.exists(filepath):
        return send_file(filepath, as_attachment=True)
    else:
        return jsonify({"error": "File not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
