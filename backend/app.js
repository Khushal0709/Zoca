import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./route/reservationRoute.js"

const app=express();
dotenv.config();
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true
}));
dbConnection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/reservations',reservationRouter);
// app.post('/reservations/send', (req, res) => {
//   res.status(200).json({ message: 'Reservation sent!' });
// });

app.use(errorMiddleware);
export default app;