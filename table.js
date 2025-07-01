function fetchStudentData() {
    const department = document.getElementById("department-filter").value;
    const year = document.getElementById("year-filter").value;
    const searchQuery = document.getElementById("student-search").value.toLowerCase();

    fetch(`http://localhost:5000/students?department=${department}&year=${year}&search=${searchQuery}`)
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#student-table tbody");
            tableBody.innerHTML = ""; // Clear previous data

            data.forEach(student => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td><input type="text" value="${student.ID}" disabled></td>
                    <td><input type="text" value="${student.Name}" class="editable"></td>
                    <td><input type="text" value="${student.Department}" class="editable"></td>
                    <td><input type="text" value="${student.Year}" class="editable"></td>
                    <td><input type="text" value="${student.Weak_Topics}" class="editable"></td>
                    <td>
                        <button onclick="updateStudent('${student.ID}', this)">Save</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Error fetching student data:", error));
}

// Function to update student data
function updateStudent(studentID, button) {
    let row = button.parentElement.parentElement;
    let updatedData = {
        ID: studentID,
        Name: row.cells[1].querySelector("input").value,
        Department: row.cells[2].querySelector("input").value,
        Year: row.cells[3].querySelector("input").value,
        Weak_Topics: row.cells[4].querySelector("input").value
    };

    fetch(`http://localhost:5000/update_student`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Student data updated successfully!");
            fetchStudentData(); // Refresh table
        } else {
            alert("Error updating student data.");
        }
    })
    .catch(error => console.error("Error updating student data:", error));
}

// Export table to Excel
function exportToExcel() {
    let table = document.getElementById("student-table");
    let wb = XLSX.utils.table_to_book(table, {sheet: "StudentData"});
    XLSX.writeFile(wb, "StudentPerformance.xlsx");
}

