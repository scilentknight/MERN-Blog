import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Connect to MongoDB using the URI from environment variables
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully.");
  } catch (error) {
    console.log("Something went wrong while connecting to the DB:", error);
  }
};

export { connectDB };
