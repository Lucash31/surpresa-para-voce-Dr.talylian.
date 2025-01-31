// Função para mover o botão "Não" para uma posição aleatória
document.getElementById("nao").addEventListener("mouseover", function() {
    const naoButton = document.getElementById("nao");
    const x = Math.random() * (window.innerWidth - naoButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - naoButton.offsetHeight);
    naoButton.style.position = "absolute";
    naoButton.style.left = `${x}px`;
    naoButton.style.top = `${y}px`;
});

// Função para mostrar a mensagem e disparar confetes ao clicar em "Sim"
document.getElementById("sim").addEventListener("click", function() {
    document.getElementById("resposta").textContent = "Fico feliz que voce aceitou! Agora a pressão é toda minha para te surpreender.😉❤";
    dispararConfetes();
});

// Função para disparar confetes
function dispararConfetes() {
    const confettiSettings = { particleCount: 100, spread: 70, origin: { y: 0.6 } };
    if (typeof confetti === "function") {
        confetti(confettiSettings);
    }
}

// Carrega a biblioteca de confetes dinamicamente
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
document.head.appendChild(script);