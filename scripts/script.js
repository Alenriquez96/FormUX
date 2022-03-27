const form = document.getElementById("form");
const email = document.getElementById("email");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const reGexEmail = /[0-9a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]+/
const reGexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-8])(?=.{8,})/ //Regex para que la pass deba tener 9 caracteres, uno mayus, otro minus y un numero.
const reGexTel=/^[0-9]+$/

const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const cookies = document.getElementById("cookiesRadio");
const datalist = document.getElementById("dl");
const tel = document.getElementById("telefono");
const prefix = document.getElementById("prefix");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");


//----El contador de campos validados-------------//

let contador = 0;

//---------Esta función hace que los campos deban estar rellenos----------//
function mustBeFilled() {
    if (nombre.value == "") {
        console.log("El campo de nombre debe estar relleno");
        nombre.style.boxShadow = "0px 0px 4px rgba(235, 87, 87, 0.8)";
        document.getElementById("errorFill").style.display="flex";
    }
    else{
        contador+=1;
    };
/////////////////////
    if (apellidos.value == "") {
        console.log("El campo de apellidos debe estar relleno");
        apellidos.style.boxShadow = "0px 0px 4px rgba(235, 87, 87, 0.8)";
        document.getElementById("errorFill").style.display="flex";
    }
    else{
        contador+=1;
    };
/////////////////////
    if (!cookies.checked) {
        console.log("El campo de cookies debe estar relleno");
        cookies.style.boxShadow = "0px 0px 4px rgba(235, 87, 87, 0.8)";
        document.getElementById("errorFill").style.display="flex";
        document.getElementById("errorCookies").style.display="flex";
        document.getElementById("errorCookies").innerHTML="Debes aceptar la política de privacidad"
    }
    else{
        contador+=1;
    };
/////////////////////
    if (datalist.value == "") {
        console.log("El campo de país debe estar relleno");
        datalist.style.boxShadow = "0px 0px 4px rgba(235, 87, 87, 0.8)";
        document.getElementById("errorFill").style.display="flex";

    }
    else{
        contador+=1;
    };
/////////////////////
    if (day.value == "") {
        console.log("El campo de dia debe estar relleno");
        day.style.boxShadow = "0px 0px 4px rgba(235, 87, 87, 0.8)";
        document.getElementById("errorFill").style.display="flex";

    }
    else if(isNaN(day.value)){
        console.log("Debe ser un numero");
        day.style.boxShadow = "0px 0px 4px rgba(235, 87, 87, 0.8)";
        document.getElementById("errorYear").style.display="flex";
        document.getElementById("errorYear").innerHTML="Debe ser un número"
    }
    else{
        contador+=1;
    }
/////////////////////
    if (month.value == "") {
        console.log("El campo de mes debe estar relleno");
        month.style.boxShadow = "0px 0px 4px rgba(235, 87, 87, 0.8)";
        document.getElementById("errorFill").style.display="flex";

    }
    else if(isNaN(month.value)){
        console.log("Debe ser un numero");
        month.style.boxShadow = "0px 0px 4px rgba(235, 87, 87, 0.8)";
        document.getElementById("errorYear").style.display="flex";
        document.getElementById("errorYear").innerHTML="Debe ser un número"
    }
    else{
        contador+=1;
    }
/////////////////////
    if (year.value == "") {
        console.log("El campo de año debe estar relleno");
        year.style.boxShadow = "0px 0px 4px rgba(235, 87, 87, 0.8)";
        document.getElementById("errorFill").style.display="flex";

    }
    else if(isNaN(year.value)){
        console.log("Debe ser un numero");
        year.style.boxShadow = "0px 0px 4px rgba(235, 87, 87, 0.8)";
    }
    else if(year.value>2004){
        console.log("Debes tener 18 años");
        year.style.boxShadow = "0px 0px 4px rgba(235, 87, 87, 0.8)";
        document.getElementById("errorYear").style.display="flex";
        document.getElementById("errorYear").innerHTML="Debes tener al menos 18 años";
    }
    else{
        contador+=1;
    };
    /////////////////////
    if (reGexTel.test(tel.value)===true){
        contador++
    }
    else{
        console.log("el telefono debe estar relleno y no ser un número");
        tel.style.boxShadow = "0px 0px 4px rgba(235, 87, 87, 0.8)";
        document.getElementById("ErrorTlf").innerHTML ="El telefono debe ser un número";
    }
        
}


//---------------Esta función valida el email----------------//
function validateEmail() {
    if (reGexEmail.test(email.value) === true) {
        console.log("Todo bien en email"); 
        contador+=1;
    }
    else{
        console.log("Debe contener @ y .");
        email.style.boxShadow = "0px 0px 4px rgba(235, 87, 87, 0.8)";
        document.getElementById("errorEmail").style.display="flex"
    }
};

//--------------------Esta función valida las contraseñas----------//
function validatePasswords() {
    if ((reGexPass.test(pass1.value) === true)  && (pass1.value == pass2.value)) {
        console.log("Todo bien en pass");
        contador+=1;
    }
    else if (reGexPass.test(pass1.value) != true){
        console.log("algo falla en pass1");
        pass1.style.boxShadow = "0px 0px 4px rgba(235, 87, 87, 0.8)";
        document.getElementById("errorPass").innerHTML="La contraseña es demasiado débil"
        document.getElementById("errorPass").style.display="flex"

    }
    else if ((pass1.value != pass2.value)) {
        console.log("Las pass no son iguales");
        document.getElementById("errorPass").style.display= "flex";
        document.getElementById("errorPass").innerHTML= "Las contraseñas no coinciden";

    }
};



//----------------Esta función activa la barra de seguridad de la contraseña
pass1.addEventListener('keyup', function() {

    document.getElementById("seguridad").style.display="block";

    let pwd = pass1.value
  
    // Reset if password length is zero
    if (pwd.length === 0) {
      document.getElementById("progress").value = "0";
      return;
    }
  
    // Check progress
    let prog = [/[A-Z]/, /[0-8]/, /[a-z]/]
      .reduce((memo, test) => memo + test.test(pwd), 0);
  
    // Length must be at least 8 chars
    if(prog > 2 && pwd.length > 7){
      prog++;
    }
  
    // Display it
    let progress = "";
    switch (prog) {
      case 0:
      case 1:
        progress = "25";
        document.getElementById("progress").style.accentColor = "red";
        break;
      case 2:
        progress = "50";
        document.getElementById("progress").style.accentColor = "blue";
        document.getElementById("letras").style.color = "green";
        break;
      case 3:
        progress = "75";
        document.getElementById("progress").style.accentColor = "blue";
        document.getElementById("numeros").style.color = "green";
        break;
      case 4:
        progress = "100";
        document.getElementById("progress").style.accentColor = "green";
        document.getElementById("caracteres").style.color = "green";
        break;
    }
    document.getElementById("progress").value = progress;
});


document.getElementById("form").addEventListener("submit",function validate(e) {
    e.preventDefault();
    mustBeFilled();
    validateEmail();
    validatePasswords();
    console.log(contador);
    if (contador<10) {
        contador=0;
    }
    else if(contador>=10) {
        form.remove();
        document.getElementById("imgCC").style.display="flex";
        document.getElementById("inicio").style.display="flex";
    }
})
