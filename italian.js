var Translate = (function() {
var dictionary = {"merry":"allegro", "christmas":"natale", "and":"e", "happy":"felice", "new":"nuovo", "year":"anno",
  "holidays":"vacanze", "hanukkah":"hanukkah", "kwanza":"kwanza", "winter":"inverno", "we":"noi", "wish":"desiderare",
  "you":"voi", "a":"un", "seasons":"stagioni", "greeting":"saluti", "santa":"santa", "deck":"ponte", "the":"il",
  "halls":"sale", "holly":"agrifoglio", "jolly":"allegro", "love":"amare", "joy":"gioia", "peace":"pace", "noel":"noel"
};


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