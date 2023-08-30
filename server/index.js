// server/index.js
import cors from 'cors';
import express from 'express';
import 'dotenv/config'

const app = express();
app.use(cors());

//Set the port that you want the server to run on
const PORT = process.env.PORT || 8080;
const APIKEY = process.env.API_KEY


//creates an endpoint for the route /api
app.get('/', (req,res) =>{
res.send('This is the home page')
})

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from ExpressJS' });
});

app.get('/name', (req, res) => {
    const name = {name: "Jia"}
    res.json(name);
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Your girl is listening on ${PORT}`);
});