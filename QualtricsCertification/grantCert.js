Qualtrics.SurveyEngine.addOnload(function()
{	
	var worker_id = "${q://QID29/ChoiceTextEntryValue/1}";
	var post_url = "https://www.sentimentit.com/api/sessions.json";
	$j.ajax({
		type: 'POST',
		url: post_url,
		data: {email: 'name@school.edu', password: 'UniquePassword'},
		success: function (data) {
			if(data.success == true){
				auth_token = data.auth_token;
			}
		},
	});
	function waitForElement () {
		if(typeof auth_token !== "undefined"){
			var input_data = "{\"email\":\"name@school.edu\",\"auth_token\":\"" + auth_token + "\",\"certification\": \"certname\",\"workers\":[\""+worker_id+"\"]}";
			$j.ajax({
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
