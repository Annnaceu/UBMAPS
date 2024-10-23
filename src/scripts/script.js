
  function redirecionarPagina() {
    window.location.href ="tela_login_UBMAPS/index.html";
}

let isDragging = false; // Flag para verificar se está arrastando
let dragStart = false; // Flag para verificar se o arrasto foi iniciado

function dragElement(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    el.onmousedown = dragMouseDown;
    el.ondblclick = openChat; // Evento para abrir o chat com duplo clique

    // Evento para abrir/fechar o chat com clique, só se não estiver arrastando
    el.onclick = (e) => {
        if (!isDragging) {
            toggleChat();
        }
    };

    function dragMouseDown(e) {
        e.preventDefault();
        isDragging = true; // Iniciar o arrasto
        dragStart = true; // Marcar que o arrasto começou
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        if (!isDragging) return; // Se não estiver arrastando, não faz nada

        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        let newTop = el.offsetTop - pos2;
        let newLeft = el.offsetLeft - pos1;

        // Definir limites para o movimento
        if (newTop < 0) newTop = 0; // Limite superior
        if (newLeft < 0) newLeft = 0; // Limite esquerdo
        if (newTop + el.offsetHeight > window.innerHeight) {
            newTop = window.innerHeight - el.offsetHeight; // Limite inferior
        }
        if (newLeft + el.offsetWidth > window.innerWidth) {
            newLeft = window.innerWidth - el.offsetWidth; // Limite direito
        }

        // Definir a nova posição
        el.style.top = newTop + "px";
        el.style.left = newLeft + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        isDragging = false; // Parar de arrastar
        dragStart = false; // Resetar a flag de arrasto
    }

    function toggleChat() {
        const chatBox = document.getElementById("chat-box");
        const robotIcon = document.getElementById("robot-icon");

        // Alterna entre mostrar/ocultar a caixa de chat
        if (chatBox.style.display === "none" || chatBox.style.display === "") {
            chatBox.style.display = "flex";
            robotIcon.style.display = "none";
        } else {
            chatBox.style.display = "none";
            robotIcon.style.display = "block";
        }
    }

    function openChat() {
        // Aqui você pode adicionar a lógica específica para abrir o chat
        console.log("Chat aberto com duplo clique!"); // Exemplo de log; substitua pela lógica real
        toggleChat(); // Chama a função toggleChat para abrir o chat
    }
}

// Chame a função para arrastar o elemento
dragElement(document.getElementById("robot-assistant"));



