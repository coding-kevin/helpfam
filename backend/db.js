require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, // to avoid bugs/error regarding the old URL string parser
            useUnifiedTopology: true // https://mongodb.github.io/node-mongodb-native/3.3/reference/unified-topology/
        });

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;