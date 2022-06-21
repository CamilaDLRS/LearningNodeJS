import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

function testandoFuction(req:any, res:any)
{
    console.log(req.query.banana);
    console.log(req.query.laranja);
    console.log(req.body.frutas);
    res.send('renan feio');
}

app.get('/camila', (req, res) => {
  res.send('ping');
});

app.post('/renan', testandoFuction);

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});