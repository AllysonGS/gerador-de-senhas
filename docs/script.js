// GERAR SENHA
function generatePassword() {
    const size = Number(document.getElementById("size").value);
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) chars += "0123456789";
    if (includeSymbols) chars += "!@#$%^&*()_-+=<>?";

    if (!chars) {
        alert("Selecione pelo menos um tipo de caractere!");
        return;
    }

    let password = "";
    for (let i = 0; i < size; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("result").value = password;
    document.getElementById("copyMessage").innerText = "";
}

// COPIAR SENHA
function copyPassword() {
    const field = document.getElementById("result");

    if (!field.value) {
        alert("Gere uma senha primeiro!");
        return;
    }

    navigator.clipboard.writeText(field.value)
        .then(() => {
            const msg = document.getElementById("copyMessage");
            msg.innerText = "Senha copiada!";
            setTimeout(() => msg.innerText = "", 2000);
        })
        .catch(() => alert("Erro ao copiar senha"));
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

    const levels = ["Muito fraca", "Fraca", "Média", "Forte", "Muito forte"];
    const colors = ["#ff4d4d", "#ff944d", "#ffe44d", "#8cff66", "#26d926"];

    if (pwd.length === 0) {
        text.innerText = "";
        bar.style.width = "0%";
        bar.style.background = "#444";
        return;
    }

    text.innerText = `Força: ${levels[score - 1]}`;
    bar.style.width = `${(score / 5) * 100}%`;
    bar.style.background = colors[score - 1];
}
