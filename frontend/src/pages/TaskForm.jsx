import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const params = useParams()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      if (!params.id) {
        await axios.post('http://localhost:8000/api/tasks', {
          title,
          description,
        })
      } else {
        await axios.put(`http://localhost:8000/api/tasks/${params.id}`, {
          title,
          description,
        })
      }
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    async function getTaskById() {
      const response = await axios.get(
        `http://localhost:8000/api/tasks/${params.id}`,
      )
      setTitle(response.data.title)
      setDescription(response.data.description)
    }
    if (params.id) {
      getTaskById()
    }
  }, [])

  return (
    <div className='flex items-center justify-center h-[calc(100vh-10rem)]'>
      <form className='bg-zinc-950 p-10' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Write a title'
          className='block py-2 px-3 mb-4 w-full text-black'
          onChange={e => setTitle(e.target.value)}
          autoFocus
          value={title}
        />
        <textarea
          placeholder='Write a description'
          rows='3'
          className='block py-2 px-3 mb-4 w-full text-black'
          onChange={e => setDescription(e.target.value)}
          value={description}
        />
        <button type='submit'>{params.id ? 'Update' : 'Save'}</button>
      </form>
    </div>
  )
}

export default TaskForm
