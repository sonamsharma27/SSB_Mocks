<<<<<<< HEAD
const mongoose = require('mongoose')

/*exports.connect = async function() {
    await mongoose.connect("mongodb+srv://oirapp:oirapp123@oir.o6vnjzq.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true } )
    .then(() => console.log('Connected Successfully'))
    .catch((err) => { console.error(err); });
    
}*/

/*const connect = async () => {
    try {
        mongoose.set('strictQuery',true);
        await mongoose.createConnection("mongodb+srv://oirapp:oirapp123@oir.o6vnjzq.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Successfully connected mongodb');
    } catch(err){
        console.log('====================================');
        console.log(err.message);
        console.log('====================================');
        process.exit(1)
    }
}*/

exports.connect = async function() {
        await mongoose.connect("mongodb+srv://oirapp:oirapp123@oir.o6vnjzq.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected Successfully'))
        .catch((err) => { console.error(err); });
}

// exports.connect = async function () {
//     const db = mongoose.connect("mongodb+srv://oirapp:oirapp123@oir.o6vnjzq.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true });
//     db.on(`error`, console.error.bind(console, `connection error:`));
//     db.once(`open`, function () {
//       // we`re connected!
//       console.log("MongoDB connected on ");
//     });
//   };
=======
const mongoose = require('mongoose')

/*exports.connect = async function() {
    await mongoose.connect("mongodb+srv://oirapp:oirapp123@oir.o6vnjzq.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true } )
    .then(() => console.log('Connected Successfully'))
    .catch((err) => { console.error(err); });
    
}*/

/*const connect = async () => {
    try {
        mongoose.set('strictQuery',true);
        await mongoose.createConnection("mongodb+srv://oirapp:oirapp123@oir.o6vnjzq.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Successfully connected mongodb');
    } catch(err){
        console.log('====================================');
        console.log(err.message);
        console.log('====================================');
        process.exit(1)
    }
}*/

exports.connect = async function() {
        await mongoose.connect("mongodb+srv://oirapp:oirapp123@oir.o6vnjzq.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected Successfully'))
        .catch((err) => { console.error(err); });
}

// exports.connect = async function () {
//     const db = mongoose.connect("mongodb+srv://oirapp:oirapp123@oir.o6vnjzq.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true });
//     db.on(`error`, console.error.bind(console, `connection error:`));
//     db.once(`open`, function () {
//       // we`re connected!
//       console.log("MongoDB connected on ");
//     });
//   };
>>>>>>> 15ce9880dda5b0197b18653a98ab0045fc99e94d
//module.exports = connect