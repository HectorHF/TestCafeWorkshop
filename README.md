# TestCafeWorkshop

1. Clone the repository.
2. Once the repository is cloned, go to the page_model folder
3. Install the dependencies

<code>npm install -g testcafe</code>

<code>npm install dotenv</code>

<code>npm install testcafe-reporter-html</code>

4. Execute the tests (in Google Chrome)

<code>npm run test-all-chrome</code>

If you want to run the tests in another browser, type:

<code>testcafe {{NAME_OF_THE_BROWSER}} ./tests</code>

And if you want a report of the tests, execute this:

<code>testcafe {{NAME_OF_THE_BROWSER}} ./tests --reporter html:output/report.html</code>
