// const http = require("https");
// const app_id = "1448ed26";
// const app_key = "d0918d9de95451edaeb655f08bb0a53d";
// const wordId = "ace";
// const fields = "pronunciations";
// const strictMatch = "false";
// const options = {
//    host: 'od-api.oxforddictionaries.com',
//    port: '443',
//    path: '/api/v2/entries/en-gb/' + wordId + '?fields=' + fields + '&strictMatch=' + strictMatch,
//    method: "GET",
//    headers: {
//      'app_id': app_id,
//      'app_key': app_key
//    }
//  };   

// http.get(options, (resp) => {
//   let body = '';
//   resp.on('data', (d) => {
//     body += d;
//   });
//   resp.on('end', () => {
//     let parsed = JSON.stringify(body);
//     console.log(parsed);
//   });
// });
import fetch from 'node-fetch';
import express from 'express'
import cors from 'cors'
// const express = require("express");
// const fetch = require("node-fetch");
// var cors = require("cors");

const app = express();

app.use(cors());

let app_id = "1448ed26";
let app_key = "d0918d9de95451edaeb655f08bb0a53d";

let endpoint = "entries";
let language_code = "en-gb";
let word = "example";

app.get("/:id",(req,res)=>{
  const word = req.params.id;

  let url = `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${language_code}/${word}`;

  fetch(url,{
    method:"GET",
    mode:"no-cors",
    headers:{
      app_key:app_key,
      app_id:app_id
    }
  })
  .then((response)=>response.json())
  .then((data)=>res.send(data));
})
app.listen(5000)