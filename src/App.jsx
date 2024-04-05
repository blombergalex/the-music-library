import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Library from './components/Library'
import Footer from './components/Footer'
import AlbumPage from './components/AlbumPage'
import AboutPage from './components/AboutPage'

function App() {

  const[page, setPage] = useState(null)
    return (
      <>
        < Header/>
        < div className='mainContent'>
          {!page && < Library updateFunction={setPage} />}
          {page && page !== 'about' && < AlbumPage album={page} updateFunction={setPage}/>} 
          {page === 'about' && <AboutPage updateFunction={setPage}/>}
        </div>
        < Footer updateFunction={setPage}/>
      </>
    )
}

export default App
