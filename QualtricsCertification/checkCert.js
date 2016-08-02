Qualtrics.SurveyEngine.addOnload(function()
{	
    this.disableNextButton();
	var that = this;
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
			var get_url ="https://www.sentimentit.com/api/certifications/certname/turk_workers/" + worker_id + ".json?email=name@school.edu&auth_token="+auth_token;
			$j.ajax({
				type: 'GET',
				url: get_url,
				success: function (data) {
					if(data.allowed == true){
						alert('You have already taken this survey and cannot continue.');
					}else{
					   that.enableNextButton();
					}
				},
				error: function (data) {
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

