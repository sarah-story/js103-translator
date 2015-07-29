var Translate = (function(translate) {
  var dictionary = {'merry':'iloinen', 'christmas':'joulu', 'and':'ja', 'happy':'onnellinen', 'new':'uusi', 'year':'vuosi'};

  translate.translateToFinnish = function(sentence) {
    var sentenceArray = sentence.split(" ");
      var finnishSentence = "";
      for (var i = 0; i < sentenceArray.length; i++) {
        finnishSentence += dictionary[sentenceArray[i]] + " ";
      }
      return finnishSentence;
  }

  return translate;
})(Translate);

console.log(Translate.translateToFinnish("merry christmas and happy new year"))