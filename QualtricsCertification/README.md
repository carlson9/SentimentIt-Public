# QualtricsCertification
The two JavaScript files need to be embedded in the Qualtrics survey for checking and granting certifications. There is an example survey we used for the immigration survey response application. In the pdf, you will see an introduction, and a question that asks for the worker ID, twice. On this question, we check that the worker ID is typed in exactly the same in both boxes to ensure the worker used the correct ID.

The next question simply says ''Click the next button. It will be disabled if you have already taken the survey or have been banned.'' On this question, simply add a JavaScript option in Qualtrics, and copy the code checkCert.js, making the changes to be specific to your account.

Following this there are three ungraded practice HITs to train the worker. There are custom responses if the worker got the answer correct or incorrect. In our example, we only changed the correct/incorrect first word, and explained why one answer is preferred to the other with certain words highlighted.

We then have six graded HITs. These scores can be added to the survey by going to the options, scoring menu of the Qualtrics GUI. We chose to require a score of at least five to qualify. To set this, go to the Survey Flow menu and have the survey go to the failed block if the score is too low, and the passed block otherwise.

In the failed block, embed the JavaScript grantCert.js and change the inputs to your information and the name of the banned certification. This will prevent the worker from trying the survey on a different IP address and will add the worker to your banned list for this certification.

In the passed block, on the final question embed the grantCert.js script, but use the passed certification name instead of the banned certification. The worker will now be certified.

Once the survey is created, distribute the survey with a link. You will want this link in your HIT settings description and the Amazon qualification type description.
