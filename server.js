const express = require("express");
const mysql= require("mysql2");
const app =express();
app.use(express.json());
const db =mysql.createConnection({
   host:"127.0.0.1",
   user:"root",
   password:"Kishan@11",
   database:"blog"


})

//connect the db and check 


db.connect((err)=>{
    if(err){
       throw err;
    }
    console.log("MYSQL CONNECTED")
})

// create table or get request

app.get("/getAllPosts",(req,res)=>{
     let sql="Select * from posts";
     db.query(sql,(err,result)=>{
         if(err) throw err;
         console.log(result);
         res.send(result);
         console.log("ALL POSTS")

     })

})

// get post by id
app.get("/getPostsById/:id",(req,res)=>{
    let sql=`Select * from posts WHERE id= ${req.params.id}`;
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
        console.log("POST is fetched by id")

    })

})
// updatepostByid
app.get("/updatePostById/:id",(req,res)=>{
    let titlegiven="NEW UPDATED TITLE";
    let sql=`UPDATE posts SET title='${titlegiven}' WHERE id= ${req.params.id}`;
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
        console.log("UPDATED BY ID")

    })

})
// delete posts
app.get("/deletePostById/:id",(req,res)=>{
    let titlegiven="NEW UPDATED TITLE";
    let sql=` DELETE FROM posts WHERE id= ${req.params.id}`;
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
        console.log("UPDATED BY ID")

    })

})


//add post
app.get('/addPost',(req,res)=>{
let post = {title:'NEw post',body:"My new book",}
let sql='INSERT INTO posts SET ?';

db.query(sql,post,(err,result)=>{
    if(err) throw err;
    console.log(result);
    res.send(result);
    console.log("POST REQUEST")

})

})



const PORT = 4000;


app.listen(PORT,()=>{
 console.log(`Server running on port ${PORT}`)

})