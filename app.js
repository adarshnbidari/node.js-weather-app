const request=require('request');

const yargs=require('yargs');

const geocode=require('./geocode.js');

const weather=require('./weather.js');

const argv=yargs
	.options({
		a:{
			demand:true,
			alias:'address',
			describe:'address to fecth weather for',
			string:true
		}
	})
	.help()
	.alias('help','h')
	.argv;

geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
if(errorMessage){
	console.log(errorMessage);
}else{
	console.log(results.address);
	weather.getWeather(results.latitude,results.longitude,(errWeather,resultWeather)=>{
	if(errWeather){
		console.log(errWeather);
	}else{
		console.log(`Cureently the temperature is ${resultWeather.temperature} and it feels like ${resultWeather.apparentTemperature}`);
	}
});
	
}
}); 







//http://www.mapquestapi.com/geocoding/v1/address?key=VHP88AayFqWGaP4y8UWjB6GGOJGcj3Up&location=1301%20lombard%20street%20philadelphia


//http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=1301%20lombard%20street%20philadelphia



/*
The latitude is stored on the response body here: body.results[0].locations[0].latLng.lat

The longitude is stored on the response body here: body.results[0].locations[0].latLng.lng

*/