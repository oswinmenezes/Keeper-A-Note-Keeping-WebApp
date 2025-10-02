import axios from "axios"

const backendURL=`http://localhost:3000`;

export async function getAllNotes(){
    const res=await axios.get(`${backendURL}/getAllNotes`);
    console.log("logging the notes");
    console.log(res.data);
    return res.data;
}
export async function newNoteCreated(note){
    const res=await axios.post(`${backendURL}/addNewNote`,note);
     console.log("res logging:");
     console.log(res.data);
     return res.data;
}
export async function deleteNote(id){
    console.log("time to delete...");
    const res= await axios.post(`${backendURL}/deleteNote/${id}`);
    return res.data;
}
