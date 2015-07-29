var Translate = (function(translate) {
  var dictionary = {'merry':'iloinen', 'christmas':'joulu', 'and':'ja', 'happy':'onnellinen', 'new':'uusi', 'year':'vuosi',
'holidays':'juhlapaivat', 'hanukkah': 'hanukka', 'kwanza':'kwanza', 'winter':'talvi', 'we':'me', 'wish':'haluta', 'you':'te', 'a':'a', 
'seasons':'vuodenajat', 'greetings':'tervehdys', 'santa': 'joulupukki', 'deck':'kansi', 'the':'the', 'halls':'hallit', 
'holly':'orjanlaakeri', 'jolly':'hilpeä', 'love':'rakkaus', 'joy':'ilo', 'peace':'rauha', 'noel':'noel'};

  translate.translateToFinnish = function(sentence) {
    var sentenceArray = sentence.toLowerCase().split(" ");
      var finnishSentence = "";
      for (var i = 0; i < sentenceArray.length; i++) {
        if (sentenceArray[i] in dictionary) {

          finnishSentence += dictionary[sentenceArray[i]] + " ";

        } else {

          alert("Sorry, we don't recognize the word: " + sentenceArray[i] + ". Please try again!")
          finnishSentence = '';

        }
      }
      return finnishSentence;
  }

  return translate;
})(Translate);
