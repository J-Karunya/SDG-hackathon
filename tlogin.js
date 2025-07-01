document.addEventListener("DOMContentLoaded", function () {
    function offlineTeacherLogin(event) {
        event.preventDefault(); // Prevent form submission

        let email = document.getElementById("teacher-email").value.trim();
        let password = document.getElementById("teacher-password").value;
        let teacherId = document.getElementById("teacher-id").value.trim();

        // Offline validation: Replace with your own logic if needed
        if (email === "teacher" && password === "123" && teacherId === "T123") {
            alert("Teacher Login successful! Redirecting...");
            window.location.href = "teacher-dashboard.html"; // Redirect to teacher dashboard
        } else {
            alert("Invalid Teacher login. Check your credentials.");
        }
    }

    document.getElementById("teacher-login").addEventListener("submit", offlineTeacherLogin);
});
