import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import { getAllNotes, newNoteCreated } from "../call";
import { useEffect } from "react";

export default function CreateNote({notes,setNotes}){
    const [note,setNote]=useState({title:"",content:""});
    const [newNoteToAdd,setNewNote]=useState(false);

    async function addNewNote(){
        if (note.title.trim()==="" || note.content.trim()==="") {
            alert("Both fields need to be filled!");
            return;
        }
        // const newNoteWithID={...note,id:notes.length+1};
        // // console.log(newNoteWithID);

        // // const {title,content}=note;
        // // console.log(title);
        // // console.log(content);
        // newNoteCreated(note);

        // setNotes((prev)=>{
        //     console.log("prev:",prev);
        //     const updatedArr=[...prev,newNoteWithID];
        //     console.log("newA   rray:",updatedArr);
        //     return updatedArr;
        // });
        const data=await newNoteCreated(note);
        setNotes(data);
        



        setNote({title:"",content:""});
    }

    function handleInput(event){
        console.log(event.target.value)
        const {value,name}=event.target;
        setNote((prev)=>{
            const updatedObj={...prev,[name]:value};
            console.log(updatedObj);
            return updatedObj
        });
    }
    function handlePress(event){
        let key=event.key;
        if(key==="Enter"){
            addNewNote();
        }
    }
    function noteToBeAdded(){
        setNewNote(true);
    }


    return <div className="createNoteContainer">
        {/* {(newNoteToAdd)?<input name="title" value={note.title} type="text" placeholder="Title" className="noteTitle"  onChange={handleInput} onKeyDown={handlePress} required/>:null}; */}
        <input name="title" value={note.title} type="text" placeholder="Title" className="noteTitle"  onChange={handleInput} onKeyDown={handlePress} required/>
        <textarea rows="6" name="content" value={note.content} id="noteContent" placeholder="Take a Note..." onChange={handleInput} onKeyDown={handlePress} required></textarea>
        <button className="addBtn" onClick={addNewNote}><AddIcon /></button>
    </div>
}