var wordCount = function(words) {
  var words = words.toLowerCase().split(" ");
  var wordArray = [];
  var wordCount = [];
  var nestedArray = [];
  for(var i=0; i<words.length; i++) {
    if (wordArray.indexOf(words[i]) === -1) {
        wordArray.push(words[i]);
        wordCount.push(1);
    } else {
        wordCount[wordArray.indexOf(words[i])] += 1;
    }
  };
  for(var j = 0; j <wordArray.length; j++) {
      nestedArray.push([wordCount[j],wordArray[j]]);
  }
  return nestedArray.sort(function(a, b) {
    return b[0] - a[0];
  });

};

$(document).ready(function() {
  $('form#word-count').submit(function (event) {
    $('li').remove();
    var sortRequest = $('#wordInput').val();
    var pageResult = wordCount(sortRequest);

    for(var c= 0; c<wordCount(sortRequest).length; c++) {
      $('ul').append("<li>"+wordCount(sortRequest)[c][1]+" - "+wordCount(sortRequest)[c][0]+"</li>");
    }

    event.preventDefault();
  })
})




