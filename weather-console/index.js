const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'b4abee3628def29bde3cbd1b47afc073';
let city = argv.c || 'melbourne';
let country = argv.C || 'au';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`


request(url, function(err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log(message);
    }
});