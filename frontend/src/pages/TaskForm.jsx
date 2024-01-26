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

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/tasks/${params.id}`)
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
      setTitle(response.data.title ?? '')
      setDescription(response.data.description ?? '')
    }
    if (params.id) {
      setTitle('Loading title...')
      setDescription('Loading description...')
      getTaskById()
    }
  }, [params.id])

  return (
    <div className='flex items-center justify-center'>
      <div>
        <form className='bg-zinc-950 p-10' onSubmit={handleSubmit}>
          <h1 className='text-3xl font-bold my-4'>{params.id ? 'Update Task' : 'Create Task'}</h1>
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
            value={description ?? ''}
          />
          <button
            type='submit'
            className='bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded mt-5'
          >
            {params.id ? 'Update' : 'Save'}
          </button>
        </form>

        {params.id && (
          <button
            className='bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded mt-5'
            onClick={() => handleDelete()}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  )
}

export default TaskForm
