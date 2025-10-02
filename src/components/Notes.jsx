import DeleteIcon from '@mui/icons-material/Delete';
import { deleteNote } from '../call';
export default function Notes({notes,setNotes}){

    async function handleDelete(id){
        const data=await deleteNote(id);
        setNotes(data);
    }
    
    return( <div className="notesContainer">
        {notes?.map((current)=>{
          return <div className="note" key={current.id}>
            <span className="noteTitleCard">{current.note_title}</span>
            <p className="noteBody">{current.note_content}</p>
            <div className="deleteBtnContainer"><button className="deleteBtn" onClick={()=>(handleDelete(current.id))}><DeleteIcon /></button></div>
            </div>
        })}
    </div>);
}