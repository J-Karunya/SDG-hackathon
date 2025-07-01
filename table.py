import mysql.connector
import pandas as pd

# Connect to MySQL database
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="password",
    database="Database"
)
cursor = db.cursor()

# Fetch data from students table
cursor.execute("SELECT * FROM students")
data = cursor.fetchall()

# Get column names
column_names = [i[0] for i in cursor.description]

# Create a DataFrame
df = pd.DataFrame(data, columns=column_names)

# Save to an Excel file
excel_filename = "StudentData.xlsx"
df.to_excel(excel_filename, index=False, engine='openpyxl')

print(f"Data exported to {excel_filename}")

# Close connection
cursor.close()
db.close()
