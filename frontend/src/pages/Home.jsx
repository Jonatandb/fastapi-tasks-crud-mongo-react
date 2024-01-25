import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import TaskList from '../components/TaskList'

function Home() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const response = await axios.get('http://localhost:8000/api/tasks')
      setTasks(response.data)
    }
    getTasks()
  }, [])

  return (
    <>
      <h1 className='text-3xl font-bold'>Home</h1>
      <TaskList tasks={tasks} />
    </>
  )
}

export default Home
