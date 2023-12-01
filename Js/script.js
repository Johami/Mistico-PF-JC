// Menu Responsive
bars = document.querySelector(".bars");
bars.onclick = function () {
    navBar = document.querySelector(".menuNavegacion");
    navBar.classList.toggle("active");
}

// Visualización del Nombre del Usuario & Cierre de Sesión
let logout;

const li = document.getElementById('li6')
const usuario = localStorage.getItem('usuario')

if (!usuario) {li.innerHTML = '<a href="views/singup.html" target="_blank"><h2>Iniciar Sección</h2></a>'}
else {
  li.innerHTML = `<img src="Img/User.png" alt="Icono de usuario" class="User-img styled-image" ><a id='logout'><h2>${JSON.parse(usuario).nombre}</h2></a>`
  logout = document.getElementById('logout')

  logout.onclick = () => {
    const confirmarCerrarSesion = window.confirm("¿Estás seguro de que deseas cerrar sesión?");

if (confirmarCerrarSesion) {
      localStorage.removeItem('usuario');
      location.reload();
    }
  }
}