// Alli's list:
// 1. Navigate to my 'code' folder
// 2. Make a new folder(named for the project)
// 3. Inside the folder create a file called 'index.js'
// 4. Open my terminal and navigate to the project
// 5. Run the command "npm init -y"
// 6. Run the command "npm install express"
// 7. Open up 'index.js'
// 8. Require express at the top of the file
// 9. Initialize the app variable
// 10. Create the home page route
//     1.Call app.get()
//     2. Set '/' as the path (first argument)
//     3. write callback function with req, res
//     4. call res.send('hello world')

const express = require('express');

const app= express();

app.get('/', (req,res) => {
    console.log("page has been opened");
    res.send('HOME PAGE');
});

app.listen(3000, () => {
    console.log('server started');
});