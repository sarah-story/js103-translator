//function executed when translate button is clicked

$('button').click( function() {
  
  //get input values from textarea and select box
  var sentence = $("#input").val();
  var language = $("#language").val();
  $('#results').css('display': 'block');

  //if statements to execute based on language selected
  if (language === 'italian') {
   
    //pass sentence input into translate function
    var italianSentence = Translate.translateToItalian(sentence);

    //write results to page
    $('#results').text(italianSentence);

    //text-to-speech function (only works in chrome)
    var msg = new SpeechSynthesisUtterance(italianSentence);
    var voices = window.speechSynthesis.getVoices();
    msg.lang = 'it';
    window.speechSynthesis.speak(msg);
  
  } else if (language === 'finnish') {
    
    var finnishSentence = Translate.translateToFinnish(sentence);
    $('#results').text(finnishSentence);
    var msg = new SpeechSynthesisUtterance(finnishSentence);
    var voices = window.speechSynthesis.getVoices();
    msg.lang = 'fi';
    window.speechSynthesis.speak(msg);
  
  } else {
  
    var spanishSentence = Translate.translateToSpanish(sentence);
    $('#results').text(spanishSentence);
    var msg = new SpeechSynthesisUtterance(spanishSentence);
    var voices = window.speechSynthesis.getVoices();
    msg.lang = 'es';
    window.speechSynthesis.speak(msg);
  
  }
});