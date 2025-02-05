// Remember Me Functionality
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
    } else {
        localStorage.removeItem("rememberedEmail");
    }

    alert("Login Successful!");
});

// Auto-fill email if "Remember Me" was checked before
window.onload = function () {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
        document.getElementById("email").value = rememberedEmail;
        document.getElementById("rememberMe").checked = true;
    }
};

// Password Reset Functionality
document.getElementById("resetForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Password has been reset successfully!");
    window.location.href = "login.html";
});
