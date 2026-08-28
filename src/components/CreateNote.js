import React, { useState } from 'react'

import {useDispatch} from 'react-redux'
import { createNote } from '../redux/slices/noteSlice'

function CreateNote() {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const dispatch = useDispatch()

    function handleSubmit (e) {
        e.preventDefault()
        dispatch(createNote({
            title,
            desc
        }))
    }

  return (
    <div>
        <form onSubmit={handleSubmit} >
        <input placeholder='Title' type="text" onChange={(e) => {setTitle(e.target.value)}} />
        <input placeholder='Description' type="text" onChange={(e) => {setDesc(e.target.value)}} />
        <input type="submit" onClick={handleSubmit} />
        </form>
    </div>
  )
}

export default CreateNote