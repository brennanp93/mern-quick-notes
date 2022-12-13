import { useState } from 'react';

export default function NewNoteForm({ addNote }) {
    const [addedNote, setAddedNote] = useState({
        text: '',
    });
    function handleChange(evt) {
        setAddedNote({ text: evt.target.value });
    }
    function handleSubmit(evt) {
        evt.preventDefault();
        addNote(addedNote)
        setAddedNote({ text: "" })
    }
    return (
        <>
            <h1>Enter Your New Note</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        autoComplete='off'
                        name="text"
                        value={addedNote.text}
                        onChange={handleChange}
                        placeholder="Add A Note"
                    // required
                    />
                    <button type='submit'>Add A Quick Note</button>
                </form>
            </div>
        </>
    );
}