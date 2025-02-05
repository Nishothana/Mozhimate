// Login Form Submission
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form auto-submit

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const rememberMe = document.getElementById("rememberMe").checked;

    // Validate inputs
    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Remember Me functionality
    if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
    } else {
        localStorage.removeItem("rememberedEmail");
    }

    alert("Login Successful!");
    window.location.href = "home.html"; // Redirect after successful login
});

// Auto-fill email if "Remember Me" was checked
window.onload = function () {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
        document.getElementById("email").value = rememberedEmail;
        document.getElementById("rememberMe").checked = true;
    }
};

// Password Reset Form Submission
document.getElementById("resetForm")?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form auto-submit

    const newPassword = document.getElementById("newPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Validate passwords
    if (newPassword === "" || confirmPassword === "") {
        alert("Please enter both password fields.");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Password has been reset successfully!");
    window.location.href = "login.html"; // Redirect to login page
});


document.getElementById("addWordForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Get the input values
    const tamilWord = document.getElementById("tamilWord").value.trim();
    const tamilMeaning = document.getElementById("tamilMeaning").value.trim();
    const englishMeaning = document.getElementById("englishMeaning").value.trim();
    const exampleSentence = document.getElementById("exampleSentence").value.trim();
  
    // Check if any field is empty
    if (!tamilWord || !tamilMeaning || !englishMeaning || !exampleSentence) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Create an object for the new word
    const newWord = {
      tamilWord,
      tamilMeaning,
      englishMeaning,
      exampleSentence
    };
  
    // Log the new word to the console (for now)
    console.log("New Word Added:", newWord);
  
    // Display success message after submitting
    document.getElementById("successMessage").style.display = "block";
  
    // Clear the form after submission
    document.getElementById("addWordForm").reset();
  });
  
  // Close the success message when the close button is clicked
  function closeSuccessMessage() {
    document.getElementById("successMessage").style.display = "none";
  }
  