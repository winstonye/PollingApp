const mongoose = require('mongoose');

// Map global promises
mongoose.Promise = global.Promise;


// Mongoose Connect
mongoose
.connect('mongodb://wontonye:puccab00@ds247619.mlab.com:47619/realtimepusherpollapp')
.then(()=>console.log('mongodb connected'))
.catch((err=>console.log(err)));