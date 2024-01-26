import { useNavigate } from 'react-router-dom'

function TaskCard({ task }) {
  const { _id, title, description } = task
  const navigate = useNavigate()
  return (
    <div
      className='bg-zinc-950 p-4 hover:cursor-pointer hover:bg-gray-950 rounded-xl'
      onClick={() => navigate(`/tasks/${_id}`)}
    >
      <h3 className='text-1xl font-bold'>{title}</h3>
      <p className='text-slate-500'>{description}</p>
    </div>
  )
}

export default TaskCard
