import express from 'express';
import { dpconnection } from './db/connection';
import userModel from './db/models/user.model';


const app = express()
const port :number = 3000


dpconnection()


app.use(express.json())


app.post('/adduser',async(req,res) => {
   let adduser = await userModel.insertMany(req.body)
    res.json({message:"user added",adduser})
})



app.listen( port,()=> console.log(`server is run ${port}`))



// let x = 20;
// let y = 20;


// let userName: string ="nour"

// let haveAcar : boolean = false 

// let userAge : number = 10;

// let f:null =null
// let z:undefined=undefined

// let user: object ={
//     name:"ahmed"
// }

// let friends : string[] = ['as','ad','ab']

// let colors : Array<string> =['jj','sd']


// union
// let res :string | null = "asd" 

//  res = null

//  let products : Array<string|number> = ['TTT' ,2023]
//  let product : (string|number)[] = ['TTT' ,2023]

//  //tuple
//  let pro : [string,number] = ['TTT' ,2023]

//  function login(userName:string,userAge?:number){
//     console.log("hi",userName,userAge)
//  }

//  login("nour")

//  //genaric

//  function sliceArray<type>(arr:type[]) :type[] {
//     return arr.slice(0,2)
//  }

//  sliceArray<string>(['tt','yy','yyy'])
//  sliceArray<number>([1,2,3,4,5])


//  interface User {
//     name:string,
//     age:number,
//     salary:number,
//     id:number
//  }

// let users:User[] = [
//     {
//         name:"ah",
//         age:20,
//         salary:3000,
//         id:2
//     },
//     {
//         name:"ah",
//         age:20,
//         salary:3000,
//         id:2 
//     },
//     {
//         name:"ah",
//         age:20,
//         salary:3000,
//         id:2
//     }
// ]


