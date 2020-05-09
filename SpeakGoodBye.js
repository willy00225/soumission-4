// REMARQUE! Les étapes de ce fichier sont fondamentalement identiques à celles que vous
// effectué dans le fichier SpeakHello.js.

// ÉTAPE 6: Enveloppez tout le contenu de SpeakGoodBye.js à l'intérieur d'un IIFE
// Voir leçon 52, partie 2


// ÉTAPE 7: Créez un objet, appelé 'byeSpeaker' auquel vous attacherez
// la méthode "speak" et que vous exposerez au contexte global
// Voir leçon 52, partie 1
// var byeSpeaker =

// NE PAS attacher la variable speakWord à l'objet 'byeSpeaker'.
var y = 'byeSpeaker';

// On enveloppe notre script comme il faut
;(function() {
  var y = 'byeSpeaker!';

  // Renvoie "HelloSpeaker!"
  console.log(y);
})()

// Renvoie "HelloSpeaker!" -> bingo!
console.log(y);

// ÉTAPE 8: Réécrivez la fonction 'speak' de telle sorte qu'elle soit attachée au
// objet byeSpeaker au lieu d'être une fonction autonome.
// Voir leçon 52, partie 2
var y = 'byeSpeaker';
;(function(speak) {
  // Renvoie "Hey !"
  console.log(y + ""+ names[i]);
})()

// ÉTAPE 9: Exposez l'objet 'byeSpeaker' à la portée globale. Nomme le
// 'byeSpeaker' sur la portée mondiale également.
// xxxx.xxxx = byeSpeaker;