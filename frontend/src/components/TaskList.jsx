import TaskCard from './TaskCard'

function TaskList({ tasks }) {
  return (
    <div className='grid grid-cols-3 gap-4 mt-3'>
      {tasks.map(task => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  )
}

export default TaskList
