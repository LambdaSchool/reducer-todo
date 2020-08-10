import React, { useState } from 'react'

export function TodoForm (props) {
    const [form, setForm] = useState('')
   return(

    <form onSubmit={(event) => {
        event.preventDefault()
        props.addTodo(form)
        setForm('')
    }}>
        <input 
            name='todo'
            placeholder='Add Todo'
            value={form}
            onChange={(event) => {
                setForm(event.target.value)
            }}
        />
        <button type='submit'>Add Todo</button>
    </form>
   )
}