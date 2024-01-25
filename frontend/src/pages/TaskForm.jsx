import { useState } from 'react'
import axios from 'axios'

function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    await axios.post('http://localhost:8000/api/tasks',
    {
      title,
      description,
    })
    setTitle('')
    setDescription('')
    e.target.reset()
  }

  return (
    <div className='flex items-center justify-center h-[calc(100vh-10rem)]'>
      <form className='bg-zinc-950 p-10' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Write a title'
          className='block py-2 px-3 mb-4 w-full text-black'
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder='Write a description'
          rows='3'
          className='block py-2 px-3 mb-4 w-full text-black'
          onChange={e => setDescription(e.target.value)}
        />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}

export default TaskForm
