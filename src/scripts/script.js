// chama o microsaas chatbot do guilherme ( eu acho que a gente está levando isso muito a serio, tem ate um CHATBOT)

  function loadChatbot() {
    fetch('Chatbot-UBMIGO/index.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('chatbot-container').innerHTML = html;
        let cssLink = document.createElement("link");
        cssLink.href = "Chatbot-UBMIGO/src/style/chat-bot.css";
        cssLink.rel = "stylesheet";
        document.head.appendChild(cssLink);

        let scriptTag = document.createElement("script");
        scriptTag.src = "Chatbot-UBMIGO/src/script/chat-bot.js";
        document.body.appendChild(scriptTag);
      })
      .catch(err => console.warn('Erro ao carregar o chatbot:', err));
  }

  window.onload = loadChatbot;

