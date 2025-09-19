# ethvaultTeste
Test

I attempted to integrate a simple CRUD "Notes" API directly into the existing project. However, I ran into issues with accessing the correct port in Postman—the requests kept loading indefinitely. Despite trying to fix it within the main project, it didn’t work as expected.

As a solution, I created a separate file called tests-notes.js in the main folder. To run the API, simply execute:
node tests-notes.js
This allows testing the Notes CRUD endpoints independently of the rest of the project.
