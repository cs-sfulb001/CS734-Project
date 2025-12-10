var express = require("express")
var cors = require('cors')
const { spawn } = require('child_process');

var app = express()
app.use(cors());

var bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var HTTP_PORT = 4201

app.listen(HTTP_PORT, '0.0.0.0', () => {
   console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

app.post("/query", (req, res) => {
   console.log("Request: ", req.body.Query)
   const pythonProcess = spawn('python', ['Querry.py', req.body.Query]);
   pythonProcess.stdout.on('data', (data) => {
            console.log(`Python script output: ${data}`);
            res.send(JSON.parse(data)); // Send the output back to the client
        });

   pythonProcess.on('close', (code) => {
         console.log(`Python script exited with code ${code}`);
   });
});

app.post("/RAG", (req, res)=>{   
   console.log("Request: ", req.body.Query)
   //var sampleData = '{"result":"Something stupid about lobster rolls"}'
   //res.send(JSON.parse(sampleData));
   const pythonProcess = spawn('python', ['Querry.py', req.body.Query]);
   pythonProcess.stdout.on('data', (data) => {
            console.log(`Python script output: ${JSON.parse(data)["result"]}`);
            const pythonProcess = spawn('python', ['RAG.py', req.body.Query, JSON.parse(data)["result"]]);
            pythonProcess.stdout.on('data', (data) => {
                     console.log(`Python script output: ${data}`);
                   res.send(JSON.parse(data));
               });
        });

   pythonProcess.on('close', (code) => {
         console.log(`Python script exited with code ${code}`);
   });
});

app.use(function (req, res) {
   res.status(404);
});