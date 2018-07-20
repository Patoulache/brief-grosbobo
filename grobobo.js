OBJECT = {
  corps : {
    epaule : "C'est très bon chez le cochon.",
    bras : "Ça fait mal quand ça casse.",
    poignet : "Si c'est le scaphoïde t'en as pour un bail.",
    hanche : "Difficile de marcher droit après coup.",
    genou : "Le moins on y touche, le mieux on se porte.",
    cheville : "La maison des entorses."
  },

  init: function () {
    var rond = document.querySelectorAll("#rond");

    for (var i=0; i<rond.length; i++) {
      rond[i].addEventListener("mouseover", OBJECT.ajouttexte);
      console.log(rond[i]);
    }

  },

  ajouttexte: function(foo) {
    var para = foo.target.className;
    console.log("text");
    var descr = OBJECT.corps[para];
    document.getElementById("textdescr").innerHTML = "<h2>" + para + "</h2>" + "<p>" + descr + "</p>";
  }
}

window.onload = OBJECT.init;
