var formulario = document.getElementById('meuFormulario');
var mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(event) {
  // Impede o envio do formulário
  event.preventDefault();

  const campoA = document.getElementById('campoA').value;
  const campoB = document.getElementById('campoB').value;

  // Verifica se o número B é maior que o número A
  if (Number(campoB) > Number(campoA)) {
    mensagem.textContent = 'Formulário válido. O número B é maior que o número A.';
    mensagem.style.color = 'green';
  } else {
    mensagem.textContent = 'Formulário inválido. O número B deve ser maior que o número A.';
    mensagem.style.color = 'red';
  }
});