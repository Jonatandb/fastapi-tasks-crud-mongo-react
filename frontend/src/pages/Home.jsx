import { useEffect, useState } from 'react'
import TaskList from '../components/TaskList'
import { fetchTasks } from '../api/tasks'

function Home() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    async function getTasks() {
      try {
        const response = await fetchTasks()
        setTasks(response.data)
      } catch (error) {
        console.log(error?.message)
      }
    }
    getTasks()
  }, [])

  return <TaskList tasks={tasks} />
}

export default Home
