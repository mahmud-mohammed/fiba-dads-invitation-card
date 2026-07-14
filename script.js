// ============================
// EVENT CONFIGURATION
// ============================

const PASSWORD = "fiba";

// ============================
// SHOW / HIDE PASSWORD
// ============================

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

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

    const password = passwordInput.value.trim();

    const button = document.querySelector(".unlock-btn");

    const error = document.getElementById("errorMessage");

    error.textContent = "";

    if (password === "") {

        error.textContent = "Please enter the password.";

        return;

    }

    if (password === PASSWORD) {

        button.classList.add("loading");

        button.textContent = "Verifying...";

        button.disabled = true;

        setTimeout(() => {

            button.textContent = "✓ Access Granted";

        }, 1200);

        setTimeout(() => {

            window.location.href = "access.html";

        }, 2200);

    }

    else {

        error.textContent = "Incorrect password.";

        passwordInput.value = "";

        passwordInput.focus();

    }

}

// ============================
// PRESS ENTER
// ============================

passwordInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        checkPassword();

    }

});