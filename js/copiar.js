document.getElementById("copiarTexto").addEventListener("click", function (event) {
    event.preventDefault(); // Evita que o link faça alguma navegação
  
    // Texto a ser copiado
    const texto = "victorleonam18@gmail.com";
  
    // Cria um elemento temporário para copiar o texto
    const tempInput = document.createElement("textarea");
    tempInput.value = texto;
    document.body.appendChild(tempInput);
  
    // Seleciona e copia o texto
    tempInput.select();
    document.execCommand("copy");
  
    // Remove o elemento temporário
    document.body.removeChild(tempInput);
  
    // Feedback visual
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "E-mail copiado!";
    setTimeout(() => (mensagem.textContent = ""), 2000); // Remove mensagem após 2 segundos
  });