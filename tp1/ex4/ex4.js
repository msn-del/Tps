function valeur(id) {
  var v = parseInt(document.getElementById(id).value, 10);
  return isNaN(v) ? 0 : v;
}

function somme() {
  var totalSecondes = 0;
  for (var i = 1; i <= 3; i++) {
    totalSecondes += valeur("h" + i) * 3600 + valeur("m" + i) * 60 + valeur("s" + i);
  }

  var jours = Math.floor(totalSecondes / 86400);
  var reste = totalSecondes % 86400;
  var heures = Math.floor(reste / 3600);
  reste = reste % 3600;
  var minutes = Math.floor(reste / 60);
  var secondes = reste % 60;

  document.getElementById("jt").value = jours;
  document.getElementById("ht").value = heures;
  document.getElementById("mt").value = minutes;
  document.getElementById("st").value = secondes;
}

function effacer() {
  document.getElementById("f").reset();
  document.getElementById("jt").value = "";
  document.getElementById("ht").value = "";
  document.getElementById("mt").value = "";
  document.getElementById("st").value = "";
}