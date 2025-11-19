/*
 * Pequeno script para lidar com o envio do formulário de leads.
 * Por se tratar de um site estático, os dados não serão enviados
 * para um servidor. Em vez disso, interceptamos o envio,
 * exibimos uma mensagem de agradecimento e limpamos o formulário.
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.lead-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Captura os valores dos campos
      const nome = form.querySelector('input[name="nome"]').value;
      const email = form.querySelector('input[name="email"]').value;
      const telefone = form.querySelector('input[name="telefone"]').value;
      // Armazena os dados no localStorage (pode ser substituído por envio real)
      const leads = JSON.parse(localStorage.getItem('leads') || '[]');
      leads.push({ nome, email, telefone, data: new Date().toISOString() });
      localStorage.setItem('leads', JSON.stringify(leads));
      // Exibe mensagem de agradecimento
      alert('Obrigado por se inscrever! Você receberá novidades em breve.');
      // Limpa os campos
      form.reset();
    });
  }
});