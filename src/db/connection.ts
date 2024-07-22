import  mongoose  from "mongoose";

export function dpconnection(){
  mongoose.connect('mongodb://localhost:27017/typescript').then(()=>{
    console.log('connectd to db')
  }).catch((err)=>{
    console.log("error")
  })
}