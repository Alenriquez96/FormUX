const email = document.getElementById("email");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const reGexEmail = /[0-9a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+/
const reGexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/ //Regex para que la pass deba tener 9 caracteres, uno mayus, otro minus y un numero.

const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const cookies = document.getElementById("cookiesRadio");

//---------Esta función hace que los campos deban estar rellenos----------//
function mustBeFilled() {
    if (nombre.value == "") {
        console.log("El campo de nombre debe estar relleno");
    }
    if (apellidos.value == "") {
        console.log("El campo de apellidos debe estar relleno");
    }
    if (!cookies.checked) {
        console.log("El campo de cookies debe estar relleno");
    }
}


//---------------Esta función valida el email----------------//
function validateEmail() {
    if (reGexEmail.test(email.value) === true) {
        console.log("Todo bien en email"); 
    }
    else{
        console.log("Debe contener @ y .");
        email.style.boxShadow = "0px 0px 4px rgba(235, 87, 87, 0.8)";
    }
};

//--------------------Esta función valida las contraseñas----------//
function validatePasswords() {
    if ((reGexPass.test(pass1.value) === true)  && (pass1.value == pass2.value)) {
        console.log("Todo bien en pass");
    }
    else if (reGexPass.test(pass1.value) != true){
        console.log("algo falla en pass1");
        pass1.style.boxShadow = "0px 0px 4px rgba(235, 87, 87, 0.8)";
    }
    else if ((pass1.value != pass2.value)) {
        console.log("Las pass no son iguales");
    }
};


document.getElementById("form").addEventListener("submit",function validate(e) {
    e.preventDefault();
    mustBeFilled();
    validateEmail();
    validatePasswords();

})

// const inputs = document.getElementsByTagName("input")
// for (let i = 0; i < inputs.length; i++) {
//     if (inputs[i].value != "") {
//         document.getElementById("btn").style.backgroundColor = "#5D5FEF";
//     }
// }