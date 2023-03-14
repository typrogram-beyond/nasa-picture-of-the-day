function getPictureOfTheDay() {
    // We get today's date by doing new Date()
    var todaysDate = new Date();

    // We then extract the year, month and date, so that we can 
    // add those variables to the url
    var year = todaysDate.getFullYear();
    var month = todaysDate.getMonth() + 1; // We need to add 1, because the months start at 0.
    var date = todaysDate.getDate();

    // This is where the API key goes
    var API_KEY = 'ask-your-tech-lead-for-the-api-key';

    // This is where we fetch the data from our API.
    fetch('https://api.nasa.gov/planetary/apod?api_key=' + API_KEY + '&date=' + year + '-' + month + '-' + date)
        .then((response) => response.json())
        .then((data) => {
            // This is where you populate the html elements and
            // element attributes with values from the result

        })
        .catch(error => console.error(error));
}