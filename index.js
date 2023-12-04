import  Express from "express";
import Cloudant from '@cloudant/cloudant';
import data from "./movies.js";
import {cloudantPassword , cloudantUrl , cloudantUsername} from './cred.js'
const server = Express()



const cloudant = new Cloudant({
    url: cloudantUrl,
    username: cloudantUsername,
    password: cloudantPassword,
  });
  cloudant.ping((err) => {
    if (err) {
      console.error('Failed to connect to Cloudant:', err);
    } else {
      console.log('Connected to Cloudant');
    }
  });

  const dbName = 'movies';
  const db = cloudant.db.use(dbName);

 

 

  
 
 

server.listen(4200 , ()=>{
    console.log("server started at port 4200")
})
