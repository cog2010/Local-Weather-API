$(document).ready(function() {
  var lat;
  var long;
  var tempf;
  var tempc = (tempf - 32) * (5 / 9);
  var temp;
  var html = "";

  $.getJSON("https://ipapi.co/json/", function(lldata) {
    lat = lldata.latitude;
    long = lldata.longitude;
    var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&APPID=c68bf5c6ba0168f01ae8b1db47a489e6&units=imperial';
    $.getJSON(url, function(data) {
      html += "<img src = 'https://openweathermap.org/img/w/" + data.weather[0].icon + ".png' " + "alt='" + data.weather[0].description + "'>";
      tempf = Math.round(data.main.temp) + "°F";
      temp = tempf;
      $("#city").html(data.name);
      $("#temp").html(tempf);
      $("#icon").html(html);
      $("#description").html(data.weather[0].description);

    });
    $("#temp").on("click", function() {
      if (temp == tempf) {
        temp = Math.round((tempf.substr(0, 2) - 32) * (5 / 9)) + "°C";
      } else {
        temp = tempf;
      }
      $("#temp").html(temp);
    });

  });
});
