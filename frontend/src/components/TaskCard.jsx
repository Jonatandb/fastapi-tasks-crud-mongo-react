import { useNavigate } from 'react-router-dom'
import { updateTask } from '../api/tasks'
import { useState } from 'react'
import { useEffect } from 'react'

function TaskCard({ task }) {
  const { _id, title, description } = task
  const [completedTask, setCompletedTask] = useState(task.completed)
  const navigate = useNavigate()

  useEffect(() => {
    const handleCompleted = async () => {
      const res = await updateTask(_id, { completed: completedTask })
      setCompletedTask(res.data.completed)
    }
    handleCompleted()
  }, [completedTask])

  return (
    <div
      className='bg-zinc-950 p-4 hover:cursor-pointer hover:bg-gray-950 rounded-xl'
      onClick={() => navigate(`/tasks/${_id}`)}
    >
      <div className='flex justify-between'>
        <h3 className='text-1xl font-bold'>{title}</h3>
        <button
          onClick={e => {
            e.stopPropagation()
            setCompletedTask(!completedTask)
          }}
          className={`${
            completedTask ? 'bg-green-500' : 'bg-red-800'
          } hover:bg-blue-700 rounded-xl p-1`}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            strokeWidth='2.5'
            className={`w-6 h-6 ${completedTask ? 'text-white' : ''}`}
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 12.75l6 6 9-13.5'
            ></path>
          </svg>
        </button>
      </div>
      <p className='text-slate-500'>{description}</p>
    </div>
  )
}

export default TaskCard
