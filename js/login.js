
var nombre, contrasena;

//Lista de usuarios simulado como si nos llegase de una base de datos
data = {
    "users": [
        {
            "id": 1,
            "nombre": "Antonio",
            "password": "1234"
        },
        {
            "id": 2,
            "nombre": "Valentin",
            "password": "4321"
        },
        {
            "id": 3,
            "nombre": "Pepe",
            "password": "1234a4321"
        }
    ]
}
//Funcion que crea una sesion en el navegador
function createSession(username){
    sessionStorage.setItem('astroworld',username);

}
//Funcion para obtener los datos del formulario
function obtenerDatos() {
    nombre = document.getElementById("nombre").value;
    contrasena = document.getElementById("contrasena").value;
    var listaDatos = [nombre, contrasena];
    comprobarDatos(nombre, contrasena);
}
function comprobarDatos(nombre, contrasena) {
    document.getElementById('user-feed').style.display = 'none';
    document.getElementById('pass-feed').style.display = 'none';
    for (var i = 0; i < data.users.length; i++) {
        if (nombre == data.users[i].nombre) {

            if (contrasena == data.users[i].password) {
                createSession(nombre);
                document.getElementById('botonIniciarSesion').type = 'submit'; // Si la contraseña no es correcta muestra el mensaje de error
                break;
            }
            else {
                document.getElementById('pass-feed').style.display = 'block'; // Si la contraseña no es correcta muestra el mensaje de error
            }
            break;
        }
     
    }
        var usuario= data.users.find((user)=>user.nombre==nombre)
        if(!usuario){
            document.getElementById('user-feed').style.display = 'block';// Idem con el usuario
        }
    
}
console.log(data);
console.log("Login cargado");

