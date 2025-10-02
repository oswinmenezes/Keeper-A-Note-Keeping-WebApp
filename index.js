import express from "express";
import pg from "pg"
import cors from "cors";
import env from "dotenv"

env.config();

const port=process.env.BACKEND_PORT || 3000;
const app=express();
app.use(cors());
app.use(express.json());
const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: String(process.env.DB_PASSWORD), // force string
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT)
});

db.connect();

app.get("/getAllNotes",async(req,res)=>{
    const result=await db.query("SELECT * FROM notes");
    // console.log(result.rows);
    res.json(result.rows);
});
app.post("/addNewNote",async(req,res)=>{

    const {title,content}=req.body;
    
    console.log("api call succesful...")
    console.log("new note title:",title);
    console.log("new note content:",content);

    await db.query("INSERT INTO notes (note_title,note_content) VALUES($1,$2)",[title,content]);
    
    const result=await db.query("SELECT * FROM notes");
    // console.log(result.rows);
    res.json(result.rows);
});
app.post("/deleteNote/:id",async(req,res)=>{
    const note_id=req.params.id;
    await db.query("DELETE FROM notes WHERE id=$1 RETURNING *",[note_id]);
    const result=await db.query("SELECT * FROM notes");
    console.log(result.rows);
    res.json(result.rows);
});

app.listen(port,()=>{
    console.log(`server is running at port  ${port}`);
})
