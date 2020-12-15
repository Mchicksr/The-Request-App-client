# The Request App
    This project was made with react and node.js
     -tested with jest and enzyme
# Live link
    request-app-client.vercel.app/
Link to github
    https://github.com/Mchicksr/The-Request-App-client
- Scripts
    -npm start
    -npm test
    npm run build
    npm eject
- components
all components are held in src
    - App
        - where all components are routed and sent to the index to be deployed to the dom.
        - where the database song is being held in the state.
        - Where the API Get is being called.
    - Form
        - where all of the songs inputs are placed and
        connected to API posts.
    - Main
        - the main page is never moved to make it easy for the user to move through the app.
    - Review 
        - Made to receive posts for the user to make comments to the DJ
    - Sent
        - made to give the user a message to alert them the song has been sent
    - Vote
        - made to collect the songs table directly and render on the DOM.
    - API
        - songs Route
            - In the form, you can post from the server where it will be sent and stored in the database. All songs that have been posted by different users all can be pulled from the './songs' route out of the endpoint.

            - To complete the post body for the song's route you need 3 requirements being; name, title, song title. and you have the option of making a comment

            - If one chooses to Post comments they will not show on the app itself for privacy purposes but will show in a GET pull. So you can view the comments in postman or in the database

            - once the event is over in the server there is also a delete feature to clear the database so it can be ready for the next event

        - review Route
            - In the review component you can post a review for the DJ. similar to the comment section this is only held for those who can pull the data in postman or can check the data in the database for privacy reasons.

        - Summary
           The Request App makes your job as a DJ easy and simple. No matter what event, partygoers can download this app and send in their song requests. It is as easy as 1, 2, 3!

Download the application.
Press send requests and fill out the form.
Press submit!

Users also have the option to vote on songs that have already been submitted by pressing the Vote Best Choices button and clicking on any of the songs listed. Users can vote multiple times They can leave their DJ a review by pressing the Send A Review Button.

This app is a comprehensive way for party attendees to submit their song requests and to help the DJ keep the party fun and personalized. 
