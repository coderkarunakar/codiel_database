const express = require('express');
const app = express();
const port = 8000;

        //ROUTES LANE...

// use express router
app.use('/', require('./routes'));

//localhost:8000/users/profile to access this
app.use('/users',require('./routes/users'))
// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


                //SERVER PORT RUNNING LANE...
app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
