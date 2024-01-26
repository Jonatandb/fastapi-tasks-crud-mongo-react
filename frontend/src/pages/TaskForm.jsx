import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { createTask, deleteTask, fetchTask, updateTask } from '../api/tasks'

function TaskForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [completed, setCompleted] = useState(false)
  const params = useParams()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      if (!params.id) {
        try {
          await createTask({ title, description })
        } catch (error) {
          console.log(error?.message)
        }
      } else {
        try {
          await updateTask(params.id, { title, description, completed })
        } catch (error) {
          console.log(error?.message)
        }
      }
      navigate('/')
    } catch (error) {
      console.log(error?.message)
    }
  }

  const handleDelete = async e => {
    e.preventDefault()
    try {
      try {
        await deleteTask(params.id)
      } catch (error) {
        console.log(error?.message)
      }
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    async function getTaskById() {
      try {
        const response = await fetchTask(params.id)
        setTitle(response.data.title ?? '')
        setDescription(response.data.description ?? '')
        setCompleted(response.data.completed)
      } catch (error) {
        console.log(error?.message)
      }
    }
    if (params.id) {
      setTitle('Loading title...')
      setDescription('Loading description...')
      getTaskById()
    } else {
      title && setTitle('')
      description && setDescription('')
    }
  }, [params.id])

  return (
    <div className='flex items-center justify-center'>
      <div>
        <form className='bg-zinc-950 p-4 rounded-xl' onSubmit={handleSubmit}>
          <h1 className='text-3xl font-bold mb-4 text-center'>
            {params.id ? 'Update Task' : 'Create Task'}
          </h1>
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
          <div className='flex justify-evenly'>
            <button
              type='submit'
              className='bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded mt-5'
            >
              {params.id ? 'Update' : 'Save'}
            </button>
            {params.id && (
              <button
                className='bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded mt-5'
                onClick={handleDelete}
              >
                Delete
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskForm
