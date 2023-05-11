const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/?directConnection=true&appname=MongoDB%20Compass&ssl=false&readPreference=primary";
const connectToMongo = () => {
    mongoose.connect(mongoURI).then(()=>{
        console.log("connected to mongo successfully");
    })
}

module.exports=connectToMongo;