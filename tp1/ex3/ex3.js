function trier(tab) {
  var t = tab.slice(); // copie du tableau
  for (var i = 0; i < t.length - 1; i++) {
    for (var j = 0; j < t.length - 1 - i; j++) {
      if (t[j] > t[j + 1]) {
        var temp = t[j];
        t[j] = t[j + 1];
        t[j + 1] = temp;
      }
    }
  }
  return t;
}

function lancer() {
  var morceaux = document.getElementById("liste").value.split(",");
  var nombres = [];
  for (var i = 0; i < morceaux.length; i++) {
    var n = parseFloat(morceaux[i]);
    if (!isNaN(n)) nombres.push(n);
  }
  document.getElementById("resultat").innerHTML =
    "Liste triée : " + trier(nombres).join(", ");
}