// Pegue o modal
let modal = document.getElementById("myModal");

// Pegue o botão que abre o modal
let btn = document.getElementById("openModal");

// Pegue o elemento <span> que fecha o modal
let span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function () {
  modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Fecha o modal quando o usuário pressionar a tecla Esc
document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});

// Capturar o formulário
let form = document.getElementById("tabela");

// Função para lidar com o envio do formulário
form.onsubmit = function (event) {
  event.preventDefault(); // Impede o envio do formulário para o servidor

  // Pega os valores dos campos
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;

  // Exemplo de como armazenar os dados localmente
  localStorage.setItem("nome", nome);
  localStorage.setItem("email", email);
  localStorage.setItem("telefone", telefone);

  // Fechar o modal após enviar
  modal.style.display = "none";
};

form.onsubmit = function (event) {
  event.preventDefault(); // Impede o envio do formulário para o servidor

  // Pega os valores dos campos
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let telefone = document.getElementById("telefone").value;

  // Exemplo de como armazenar os dados localmente
  localStorage.setItem("nome", nome);
  localStorage.setItem("email", email);
  localStorage.setItem("telefone", telefone);

  // Fechar o modal após enviar
  modal.style.display = "none";

  // Mostrar o container do checkmark
  let checkmarkContainer = document.getElementById("checkmark-container");
  checkmarkContainer.style.display = "block";

  // Ocultar o container do checkmark após 2 segundos
  // setTimeout(function () {
  //   checkmarkContainer.style.display = "none";
  // }, 2000);
};

// Inicializa o mapa
var map = L.map('map').setView([-26.9185, -49.0661], 13); // Coordenadas para Blumenau, SC

// Adiciona um tile layer (camada de azulejos) ao mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adiciona um marcador ao mapa
var marker = L.marker([-26.9185, -49.0661]).addTo(map)
    .bindPopup('Estamos aqui em Blumenau!')
    .openPopup();