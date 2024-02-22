import  express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));


app.get("/payment", (req, res) => {
    res.send("Hello from payment");
    }
);

app.listen(4242, () => {
  console.log("Server is listening on port 4242");
});

