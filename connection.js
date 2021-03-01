const {Sequelize} = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const Trades = require('./models/trades');

return sequelize.authenticate()
    .then(result => {
        console.log(`SQLite successfully connected!`);
        return Trades.sync();
    })
    .then(result => {
        console.log(`Trades table created`);
        return result;
    })
    .catch(error => {
        console.error('Unable to connect to SQLite database:', error);
    })


// const mongoose = require('mongoose');

// return dbConnection = async() => {
//     const url = "mongodb+srv://stensul_user:L6C8AevO38vT3P4c@cluster0.7gl58.mongodb.net/stensul_db";
//     try {
        
//         await mongoose.connect( url , {
//             useNewUrlParser: true, 
//             useUnifiedTopology: true,
//             useCreateIndex: true
//         });

//         console.log('DB Online');


//     } catch (error) {
//         console.log(error);
//         throw new Error('Error a la hora de inicializar BD');
//     }


// }

// module.exports = {
//     dbConnection
// }