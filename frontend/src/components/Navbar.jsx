import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className='flex justify-between items-center my-3'>
      <Link to='/'>
        <h1 className='text-3xl font-bold'>Tasks App</h1>
      </Link>
      <Link
        to='/tasks/new'
        className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Create Task
      </Link>
    </header>
  )
}

export default Navbar
