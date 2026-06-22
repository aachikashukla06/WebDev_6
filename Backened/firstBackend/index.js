import dotenv from "dotenv";
dotenv.config();

import express from "express";
import AuthRouter from "./src/routers/auth.router.js";
import PublicRouter from "./src/routers/public.route.js";

const app = express();

app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);

//Default API
app.get("/", (req, res) =>
    {
    console.log("Default Get API Hit");
    res.json({message: "Welcome to my first backend Project"});

})

app.post("/login", (req,res) =>
     {
    res.json({message: "Login successful"});
});

app.get("/logout", (req,res) =>
     {
    res.json({message: "Logout successful"});
});
app.post("/register", (req,res) =>
     {
    res.json({message: "registration successful"});
});
app.put("/update", (req,res) =>
     {
    res.json({message: "update successful"});
});
app.delete("/delete", (req,res) =>
     {
    res.json({message: "delete successful"});
});
const port = process.env.PORT || 5000;
app.listen(port,() => {
    console.log("Server Started on port:", port);
    })
