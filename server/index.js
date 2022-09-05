const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// mongoose.connect("mongodb+srv://bdaw211:ZmAKUg7kKKEVltlC@teamproject.o3vp87l.mongodb.net/food?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
// });

// Set port from local host to run backend server on
app.listen(3001, () => {
    console.log("Server running on port 3001....")
    console.log("ctrl 'C' to stop the server")
});