The Request App
    This project was made with react and node.js
     -tested with jest and enzym
Live link
    request-app-client.vercel.app/
Link to github
    https://github.com/Mchicksr/The-Request-App-client
- Scripts
    -npm start
    -npm test
    npm run build
    npm eject
-components
all components are held in src
    -App
        -where all componets are routed and sent to to index to be deployed to the dom.
        -where the databases song is being held in state.
        -Where the API Get is being called.
    -Form
        -where all of the songs inputs are placed and
        conneted to API posts.
    -Main
        -the main page that is never moved making it easy fo the user to move through the app.
    - Review 
        -Made to receive posts for user to make comments to dj
    -Sent
        -made to give user a message to alert them the song has been sent
    -Vote
        -made to collect the songs table directly and render on the DOM.
    -API
        -songs Route
            -In the form you can post from the server where it will be sent and stored in the database. All songs that have been posted by different useres all can be pulled from the './songs' route out of the end point

            -To complete the post body for the songs route you need 3 requirements being; name,title,song title. and you have the option of making a comment

            -If one chooses to Post comments they will not show on the app itself for privacy purposes, but will show in a GET pull. So you can view the comments in postman or in the database

            -once the event is over in the server ther is also a delete deature to clear the database so it can be ready for the next event

        -review Route
            -In the review compononent you can post a review for the dj. simalar to the comment section this is only held for those who can pull the data in postman or can check the data in the database for privacy reasons.

        -Summary
            this app is for me as a dj to be able to take requests from my events guests. Whie also getting feedback of the most popular songs of the moment voted on by the guests themselves. All to assure that it will be a fun succesful event