// const express = require('express');
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Массив для хранения данных
let dataStore = [];

 // Обработка POST-запросов
app.post('/api/data', (req, res) => {
  const newData = req.body;
  dataStore.push(newData); // Сохраняем данные в массив
  //res.status(201).json(newData); // Отправляем ответ с новыми данными
  });

//Метод GET
app.get("/api/data", (req, res) => {
  res.json(dataStore);
});

//http://localhost:5000/api/data

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});