function emailValide(email) {
  var posAt = email.indexOf("@");

  // un seul @
  if (posAt === -1 || posAt !== email.lastIndexOf("@")) return false;

  // au moins une lettre ou un chiffre avant le @
  var avant = email.substring(0, posAt);
  var ok = false;
  for (var i = 0; i < avant.length; i++) {
    var c = avant.charAt(i);
    if ((c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9")) {
      ok = true;
      break;
    }
  }
  if (!ok) return false;

  // un point après le @
  var apres = email.substring(posAt + 1);
  var posPoint = apres.indexOf(".");
  if (posPoint < 1 || posPoint === apres.length - 1) return false;

  return true;
}

function verifier() {
  var email = document.getElementById("email").value;
  var msg = document.getElementById("message");
  if (emailValide(email)) {
    msg.innerHTML = "L'email est valide.";
  } else {
    msg.innerHTML = "L'email n'est pas valide.";
  }
}