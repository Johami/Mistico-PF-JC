const nombres = document.getElementById("nombres");
const contraseña = document.getElementById("contraseña");
const apellidos = document.getElementById("apellidos");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const genero = document.getElementById("genero");
const registro = document.getElementById("registro")

let usuario = '';
let users = localStorage.getItem('usuarios');

registro.onclick = () => {


usuario = {
  nombre: nombres.value,
  apellido: apellidos.value,
  correo: correo.value,
  telefono: telefono.value,
  genero: genero.value,
  contraseña: contraseña.value,
};

console.log(usuario)
if (!users) {
  localStorage.setItem('usuarios', `[${JSON.stringify(usuario)}]`)
} else {
  let usuarios = JSON.parse(users)
  usuarios.push(usuario)
  localStorage.setItem('usuarios', JSON.stringify(usuarios))
}

location.replace('LogIn.html')

}
