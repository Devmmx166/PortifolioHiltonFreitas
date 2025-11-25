//  
document.getElementById('contactForm').addEventListener('submit', async function(e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const assunto = document.getElementById('assunto').value;
      const mensagem = document.getElementById('mensagem').value;
      const status = document.getElementById('status');

      status.textContent = 'Enviando...';

      /*
        Aqui usamos Formspree (mais simples sem backend). 
        Basta criar um formulário no site Formspree.io e trocar a URL abaixo.
      */

      const res = await fetch('https://formspree.io/f/SEU_ID_AQUI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Nome: nome,
          Email: email,
          Assunto: assunto,
          Mensagem: mensagem,
          Para: 'devmmx166@gmail.com'
        })
      });

      if(res.ok){
        status.textContent = 'Mensagem enviada com sucesso!';
        document.getElementById('contactForm').reset();
      } else {
        status.textContent = 'Erro ao enviar. Tente novamente.';
      }
    });

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.setAttribute("id", "contactForm");

  // Criar a mensagem de status se não existir
  let status = document.getElementById("status");
  if (!status) {
    status = document.createElement("p");
    status.id = "status";
    form.appendChild(status);
  }

 
});



