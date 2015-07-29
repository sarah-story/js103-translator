var Translate = (function(translate) {
 var dictionary = {"merry":"alegre", "christmas":"navidad", "and":"y", "happy":"feliz", "new":"nuevo",
  "year":"ano", "holidays":"vacaciones", "hanukkah":"januca", "kwanza":"kwanza", "winter":"invierno",
   "we":"nosotros", "wish":"desear", "you":"ustedes", "a":"la", "seasons":"estaciones", "greetings":"saludos",
    "santa":"de santa", "deck":"cubierta", "the":"la", "halls":"salones", "holly":"acebo", "jolly":"alegre",
     "love":"amor", "joy":"alegría", "peace":"paz", "noel":"noel"};

 
 	translate.translateToSpanish = function(sentence) {
    	var sentenceArray = sentence.toLowerCase().split(" ");
      var spanishSentence = "";
      for (var i = 0; i < sentenceArray.length; i++) {
        if (sentenceArray[i] in dictionary) {
          spanishSentence += dictionary[sentenceArray[i]] + " ";
        } else {
          alert("Sorry, we don't recognize the word: " + sentenceArray[i] + ". Please try again!")
          spanishSentence = "";
          break;
        }
        
      }
      return spanishSentence;
    }
   return translate
})(Translate);

  
    console.log(Translate.translateToSpanish("merry christmas and happy new year"))
    