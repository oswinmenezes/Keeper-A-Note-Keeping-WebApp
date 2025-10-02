import Header from "./components/header"
import Notes from "./components/Notes"
import Footer from "./components/footer"
import CreateNote from "./components/createNote"
import { useState } from "react"
import { getAllNotes } from "./call"
import { useEffect } from "react"

export default function App(){
  const [notes,setNotes]=useState([]);//array notes stores all notes
  console.log("TIME TO GET ALL NOTES");
  useEffect(()=>{
    async function fetchNotes(){
      const data=await getAllNotes();
      setNotes(data);
    }
    fetchNotes();

  },[]
);
console.log(JSON.stringify(notes, null, 2));
  return <div  style={{margin:"0"}}>
  <Header />
  <div className="homePage">
    <CreateNote notes={notes} setNotes={setNotes} />
  <Notes notes={notes} setNotes={setNotes} />
  <Footer />
  </div>
  </div>
}