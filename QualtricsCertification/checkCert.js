Qualtrics.SurveyEngine.addOnload(function()
{	
    this.disableNextButton();
	var that = this;
	var worker_id = "${q://QID29/ChoiceTextEntryValue/1}"; //this is the worker ID inputted by the respondent at the beginning of the survey (question ID 29, text field 1)
	var post_url = "https://www.sentimentit.com/api/sessions.json";
	$j.ajax({ //get auth token
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
			var get_url ="https://www.sentimentit.com/api/certifications/certname/turk_workers/" + worker_id + ".json?email=name@school.edu&auth_token="+auth_token; //replace with SentimentIt email and password, and change certname to the banned certification associated with the certification, e.g. bannedmoviereviews
			$j.ajax({ //if the worker is banned, the next button will stay disabled
				type: 'GET',
				url: get_url,
				success: function (data) {
					if(data.allowed == true){
						alert('You have already taken this survey and cannot continue.');
					}else{
					   that.enableNextButton();
					}
				},
				error: function (data) { //function will error if worker is not in system - means the worker has not attempted any certifications so should be allowed to continue
					that.enableNextButton();
				}
			});
		} else {
			setTimeout(function(){
				waitForElement();
			},250);
		}
	}
	waitForElement()
});

