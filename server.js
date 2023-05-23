import express from "express";
import authRoutes from "./routes/auth_Routes.js";

const app = express();
app.use(express.json());

app.use("/", authRoutes);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
