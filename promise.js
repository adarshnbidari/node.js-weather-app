const request=require('request');

var geocodeAddress=(address)=>{
	return new Promise((resolve,reject)=>{
	var encodedAddress=encodeURIComponent(address);

request({
	url:`http://www.mapquestapi.com/geocoding/v1/address?key=VHP88AayFqWGaP4y8UWjB6GGOJGcj3Up&location=${encodedAddress}`,
	json:true
	
},(error,response,body)=>{
	
	if(error){
		reject('Unable to connect to the server!...');
	}else if(response.statusCode!==200){
		reject('Unable to find the address!..');	
	}else if(response.statusCode===200){
			
	resolve({
		address:body.results[0].providedLocation.location,
		latitude:body.results[0].locations[0].latLng.lat,
		longitude:body.results[0].locations[0].latLng.lng
	});
	}
});
	});
};

geocodeAddress('19146').then((location)=>{
	console.log(JSON.stringify(location,undefined,2));
}).catch((err)=>{
	console.log(err);
})