// import { useState } from 'react';
// import * as notesAPI from '../../utilities/notes-api'
import NoteCard from '../NewNoteForm/NewNoteForm'



export default function NotesPage({ noteList }) {
  //  console.log(noteList)
  return (
    <>
      <div>
        {noteList.length ? noteList.map((note, idx) =>
        (<div key={idx}>
          
            
              <h3>{note.text} | {note.createdAt.toLocaleString()}</h3>
          
          {/* <NoteCard note={note} idx={idx} /> */}
        </div>)) : <h3>No Notes Yet</h3>
        }
      </div>
    </>
  );
}


{/* </div>
      <div>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            autoComplete='off'
            name="text"
            value={addedNote.text}
            onChange={handleChange}
            placeholder="Note"
            required
          />
          <button>Add A Quick Note</button>
        </form>
      </div>
      {noteList.map((note) => (

        <h2>{note.text}</h2>
      ))} */}

