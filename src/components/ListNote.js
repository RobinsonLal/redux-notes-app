import React from 'react'

import '../components/ListNote.css'

import { useSelector } from 'react-redux'

function ListNote() {

    const note = useSelector((state) => state.noteReducer.note)

    return (
        <div>
            {note.map(note => {
                return <div className='noteCard' >
                    <h2> {note.title} </h2>
                    <p> {note.desc} </p>
                </div>
            })}
        </div>
    )
}

export default ListNote