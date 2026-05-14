const express = require('express')
const app = express()
const port = process.env.PORT || 3000

var cors = require('cors')

app.use(express.json());
app.use(cors())

let temp = 0;
let humi = 0;

app.get('/', (req, res) => {
  res.send('ESP32 Server is running!')
})

app.post('/', (req, res) => {
  console.log('Got a POST request', req.body);
  temp = req.body.temp;
  humi = req.body.humidity;
  console.log("Temp: ", temp);
  console.log("Humi: ", humi);
  res.json(1);
})

app.get('/data', (req, res) => {
  let mData = {
    mtemp: temp,
    mhumi: humi
  };
  res.json(mData);
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
