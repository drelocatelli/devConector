const mongoose = require('mongoose');
require('dotenv').config();
const db = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.DBCLUSTERNAME}.wkgwx.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("[Database] is connected");
    }catch(err) {
        console.error(err);
    }
}

module.exports = connectDB;