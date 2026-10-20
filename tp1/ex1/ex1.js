
var questions = [
  { q: "Quels pays ont déjà gagné la Coupe du monde ?", type: "checkbox",
    options: ["Brésil", "Argentine", "Maroc", "France"], correct: [0, 1, 3] },
  { q: "Combien de joueurs y a-t-il sur le terrain par équipe ?", type: "radio",
    options: ["9", "11", "10", "12"], correct: [1] },
  { q: "Quels joueurs sont des footballeurs ?", type: "checkbox",
    options: ["Messi", "Ronaldo", "Federer", "Mbappé"], correct: [0, 1, 3] },
  { q: "Combien de temps dure un match de football (sans prolongation) ?", type: "radio",
    options: ["60 minutes", "80 minutes", "90 minutes", "120 minutes"], correct: [2] },
  { q: "Quels sont des clubs de football ?", type: "checkbox",
    options: ["Real Madrid", "FC Barcelone", "Lakers", "Raja Casablanca"], correct: [0, 1, 3] }
];

function construireFormulaire() {
  var html = "";
  for (var i = 0; i < questions.length; i++) {
    var q = questions[i];
    var info = (q.type === "checkbox") ? "(choix multiples)" : "(choix simple)";
    html += "<p><b>Question " + (i + 1) + " : " + q.q + "</b> " + info + "<br>";
    for (var j = 0; j < q.options.length; j++) {
      html += "<label><input type='" + q.type + "' name='q" + i + "' value='" + j + "'> "
            + q.options[j] + "</label><br>";
    }
    html += "</p>";
  }
  document.getElementById("qcm").innerHTML = html;
}

function initialiser() {
    construireFormulaire();
  
}

function reponsesUtilisateur(i) {
  var cases = document.getElementsByName("q" + i);
  var rep = [];
  for (var j = 0; j < cases.length; j++) {
    if (cases[j].checked) rep.push(j);
  }
  return rep;
}

function afficherCorrige() {
  var nbLignes = 0;
  for (var i = 0; i < questions.length; i++) nbLignes += questions[i].options.length + 2;
  var h = Math.min(nbLignes * 22 + 100, screen.height - 100);
  var fen = window.open("", "corrige", "width=600,height=" + h + ",scrollbars=yes");
  var html = "<html><head><title>Corrigé</title></head><body><h2>Corrigé du QCM</h2>";
  for (var i = 0; i < questions.length; i++) {
    var q = questions[i];
    html += "<p><b>Question " + (i + 1) + " : " + q.q + "</b><br>";
    for (var j = 0; j < q.options.length; j++) {
      if (q.correct.indexOf(j) !== -1) {
        html += "<u><font color='green'>" + q.options[j] + "</font></u><br>";
      } else {
        html += q.options[j] + "<br>";
      }
    }
    html += "</p>";
  }
  html += "</body></html>";
  fen.document.open();
  fen.document.write(html);
  fen.document.close();
}

function estCorrecte(i) {
  var rep = reponsesUtilisateur(i);
  var bon = questions[i].correct;
  if (rep.length !== bon.length) return false;
  for (var k = 0; k < rep.length; k++) {
    if (bon.indexOf(rep[k]) === -1) return false;
  }
  return true;
}

function afficherResultat() {
  var h = questions.length * 30 + 150;
  var fen = window.open("", "resultat", "width=450,height=" + h);
  var html = "<html><head><title>Résultat</title></head><body><h2>Résultat du test</h2>";
  var score = 0;
  for (var i = 0; i < questions.length; i++) {
    if (estCorrecte(i)) {
      score++;
      html += "<p>La réponse de la question " + (i + 1) + " est <font color='green'>correcte</font></p>";
    } else {
      html += "<p>La réponse de la question " + (i + 1) + " est <font color='red'>incorrecte</font></p>";
    }
  }
  html += "<p><b>Score : " + score + " / " + questions.length + "</b></p></body></html>";
  fen.document.open();
  fen.document.write(html);
  fen.document.close();
}

construireFormulaire();