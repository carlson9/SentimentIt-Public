Qualtrics.SurveyEngine.addOnload(function()
{	
	var worker_id = "${q://QID29/ChoiceTextEntryValue/1}"; //this is the worker ID inputted by the respondent at the beginning of the survey (question ID 29, text field 1)
	var post_url = "https://www.sentimentit.com/api/sessions.json";
	$j.ajax({ //get auth_token
		type: 'POST',
		url: post_url,
		data: {email: 'name@school.edu', password: 'UniquePassword'}, //replace with SentimentIt email and password
		success: function (data) {
			if(data.success == true){
				auth_token = data.auth_token; //get the authorization token
			}
		},
	});
	function waitForElement () { //wait for the auth_token variable to be defined before executing next call
		if(typeof auth_token !== "undefined"){
			var input_data = "{\"email\":\"name@school.edu\",\"auth_token\":\"" + auth_token + "\",\"certification\": \"certname\",\"workers\":[\""+worker_id+"\"]}"; //replace with SentimentIt email and password, and certname should be the name of the passed certification in the block if the worker passed the qualification, and should be the name of the banned certification if the worker did not pass
			$j.ajax({ //create the certification for the worker
				type: 'POST',
				url: "https://www.sentimentit.com/api/certifications/create.json",
				contentType: 'application/json',
				
				data: input_data,
				success: function (data) {
					console.log(data);
				},
				error: function (data) {
					console.log(data);
				},
				processData: false,
			});
		} else {
			setTimeout(function(){
				waitForElement();
			},250);
		}
	}
	waitForElement ()	
});
