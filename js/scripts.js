$(document).ready(function () {
  var user = "josephbarrett4"; /* treehouse username*/
  var num = 12; /* number of badges to display, starting w/ most recent */

  $.getJSON("https://teamtreehouse.com/" + user + ".json", function (data) {
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
