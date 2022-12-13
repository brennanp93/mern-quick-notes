export default function NotesPage({ noteList }) {

  return (
    <>
      <div>
        {noteList.length ? noteList.map((note, idx) =>
        (<div key={idx}>
          <h3>{note.text} | {note.createdAt.toLocaleString()}</h3>
        </div>)) :
          <h3>No Notes Yet</h3>
        }
      </div>
    </>
  );
}