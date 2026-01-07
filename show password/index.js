const password = document.getElementById("password");
const toggleEye = document.getElementById("toggleEye");

toggleEye.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        toggleEye.textContent = "🙈";
    } else {
        password.type = "password";
        toggleEye.textContent = "👁️";
    }
});