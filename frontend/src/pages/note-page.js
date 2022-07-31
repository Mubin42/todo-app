import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

const NotePage = ({ match }) => {
  
  const { id } = useParams();
  const navigate = useNavigate();
  let [note, setNote] = useState(null);
  
  useEffect(() => {
    getNote();
  }, [id])

  let getNote = async () => {
    let response = fetch(`/api/notes/${id}/`);
    let data = await (await response).json();
    setNote(data);
  }

  let updateNote = async () => {
    fetch(`/api/notes/${id}/update/`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    });
  }

  let deleteNote = async () => {
    fetch(`/api/notes/${id}/delete/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    navigate('/')
  }

  let handleSubmit = () => {
    updateNote()
    navigate('/')
  }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        <button onClick={deleteNote}>Delete</button>
      </div>
      <textarea onChange={(e) => {setNote({...note,'body': e.target.value})}} defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage;