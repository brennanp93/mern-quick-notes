import { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import * as notesAPI from '../../utilities/notes-api'
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm';
import NavBar from '../../components/NavBar/NavBar';
import NotesPage from '../../components/NotesPage/NotesPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [noteList, setNoteList] = useState([]);

  useEffect(function() {
    async function getAll() {
      const allNotes = await notesAPI.getAll();
      setNoteList(allNotes)
    };
    getAll();
  }, [])

  async function addNote(addedNote) {
    const newNote = await notesAPI.create(addedNote);
    setNoteList([...noteList, newNote])
  }
 
  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <NewNoteForm addNote={addNote} />
          <NotesPage noteList={noteList} setNoteList={setNoteList}/>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
