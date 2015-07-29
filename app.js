$('button').click( function() {
  
  var sentence = $("#input").val();
  var language = $("#language").val();
  
  if (language === 'italian') {
   
    var italianSentence = Translate.translateToItalian(sentence);
    $('#results').text(italianSentence);
  
  } else if (language === 'finnish') {
    
    var finnishSentence = Translate.translateToFinnish(sentence);
    $('#results').text(finnishSentence);
  
  } else {
  
    var spanishSentence = Translate.translateToSpanish(sentence);
    $('#results').text(spanishSentence);
  
  }
});