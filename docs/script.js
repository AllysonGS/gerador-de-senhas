// GERAR SENHA
function generatePassword() {
    let size = document.getElementById("size").value;

    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    let password = "";

    for (let i = 0; i < size; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("result").value = password;
}

// COPIAR SENHA
function copyPassword() {
    const field = document.getElementById("result");

    if (field.value.length === 0) {
        alert("Gere uma senha primeiro!");
        return;
    }

    field.select();
    navigator.clipboard.writeText(field.value);
    alert("Senha copiada!");
}

// AVALIAR SENHA
function evaluatePassword() {
    const pwd = document.getElementById("passwordToEvaluate").value;
    let score = 0;

    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[a-z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[!@#$%^&*()]/.test(pwd)) score++;

    const text = document.getElementById("evaluationText");
    const bar = document.getElementById("strengthBar");

    let strengthColors = ["#ff4d4d", "#ff944d", "#ffe44d", "#8cff66", "#26d926"];

    bar.style.background = strengthColors[score - 1] || "#444";

    const levels = ["Muito fraca", "Fraca", "Média", "Forte", "Muito forte"];

    text.innerText = pwd.length === 0 ? "" : `Força: ${levels[score - 1]}`;
}
