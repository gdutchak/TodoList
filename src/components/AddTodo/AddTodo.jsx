import { useState } from 'react';
import './AddTodo.css';
import { Validation } from '../Validation/Validation';

export const AddTodo = ({todo}) => {

const [error, setError] = useState('')

const createTodo = (e) => {
    e.preventDefault()

    if (!e.currentTarget.elements.title.value.trim()) {
        setError('title')
        return
    } else if(!e.currentTarget.elements.description.value.trim()) {
        setError('description')
        return
    }

    let todoEl = {
        id: Math.random().toFixed(5),
        title: e.currentTarget.elements.title.value.trim(),
        description: e.currentTarget.elements.description.value.trim(),
        status: false,
    }
    todo(prev=> [...prev, todoEl])
    e.currentTarget.reset()
    setError('')
}

    return(
        <form onSubmit={createTodo} className='form'>
        <label>
            <span className="labelForm">Title:</span>
            {error === 'title' 
            ? <input type="text" name="title" placeholder="Enter title" className="inputForm inputForm--red"/>
            : <input type="text" name="title" placeholder="Enter title" className="inputForm"/>}
            {error === 'title'&& <Validation/>}
        </label>
        <label>
            <span className="labelForm">Descripton:</span>
            {error === 'description' 
            ? <input type="text" name="description" placeholder="Enter description" className="inputForm inputForm--red"/>
            : <input type="text" name="description" placeholder="Enter description" className="inputForm"/>}
            {error === 'description' && <Validation/>}
        </label>
        <button type="submit" className="buttonForm">Create</button>
        </form>
    )
}