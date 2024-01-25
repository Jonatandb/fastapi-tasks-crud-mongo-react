function TaskList({ tasks }) {
  return (
    <div className='grid grid-cols-3 gap-4 mt-3'>
      {tasks.map(task => (
        <div
          key={task._id}
          className='bg-zinc-950 p-4 hover:cursor-pointer hover:bg-gray-950'
        >
          <h3 className='text-1xl font-bold underline'>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  )
}

export default TaskList
