var getString = document.getElementById('guid');
var startString = "The quick brown fox jumps over the lazy dog";
getString.innerHTML = startString;

(function ($) {

  function generate1() { //DO IT!! w string.split() method
    

    var words = startString.split(' ');
    var output = '';
    for (var i = 0; i < words.length; i++){
      output += (words[i]) + '<br/>';
    }
    return document.innerHTML = output;
  };

  $('#generate1').on("click", function (event) {
    $('#guid').html(generate1());
  });




  function generate2() { /*sort alpha using .sort()*/

    var words = startString.toLowerCase().split(' ').sort();
    var output = '';
    for (var i = 0; i < words.length; i++){
      output += (words[i]) + '<br/>';
    }
    return document.innerHTML = output;
  };

  $('#generate2').on("click", function (event) {
    $('#guid').html(generate2());
  });

function generate3() { /*sort by word length with anon function passed to .sort method as a parameter*/

    var words = startString.split(' ');
    var holder = [];
    var output = '';
    
    holder = words.sort(function (a , b){
      return a.length < b.length
    });

  for (var i = 0; i < holder.length; i++){
    output += (holder[i]) + '<br/>';
  }

   return document.innerHTML = output;
};

  $('#generate3').on("click", function (event) {
    $('#guid').html(generate3());
  });

function generate4() { /* Reverse the spelling of each word using .split .reverse .join methods twice*/

    var words = startString;
    
     
 return document.innerHTML = "I'm at my wits end with this last function."
};

  $('#generate4').on("click", function (event) {
    $('#guid').html(generate4());
  });



})(jQuery);