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

function isMagic(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

app.get('/api/check/:number', (req, res) => {
  const number = parseInt(req.params.number, 10);
  if (isNaN(number)) {
    res.status(400).send('Bad Request: Ungültige Eingabe');
  } else {
    res.status(200).send(isMagic(number) ? 'true' : 'false');
  }
});

app.listen(port, () => {
  console.log("Server ist gestartet :)");
});
