import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const url = 'https://api.tvmaze.com'
// const showSearch = '/search/shows?q='

const Navbar = () => {
  const searchRef = useRef(null)
  const [shows, setShows] = useState([])
  const [query, setQuery] = useState('')

  const getShows = async (query) => {
    return await axios.get(`${url}/search/shows?q=${query}`)
  }
  const getData = async () => {
    const { data } = await getShows(query)
    setShows(data)
  }

  useEffect(() => {
    getData()
  }, [query])

  console.log(shows)

  const handleSubmit = (e) => {
    e.preventDefault()
    setQuery(searchRef.current.value)
    console.log(searchRef.current.value)
  }

  return (
    <>
      <nav className='bg-gray-800 h-20'>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16 pt-4'>
            <div className='flex space-x-4 w-full items-center sm:justify-start'>
              <div className='flex-shrink-0 flex items-center'>
                <img className='block lg:hidden h-8 w-auto rounded-full' src='./src/assets/images/logo.jpg' alt='TV-Series' />
                <img className='hidden lg:block h-8 w-auto rounded-full' src='./src/assets/images/logo.jpg' alt='TV-Series' />
              </div>
              <div className='text-center text-white'>
                <p>Tv Seriees Online</p>
              </div>
              <div className='sm:block w-full sm:ml-6'>
                <form onSubmit={handleSubmit}>
                  <div className='flex w-full'>
                    <input
                      ref={searchRef}
                      className='w-2/3 p-2 rounded-l-lg'
                      type='search'
                      placeholder='Search series'
                    />
                    <button className=' flex justify-center items-center rounded-r-lg border-emerald-600 w-1/12 bg-emerald-600'>
                      <FaSearch />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <button type='button' className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={2} stroke='currentColor' aria-hidden='true'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' />
                </svg>
              </button>
              <div className='ml-3 relative'>
                <div>
                  <button type='button' className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white' id='user-menu-button' aria-expanded='false' aria-haspopup='true'>
                    <img className='h-8 w-8 rounded-full' src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
