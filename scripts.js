document.getElementById("formOrcamento").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const servico = document.getElementById("servico").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = `Olá! Meu nome é ${nome}.%0A
Telefone: ${telefone}%0A
Serviço desejado: ${servico}%0A
Mensagem: ${mensagem}`;

  const url = `https://wa.me/5511977728112?text=${texto}`;
  window.open(url, "_blank");
});