class Persona {
    constructor(nombre, apellido, dni, telefono, correo, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.telefono = telefono;
        this.correo = correo;
        this.saldo = saldo
    }

    getNombre() {
        return this.nombre;
    }

    getApellido() {
        return this.apellido;
    }

    getDni() {
        return this.dni;
    }

    getTelefono() {
        return this.telefono;
    }

    getCorreo() {
        return this.correo;
    }
    getSaldo(){
        return this.saldo
    }
}

let lista = [];
let i = -1;

function crearPersona() {
    let nombre = prompt("Ingresa el nombre");
    let apellido = prompt("Ingresa el apellido");
    let dni = prompt("Ingresa el DNI");
    let telefono = prompt("Ingresa el teléfono");
    let correo = prompt("Ingresa el correo electrónico");
    let saldo = prompt("ingrese su saldo")

    let nuevaPersona = new Persona(nombre, apellido, dni, telefono, correo, saldo);
    lista.push(nuevaPersona);
    i = lista.length - 1;
    mostrarPersona();
    document.getElementById("info").style.display = "block";
    document.getElementById("anteriorBtn").style.display = "inline";
    document.getElementById("siguienteBtn").style.display = "inline";
    document.getElementById("crearBtn").style.display = "none";
    document.getElementById("crearOtroBtn").style.display = "inline";
    document.getElementById("form").style.display = "none"; 
}

function mostrarPersona() {
    if (lista.length > 0 && i >= 0) {
        document.getElementById("nombre").innerHTML = lista[i].getNombre();
        document.getElementById("apellido").innerHTML = lista[i].getApellido();
        document.getElementById("dni").innerHTML = lista[i].getDni();
        document.getElementById("telefono").innerHTML = lista[i].getTelefono();
        document.getElementById("correo").innerHTML = lista[i].getCorreo();
        document.getElementById("saldo").innerHTML = lista[i].getSaldo();
    } else {
        alert("No hay personas registradas");
    }
}

function siguientePersona() {
    if (lista.length > 0 && i < lista.length - 1) {
        i++;
        mostrarPersona();
    } else {
        alert("No hay más personas. (Deberas cargar más usuarios)");
    }
}

function anteriorPersona() {
    if (lista.length > 0 && i > 0) {
        i--;
        mostrarPersona();
    } else {
        alert("No hay más personas. (Deberas cargar más usuarios)");
    }
}

function mostrarFormulario() {
    document.getElementById("crearBtn").style.display = "inline";
    document.getElementById("crearOtroBtn").style.display = "none";
    document.getElementById("info").style.display = "none";
    document.getElementById("form").style.display = "block"; 
    i = -1; 
}

