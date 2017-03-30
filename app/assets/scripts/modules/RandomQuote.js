import $ from 'jquery';

function randomQuote() {
  $.ajax({
    url: "http://api.forismatic.com/api/1.0/?",
    dataType: "json",
    data: "method=getQuote&format=json&lang=en",
    success: function(data){
      $("#quote").html("<p id='quote'>\""
        data.quoteText + "\"<br/>&dash; " + data.quoteAuthor + " &dash;</p>")
    };
  });
};

export default RandomQuote;
