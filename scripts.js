// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=4e9688c472c7e00d4dcc313124c3c2a7
$(document).ready(function () {
    console.log("hello world");
    $("#city-location").on("click", function () {

        var cityName = $("#city-search").val();
        var button = $("<button>");
        button.text(cityName);
        $(".cities-list").append(button);
        var APIKey = "4e9688c472c7e00d4dcc313124c3c2a7";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
            cityName + "&appid=" + APIKey;
        var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=27b2cedd2dfb2b4e4198640c8d09052b";
        $.ajax({
            url: queryURL,
            method: "GET",
        })
            .then(function (response) {
                var lon = response.coord.lon;
                var lat = response.coord.lat;
                console.log(lat);
                $(".city").html("<h1>" + response.name + "Weather Details</h1>");
                $(".wind").text("wind Speed: " + response.wind.speed + "MPH");
                $(".humidity").text("Humidity:" + response.main.humidity + "%");
                console.log(queryURL);
                var tempF = (response.main.temp - 273.15) * 1.8 + 32;
                $(".temp").text("Temperature (K) " + response.main.temp);
                $(".tempF").text("Temperature (F): " + tempF.toFixed(2) + " °");
                console.log("Wind speed: " + response.winnd.speed);
                console.log("Humidity: " + response.wind.speed);
                console.log("Temperature (F): " + tempF + "Degrees");
                var usURL = "";

                $.ajax({
                    url: "http://api.openweathermap.org/data/2.5/uvi/forecast?appid=4e9688c472c7e00d4dcc313124c3c2a7&lat=" + lat + "&lon=" + lon + "&cnt=1",
                });

                $("uv-index").text("UV Index; " + response.value);
            });
        $.ajax({
            url: forecastURL,
            method: "GET",

        }).then(function (response) {
            var forecastData1 = $('.card-city1');
            var forecastTemperature1 = response.list[1].main.temp;
            forecastData1.append("Temperature (F°): " + forecastTemperature1 + ' ');
            var forecastData2 = $('.card-city2');
            var forecastTemperature2 = response.list[2].main.temp;
            forecastData2.append("Temperature (F°): " + forecastTemperature2 + ' ');
            var forecastData3 = $('.card-city3');
            var forecastTemperature3 = response.list[3].main.temp;
            forecastData3.append("Temperature (F°): " + forecastTemperature3 + ' ');
            var forecastData4 = $('.card-city4');
            var forecastTemperature4 = response.list[4].main.temp;
            forecastData4.append("Temperature (F°): " + forecastTemperature4 + ' ');
            var forecastData5 = $('.card-city5');
            var forecastTemperature5 = response.list[5].main.temp;
            forecastData5.append("Temperature (F°): " + forecastTemperature5) + ' ';
            var forecastHumidity1 = $('.card-city1');
            var forecastHumid1 = response.list[1].main.humidity;
            forecastHumidity1.append("Humidity: " + forecastHumid1 + "%")
            var forecastHumidity2 = $('.card-city2');
            var forecastHumid2 = response.list[2].main.humidity;
            forecastHumidity2.append("Humidity: " + forecastHumid2 + "%")
            var forecastHumidity3 = $('.card-city3');
            var forecastHumid3 = response.list[3].main.humidity;
            forecastHumidity3.append("Humidity: " + forecastHumid3 + "%")
            var forecastHumidity4 = $('.card-city4');
            var forecastHumid4 = response.list[4].main.humidity;
            forecastHumidity4.append("Humidity: " + forecastHumid4 + "%")
            var forecastHumidity5 = $('.card-city5');
            var forecastHumid5 = response.list[5].main.humidity;
            forecastHumidity5.append("Humidity: " + forecastHumid5 + "%")
            forecastDate = moment().format('MMMM Do YYYY, h:mm:ss a');
            console.log(forecastDate);
        });
    });

});