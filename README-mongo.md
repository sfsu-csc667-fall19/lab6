# Lab 6
Mongodb https://docs.mongodb.com/manual/introduction/
Node driver docs: http://mongodb.github.io/node-mongodb-native/3.1/api/index.html
Quick start for connection: http://mongodb.github.io/node-mongodb-native/3.1/quick-start/quick-start/

## Lab steps
- Download mongodb for your operating system
  - Newer windows builds may not need
  - https://docs.mongodb.com/manual/introduction/
  - Manually start with `bin/mongod --dbpath <path to db>`
- Download https://robomongo.org/download
- Connect to mongodb
- Insert a few documents manually
- Test available endpoints manually
- Add a notes page to display all notes, show the notes and Id (you will need to set up a reducer for this)
- Add an editor that allows entering an _id, plus notes
- Add a button to insert this text, convert it to a post request