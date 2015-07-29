var Translate = (function() {
var dictionary = {"merry":"allegro", "christmas":"natale", "and":"e", "happy":"felice", "new":"nuovo", "year":"anno"};


  return {
  	translateToItalian: function(sentence) {
      var sentenceArray = sentence.toLowerCase().split(" ");
      var italianSentence = "";
      for (var i = 0; i < sentenceArray.length; i++) {

        if (sentenceArray[i] in dictionary) {

          italianSentence += dictionary[sentenceArray[i]] + " ";
        } else {
          alert('Sorry, we do not recongize that word: ' + sentenceArray[i] + ' Please try again!')
          italianSentence = "";
          break;
        }
      }
      return italianSentence;
    }

  }
      
}());

console.log(Translate.translateToItalian("merry christmas and happy new year"))