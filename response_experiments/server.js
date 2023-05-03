import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();
const port = 3002;

app.use(cors());
//app.use(express.urlencoded({extended: true}));
app.use(express.json());

let names = ['Hans', 'Toni', 'Homer', 'Bart', 'Lisa'];

app.delete('/name', multer().none(), (req, res) => {
  console.log(req.body.name);
  names = names.filter((n) => n !== req.body.name);
  console.log(names);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log("Server ist gestartet :)");
});
