import express from "express";
import cors from "cors";
import { router } from "./routes/userRoute.js";
export const app = express();
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json());
app.use("/user", router);
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "User API is running",
    });
});
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});
