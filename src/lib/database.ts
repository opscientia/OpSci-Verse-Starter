import mongoose, { ConnectOptions } from "mongoose";

const connect = () => {
  mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions,
    (err) => {
      if (err) console.log("Error connecting to MongoDB");
      else console.log("Connected to MongoDB");
    }
  );
};

export default connect;
