document.addEventListener("DOMContentLoaded", function () {
    function showLogin(role) {
        document.getElementById("student-login").classList.add("hidden");
        document.getElementById("teacher-login").classList.add("hidden");

        if (role === 'student') {
            document.getElementById("student-login").classList.remove("hidden");
        } else if (role === 'teacher') {
            document.getElementById("teacher-login").classList.remove("hidden");
        }
    }

    function offlineLogin(event) {
        event.preventDefault(); // Prevents form from submitting

        let name = document.getElementById("student-email").value.trim();
        let password = document.getElementById("student-password").value;

        if (name === "admin@" && password === "123") {
            alert("Login successful!");
            window.location.href = "progress.html"; // Redirect to progress page
        } else {
            alert("Invalid login. Use 'admin@' and password '123'.");
        }
    }

    // Attach the event listener after confirming element exists
    let studentLoginForm = document.getElementById("student-login");
    if (studentLoginForm) {
        studentLoginForm.addEventListener("submit", offlineLogin);
    }

    // Expose function globally for onclick usage
    window.showLogin = showLogin;
});
