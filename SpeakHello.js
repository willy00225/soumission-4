// ÉTAPE 2: Enveloppez tout le contenu de SpeakHello.js dans un IIFE
// Voir leçon 52, partie 2


// ÉTAPE 3: Créez un objet, appelé 'helloSpeaker' auquel vous attacherez
// la méthode "speak" et que vous exposerez au contexte global
// Voir leçon 52, partie 1
// var helloSpeaker =

// NE PAS attacher la variable speakWord à l'objet 'helloSpeaker'.
var x = 'helloSpeaker';

// On enveloppe notre script comme il faut
;(function() {
  var x = 'helloSpeaker';

  // Renvoie "HelloSpeaker!"
  console.log(x);
})()

// Renvoie "HelloSpeaker!" -> bingo!
console.log(x);

// ÉTAPE 4: Réécrivez la fonction 'speak' de telle sorte qu'elle soit attachée au
// objet helloSpeaker au lieu d'être une fonction autonome.
// Voir leçon 52, partie 2
var x = 'HelloSpeaker';
;(function(speak) {
  // Renvoie "Hey !"
  console.log(x + " " + names[i]);
})()
// ÉTAPE 5: Exposez l'objet 'helloSpeaker' à la portée globale. Nomme le
// 'helloSpeaker' sur la portée mondiale également.
// Voir leçon 52, partie 2
// (Remarque, l'étape 6 sera effectuée dans le fichier SpeakGoodBye.js.)
// xxxx.xxxx = bonjourSpeaker;
