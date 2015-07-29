var Translate = (function(translate) {
 var dictionary = {"merry":"alegre", "christmas":"navidad", "and":"y", "happy":"feliz", "new":"nuevo", "year":"ano"};

 
 	translate.translateToSpanish = function(sentence) {
    	var sentenceArray = sentence.split(" ");
      var spanishSentence = "";
      for (var i = 0; i < sentenceArray.length; i++) {
        spanishSentence += dictionary[sentenceArray[i]] + " ";
      }
      return spanishSentence;
    }
   return translate
})(Translate);

  
    console.log(Translate.translateToSpanish("merry christmas and happy new year"))
    