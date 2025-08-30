// header
fetch("./components/header.html")
  .then((res) => res.text())
  .then((data) => {
    const el = document.getElementById("header");
    if (el) el.innerHTML = data;
  });

// sidebar
fetch("./components/sidebar.html")
  .then((res) => res.text())
  .then((data) => {
    const el = document.getElementById("sidebar");
    if (el) el.innerHTML = data;
  });

// footer
fetch("./components/footer.html")
  .then((res) => res.text())
  .then((data) => {
    const el = document.getElementById("footer");
    if (el) el.innerHTML = data;
  });

// funil de usuário
fetch("./components/typeUser.html")
  .then((res) => res.text())
  .then((data) => {
    const el = document.getElementById("typeUser");
    if (el) el.innerHTML = data;
  });

// meus restaurantes
fetch("./components/meusRestaurantes.html")
  .then((res) => res.text())
  .then((data) => {
    const el = document.getElementById("restaurantes");
    if (el) el.innerHTML = data;
  });

// navbar de restaurantes
fetch("./components/navbarRestaurante.html")
  .then((res) => res.text())
  .then((data) => {
    const el = document.querySelector("#navbar-restaurante");
    if (el) el.innerHTML = data;
  });

// cadastro de restaurantes
fetch("./components/cadastroRestaurante.html")
  .then((res) => res.text())
  .then((data) => {
    const el = document.getElementById("cadastro-restaurante");
    if (el) el.innerHTML = data;
  });

// gerenciamento de restaurante
fetch("./components/gerenciarRestaurante.html")
  .then((res) => res.text())
  .then((data) => {
    const el = document.getElementById("gerenciar-restaurante");
    if (el) el.innerHTML = data;
  });

