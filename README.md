# SentimentIt-Public
Public documentation for the sentimentIt R package and SentimentIt system workflow.

To begin using the system, create a SentimentIt account at https://www.sentimentit.com. Next, create an MTurk account, and follow the instructions at https://www.sentimentit.com/documentation/aws. Rather than inputting the access key and secret key into an application, simply navigate to MyAccount on the SentimentIt website and enter the information in the corresponding fields. This will link your Amazon account to the SentimentIt system.

When you want to start a new analysis, if you wish to require a certification follow the instructions under the QualtricsCertification folder above. Name the banned and passed certifications something meaningful and remember the names.

Once you have the distribution link for the survey, navigate to the MTurk requestor, Manage, Qualifications tab, and click on Create New Qualification Type. Name the qualification something simple and easily understood by workers. In the description field, enter a brief description, and include the link for the Qualtrics survey so workers can find the certification / training module. An ID will be generated. You will need this on the SentimentIt GUI. Do this a second time for the banned certification, with a different name and description.

Next, on the SentimentIt GUI go to Data, Worker Certifications. Create a new certification. Name this cerification the name of the passed certification used in the Qualtrics JavaScript, and include the Amazon ID retrieved from the last step. Again, do this a second time for the banned certification, naming it the same as in the JavaScript and using the appropriate Amazon ID.

Next, create a HIT setting on the SentimentIt GUI under Data, HIT Settings. Use an informative title, and describe the task, again putting the Qualtrics link in the description. Number of assignments should be set to 1, the reward is the money you will pay for each HIT, the Lifetime is how long the HITs will stay up on MTurk, and the Duration is how long the worker will have to complete the tasks. Make a note of the Lifetime, as this will be useful when using the R package. The linked certification should be the name of the certification used in the SentimentIt GUI and the JavaScript, NOT the name on MTurk.

The new HIT setting will show up on the GUI. Moving forward, all that will now be needed is the HIT setting ID. You can begin using the R package or follow the documentation and use the API using any programming language you want including through the terminal. When you have completed your tasks, it may be a good idea to take the qualification survey offline because the survey signs the researcher in to the system.
