# DogHero Challenge
# Project Link

https://doghero-puplove.herokuapp.com/

# Objective

Create an app for dog walkers/owners - creation, listing and pet introduction, client and walker.

# What I've Done
My plan was to build a system to connect users and dog walkers.
* Users can add dogs to their pet list and see their info displayed, they can schedule walks and choose specific dogs from their pet list that will be going on those walks. They can also see a list of their scheduled walks and check if they are confirmed or not (This isn't available in the front-end yet!).
* When a walk is scheduled, an email is sent to all dog walkers in the system, letting them know a walk is available (the plan was to send this email *only to dog walkers near you*, but that wasn't done yet, I plan on making it with google place API and $near queries from MongoDB).
* After a dog walker sees the email, he/she can visit the app and confirm the walk they'll be attending. The confirmed walk will be linked to their user and displayed in a list.
(Pages for Walkers aren't implemented in the front-end yet, but all routes are done!).

# Instructions
To run this project:

1. Download this repository
2. Using the terminal, inside the project folder, for both client and server, run npm i to install all dependencies.
`npm i`

3. Still inside the project folder, for both client and server, run npm start to build the project.
`npm start`

4. Using another instance of the terminal, run:
`service mongod start` 
&& 
`mongo`

If you don't have MongoDB installed: ( https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/ ) 


# Technologies Used
* Node.js
* Express.js
* MongoDB
* React (with hooks)
* Sass
* HTML
* Postman
* Axios
* Heroku

# Next Steps:
* Finish pages meant for dog walkers, the routes are ready, but the front-end doesn't exist yet, apart from sign up.
* Implement responsiveness.
* Calendar and Clock for walk scheduling.
* Error treatment in front-end, which is lacking.
* Testing with Jest, Enzyme and maybe Cypress for Front-End.
* Testing with Mocha or Jest for Back-End.
* Containarization with Docker.
* Build API documentation.
* Rebuild it all in another language! (Ruby/Angular)
