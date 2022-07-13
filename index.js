const express=require('express');
const app = express();
const port=8000;


app.listen(port,function(err){

    if(err){
        console.log(`Error in starting the Server; ${err}`);
    }
    console.log(`SERVER IS UP AND RUNNING IN PORT ${port}`);

});