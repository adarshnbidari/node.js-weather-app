const request=require('request');

var getWeather=(latitude,longitude,callback)=>{
request({
	url:`https://api.darksky.net/forecast/128efaa6f946fe8920170ac5dc40f724/${latitude},${longitude}`,
	json:true
},(err,res,body)=>{
	if(!err&&res.statusCode===200){
		callback(undefined,{
			temperature:body.currently.temperature,
			apparentTemperature:body.currently.apparentTemperature
		});
	}else{
		callback('Unable to connect to the server');
	}
});
};


module.exports.getWeather=getWeather;