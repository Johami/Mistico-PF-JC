const correo = document.getElementById('correo')
const contraseña = document.getElementById('contraseña')
const input = document.getElementById('submit-is')

const users = JSON.parse(localStorage.getItem('usuarios'))

input.onclick = () => {
  const usuario = users.find(user => user.correo === correo.value && user.contraseña === contraseña.value)
  if (usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
    location.replace("../index.html");
  } else {
    alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
  }
}
