$(document).ready(function() {
    var APIKey = "113dc44dfb1bfa2cccc9d9f80dbced34";
    var queryURL ='https://api.openweatherrmap.org/data/2.5/weather?q=' + cityName + '&appid=113dc44dfb1bfa2cccc9d9f80dbced34';
$("#city.location").on("click", function() {
    var cityName = $("#city.search").val()
    console.log(this);
    $.ajax({
        url: queryURL,
        method: 'GET'

    })
    .then(function (response){

$('.city').html('<h1>' + response.name + 'weather Details<h1>');
$('wind').text('wind Speed:' + response.wind.speed);
$('humidity').text('Humidity:' + response.main.humidity);

// lets go ahead and convert to fahrenheit

var tempFar = (response.main.temp -273.15) *1.8 +32;

$('temp').text('Temperature (K)' + response.main.temp);
$('tempFar').text('Temperature (F)' + tempFar.toFixed(2));

console.log('Wind speed: '+ response.wind.speed);

console.log('Humidity:' + response.main.humidity);
console.log('Temperature(F):' + response.main.humidity);

})
})
});

 