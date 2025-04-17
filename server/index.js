// const express = require('express');
import express from "express";
import cors from "cors";
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

//Метод GET
app.get("/api/data", (req, res) => {
  res.json([
    { title: "Яблоко", message: "Красное, спелое яблоко" },
    { title: "Лимон", message: "Золотистый, кислый лимон" },
    { title: "Груша", message: "Сладкая, сочная груша" }
  ]);
});

//http://localhost:5000/api/data

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});