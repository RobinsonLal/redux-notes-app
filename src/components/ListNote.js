import React from 'react'

import {useSelector} from 'react-redux'

function ListNote() {

    const note = useSelector((state) => state.noteReducer.note)

  return (
    <div>
        {note.map(note => {
            return <div>
                <h2> {note.title} </h2>
                <p> {note.desc} </p>
            </div>
        })}
    </div>
  )
}

export default ListNote