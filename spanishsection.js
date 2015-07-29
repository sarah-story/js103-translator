var Translate = (function(translate) {
 var dictionary = {"merry":"alegre", "christmas":"navidad", "and":"y", "happy":"feliz", "new":"nuevo", "year":"ano"};

 
 	translate.translateToSpanish = function(sentence) {
    	var sentenceArray = sentence.split(" ");
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
    