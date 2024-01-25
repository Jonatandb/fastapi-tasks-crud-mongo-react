import { useState } from 'react'

function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const response = await fetch('http://localhost:8000/api/tasks', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
      }),
    })
    const data = await response.json()
    console.log(data)
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
