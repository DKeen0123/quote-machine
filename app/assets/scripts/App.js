import $ from 'jquery';

function randomQuote() {
$.ajax({
    url: "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?",
dataType: "json",
data: "method=getQuote&format=json&lang=en",
    success: function(data) {
      $("#quote").html("<p id='quote'><q>" + data.quoteText + "</q></p>");
      $("#author").html("<p id='author'>" + "<br/>&dash; " + data.quoteAuthor + "&dash;</p>" );
    }

});
}

$(function() {
randomQuote();
});

$(".button__btn").click(function(){
randomQuote();
});

$('#tweet').on("click", function(){
     var ranQuote = $('#quote').text();
     var ranAuthor = $('#author').text();
     var enCode = encodeURI(ranQuote + ranAuthor);
  window.open("https://twitter.com/intent/tweet?text="+ enCode)
});
