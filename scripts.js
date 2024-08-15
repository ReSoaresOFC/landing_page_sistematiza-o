document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // Evita o envio real do formulário
    
    // Exibe a mensagem de sucesso
    document.getElementById("successMessage").style.display = "block";
    
    // Limpa o formulário
    document.getElementById("contactForm").reset();
});