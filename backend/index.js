import express from "express";
import cors from "cors";
import { LoginRoute } from "./routes/auth.LoginRoute.js";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello ");
});

app.use(LoginRoute);
app.listen(port, () => {
  console.log(`running succesfully http://localhost:${port}`);
});
