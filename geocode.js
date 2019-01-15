const request=require('request');


var geocodeAddress=(address,callback)=>{
	var encodedAddress=encodeURIComponent(address);

request({
	url:`http://www.mapquestapi.com/geocoding/v1/address?key=VHP88AayFqWGaP4y8UWjB6GGOJGcj3Up&location=${encodedAddress}`,
	json:true
	
},(error,response,body)=>{
	
	if(error){
		callback('Unable to connect to the server!...');
	}else if(response.statusCode!==200){
		callback('Unable to find the address!..');	
	}else if(response.statusCode===200){
			
	callback(undefined,{
		address:body.results[0].providedLocation.location,
		latitude:body.results[0].locations[0].latLng.lat,
		longitude:body.results[0].locations[0].latLng.lng
	});
	}
});
};


module.exports.geocodeAddress=geocodeAddress;


//https://api.darksky.net/forecast/128efaa6f946fe8920170ac5dc40f724/14.449089,75.865015