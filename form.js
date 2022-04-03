var dias = document.getElementById("dia");
for ( i=1 ; i<=31 ; i++){
  dias.innerHTML += "<option value =" + i + ">" + i + "</option>";
}

for ( i=1 ; i<=31 ; i++){
  dia2.innerHTML += "<option value =" + i + ">" + i + "</option>";
}

for ( i=1 ; i<=31 ; i++){
  dia3.innerHTML += "<option value =" + i + ">" + i + "</option>";
}

var meses = document.getElementById("mes");

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

for (i of months) {
  meses.innerHTML += "<option value =" + i + ">" + i + "</option>";
}

for (i of months) {
  mes2.innerHTML += "<option value =" + i + ">" + i + "</option>";
}

for (i of months) {
  mes3.innerHTML += "<option value =" + i + ">" + i + "</option>";
}

var años = document.getElementById("año");

l = 2004
while ( l >= 1960 ) {
    años.innerHTML += "<option value =" + l + ">" + l + "</option>";
    l = l - 1;
}

l = 2004
while ( l >= 1960 ) {
    año2.innerHTML += "<option value =" + l + ">" + l + "</option>";
    l = l - 1;
}

l = 2004
while ( l >= 1960 ) {
    año3.innerHTML += "<option value =" + l + ">" + l + "</option>";
    l = l - 1;
}

var paises = document.getElementById("pais");

var countries = ["Colombia", "Venezuela", "Ecuador", "Argentina", "España"];

for(n of countries) {
  paises.innerHTML += "<option value =" + n + ">" + n + "</option>";
}

var paises2 = document.getElementById("pais2");

for(n of countries) {
  paises2.innerHTML += "<option value =" + n + ">" + n + "</option>";
}
