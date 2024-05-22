import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection = () => {

    const DB_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-m9alcgh-shard-00-00.w4fainm.mongodb.net:27017,ac-m9alcgh-shard-00-01.w4fainm.mongodb.net:27017,ac-m9alcgh-shard-00-02.w4fainm.mongodb.net:27017/?ssl=true&replicaSet=atlas-c82tf6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=GmailClone`;

    try{
       mongoose.connect(DB_URI, { useNewUrlParser: true });
       console.log('Database Connected Successfully');
    } catch(error){
        console.log('Error while connecting to database', error.message);
    }
}

export default Connection;
