import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"; // Fixed spelling
import cors from "cors";
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';
dotenv.config();

const app = express();

// Declare PORT with const
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser()); // Fixed spelling
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`); // Fixed typo
});

app.use('/api/user', userRoute)
app.use("/api/residency", residencyRoute)