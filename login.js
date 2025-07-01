document.addEventListener("DOMContentLoaded", function () {
    function showLogin(role) {
        document.getElementById("student-login").classList.add("hidden");
        document.getElementById("teacher-login").classList.add("hidden");

        if (role === "student") {
            document.getElementById("student-login").classList.remove("hidden");
        } else if (role === "teacher") {
            document.getElementById("teacher-login").classList.remove("hidden");
        }
    }

    function offlineStudentLogin(event) {
        event.preventDefault(); // Prevent form submission

        let name = document.getElementById("student-email").value.trim();
        let password = document.getElementById("student-password").value;

        if (name === "admin" && password === "123") {
            alert("Login successful! Redirecting...");
            window.location.href = "dashboard.html"; // Redirect to merged dashboard
        } else {
            alert("Invalid login. Check your credentials.");
        }
    }

    function offlineTeacherLogin(event) {
        event.preventDefault(); // Prevent form submission

        let email = document.getElementById("teacher-email").value.trim();
        let password = document.getElementById("teacher-password").value;
        let teacherId = document.getElementById("teacher-id").value.trim();

        if (email === "teacher@gmail.com" && password === "123" && teacherId === "T123") {
            alert("Teacher Login successful! Redirecting...");
            window.location.href = "teacher-dashboard.html"; // Redirect to teacher dashboard
        } else {
            alert("Invalid Teacher login. Check your credentials.");
        }
    }

    // Attach event listeners safely
    let studentLoginForm = document.getElementById("student-login");
    if (studentLoginForm) {
        studentLoginForm.addEventListener("submit", offlineStudentLogin);
    }

    let teacherLoginForm = document.getElementById("teacher-login");
    if (teacherLoginForm) {
        teacherLoginForm.addEventListener("submit", offlineTeacherLogin);
    }

    window.showLogin = showLogin; // Expose function globally
});

