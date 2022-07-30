import React, { useState, useEffect} from 'react';
import ListItem from '../components/list-item';


const NotesListPage = () => {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
    let response = await fetch('/api/notes/');
    let data = await response.json();
    setNotes(data);
  }
  return (
    <div>
      <div className='note-list'>
        {notes.map((note, index) => (
          <ListItem key={index} note={note}/>
        ))}
      </div>
    </div>
  )
}

export default NotesListPage;