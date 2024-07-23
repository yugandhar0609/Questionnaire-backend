import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const Mongo_Url = process.env.ATLAS_SECRECT;

const Connect = () => {
  mongoose.connect(Mongo_Url)
    .then(() => {
      console.log("MongoDB is connected....");
    })
    .catch((error) => {
      console.log("Connection error...", error);
    });
};

export default Connect;
