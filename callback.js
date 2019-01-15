var getUser=(id,callback)=>{
	var user={
		id,
		name:'adarsh'
	};
	
	setTimeout(()=>{
		callback(user);
	},2000);
	
};
