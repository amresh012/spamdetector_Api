import express from 'express'
import dotenv from 'dotenv'
import userRoutes from "./Routes/userRoute.js";
// const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
