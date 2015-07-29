$('button').click( function() {
  
  var sentence = $("#input").val();
  var language = $("#language").val();
  
  if (language === 'italian') {
   
    var italianSentence = Translate.translateToItalian(sentence);
    $('#results').text(italianSentence);
    var msg = new SpeechSynthesisUtterance(italianSentence);
    window.speechSynthesis.speak(msg);
  
  } else if (language === 'finnish') {
    
    var finnishSentence = Translate.translateToFinnish(sentence);
    $('#results').text(finnishSentence);
    var msg = new SpeechSynthesisUtterance(finnishSentence);
    window.speechSynthesis.speak(msg);
  
  } else {
  
    var spanishSentence = Translate.translateToSpanish(sentence);
    $('#results').text(spanishSentence);
    var msg = new SpeechSynthesisUtterance(spanishSentence);
    window.speechSynthesis.speak(msg);
  
  }
});