//A function augmenting italian.js

var Translate = (function(translate) {
  var dictionary = {'merry':'iloinen', 'christmas':'joulu', 'and':'ja', 'happy':'onnellinen', 'new':'uusi', 'year':'vuosi',
'holidays':'juhlapaivat', 'hanukkah': 'hanukka', 'kwanza':'kwanza', 'winter':'talvi', 'we':'me', 'wish':'haluta', 'you':'te', 'a':'a', 
'seasons':'vuodenajat', 'greetings':'tervehdys', 'santa': 'joulupukki', 'deck':'kansi', 'the':'the', 'halls':'hallit', 
'holly':'orjanlaakeri', 'jolly':'hilpeä', 'love':'rakkaus', 'joy':'ilo', 'peace':'rauha', 'noel':'noel'};

  //Adding a transate to finnish function to the Translate function
  translate.translateToFinnish = function(sentence) {
    //Split input into an array
    var sentenceArray = sentence.toLowerCase().split(" ");

    //Initialize sentence as an empty sctring
    var finnishSentence = "";

    //loop through sentence array
    for (var i = 0; i < sentenceArray.length; i++) {

      //check to see if word is in dictionary
      if (sentenceArray[i] in dictionary) {

        //add Finnish translation of word to the finnish sentence string
        finnishSentence += dictionary[sentenceArray[i]] + " ";

      } else {

        //alert user if word is not in dictionary
        alert("Sorry, we don't recognize the word: " + sentenceArray[i] + ". Please try again!")
        //set reset sentence to an empty string
        finnishSentence = '';
        //end loop
        break;
      }
    }
    return finnishSentence;
  }

  return translate;
})(Translate);
