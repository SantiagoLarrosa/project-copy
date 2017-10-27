//inicializo las variables globales 1 y 2
var usuario1={
    user: "123456789",
    password: "123456789",

}
var usuario2={
    user: "987654321",
    password: "987654321",
}



function login() {
    var user = parseInt(document.getElementById("user").value);
    var password = parseInt(document.getElementById("pasword").value);
    if ((user == usuario1.user && password == usuario1.password) || (user == usuario2.user && password == usuario2.password)){
        window.location="../internas/medicos.html";
    }
else{
        alert("Ingrese un usuario y contraseña correctos")
    }
    
    
}
function sendMail() {
    var link = "santilarrosa30@gmail.com"
      + "?cc=ConsultaRadio"
      + "&subject=" + escape("Info Web")
      + "&body=" + escape("Mi nombre es: " + document.getElementById('name').value);

    var n = document.forms[0].name.value;
    var m = document.forms[0].mail.value;
    var t = document.getElementById("test");
    var filter = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,8})+$/;
    if (n.length >= 2 && filter.test(m)) { window.location.href = "mailto:" + link; return true; }
    else { t.innerHTML = "Revisa los datos . . ."; setTimeout(function () { t.innerHTML = ". . ." }, 2000); return false; }
  }
