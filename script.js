// ============================
// EVENT CONFIGURATION
// ============================
const PASSWORD = "fiba";

// ============================
// ELEMENTS
// ============================
const passwordInput = document.getElementById("password");
const nameInput = document.getElementById("guestName");
const togglePassword = document.getElementById("togglePassword");

// ============================
// SHOW / HIDE PASSWORD
// ============================
togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "👁";
    }
});

// ============================
// PASSWORD CHECK
// ============================
function checkPassword() {
    const name = nameInput.value.trim();
    const password = passwordInput.value.trim();
    const button = document.querySelector(".unlock-btn");
    const error = document.getElementById("errorMessage");

    error.textContent = "";

    if (name === "") {
        error.textContent = "Please enter your name.";
        nameInput.focus();
        return;
    }

    if (password === "") {
        error.textContent = "Please enter the password.";
        passwordInput.focus();
        return;
    }

    if (password === PASSWORD) {
        sessionStorage.setItem("guestName", name);

        button.classList.add("loading");
        button.textContent = "Verifying...";
        button.disabled = true;

        setTimeout(() => { button.textContent = "✓ Access Granted"; }, 1200);
        setTimeout(() => { window.location.href = "access.html"; }, 2200);
    } else {
        error.textContent = "Incorrect password.";
        passwordInput.value = "";
        passwordInput.focus();
    }
}

// ============================
// PRESS ENTER
// ============================
[nameInput, passwordInput].forEach(el => {
    el.addEventListener("keypress", (e) => {
        if (e.key === "Enter") checkPassword();
    });
});
