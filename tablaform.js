

function enviar() {
  var name = document.getElementById("nombre").value;
  var lname = document.getElementById("apellido").value;
  var gener = document.getElementsByName("genero");

  if (gener[0].checked) {
    var sexo = gener[0].value
  }
  if (gener[1].checked) {
    var sexo = gener[1].value
  }

  var dia1 = document.getElementById("dia").value;
  var mes1 = document.getElementById("mes").value;
  var año1 = document.getElementById("año").value;
  var ciudad1 = document.getElementById("ciudad").value;

  contenido.innerHTML += "<tr><td> " + sexo + " </td><td> " + lname + " </td><td> " + name + " </td><td> " + dia1 + " de " + mes1 + " del " + año1 + " </td><td> " + ciudad1 + " </td></tr>"

}
