var Translate = (function() {
var dictionary = {"merry":"allegro", "christmas":"natale", "and":"e", "happy":"felice", "new":"nuovo", "year":"anno"};


  return {
  	translateToItalian: function(sentence) {
      var sentenceArray = sentence.split(" ");
      var italianSentence = "";
      for (var i = 0; i < sentenceArray.length; i++) {
        italianSentence += dictionary[sentenceArray[i]] + " ";
      }
      return italianSentence;
    }

  }
      
}());

console.log(Translate.translateToItalian("merry christmas and happy new year"))