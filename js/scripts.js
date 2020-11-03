$(document).ready(function () {
  var num = 12; /* number of badges to display, starting w/ most recent */

  $.getJSON("https://teamtreehouse.com/josephbarrett4.json", function (data) {
    var output = "<ul>";
    /* array starts from 0, so you access the 10th element at position 9, add 1 to stop to account for the array starting from 0 */
    var i = data.badges.length - 1;
    var stop = data.badges.length - (num + 1);
    for (i; i > stop; i--) {
      output += "<li>";
      output += '<img src ="' + data.badges[i].icon_url + '" />';
      output += '<span class = "tooltip">' + data.badges[i].name + "</span>";
      output += "</li>";
    }
    output += "</ul>";
    document.getElementById("badges").innerHTML = output;
  });
});


//-------------------------------------------------------------------------
//--Points update
//-------------------------------------------------------------------------

$.getJSON("https://teamtreehouse.com/josephbarrett4.json", function(data){
  var totalpts = data.points.total;
  var jspts = data.points.JavaScript;
  var csspts = data.points.CSS;
  var htmlpts = data.points.HTML;
  var rubypts = data.points.Ruby;
  var devtoolpts = data.points["Development Tools"];
  var designpts = data.points.Design;
  var phppts = data.points.PHP;
  var diglitpts = data.points["Digital Literacy"];
  
  $('.totalpts').append(totalpts);
  $('.jspts').append(jspts);
  $('.csspts').append(csspts);
  $('.htmlpts').append(htmlpts);
  $('.rubypts').append(rubypts);
  $('.devtoolpts').append(devtoolpts);
  $('.designpts').append(designpts);
  $('.phppts').append(phppts);
  $('.diglitpts').append(diglitpts);
});
