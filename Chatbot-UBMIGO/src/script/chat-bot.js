

function toggleChat() {
    const chatBox = document.getElementById("chat-box");
    const robotIcon = document.getElementById("robot-icon");
    if (chatBox.style.display === "none" || chatBox.style.display === "") {
        chatBox.style.display = "flex";
        robotIcon.style.display = "none";
    } else {
        chatBox.style.display = "none";
        robotIcon.style.display = "block";
    }
}

function toggleMinimize() {
    const chatBox = document.getElementById("chat-box");
    chatBox.style.display = "none";
    const robotIcon = document.getElementById("robot-icon");
    robotIcon.style.display = "block";
}
