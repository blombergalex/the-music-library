import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Library from './components/Library'
import Footer from './components/Footer'
import DemoAlbum from './components/DemoAlbum'
import AlbumPage from './components/AlbumPage'

function App() {

  const[page, setPage] = useState(null)
    return (
      <>
        < Header/>
        {!page && < Library updateFunction={setPage} />}
        {page && < AlbumPage album={page} updateFunction={setPage}/>} 
        < Footer />
      </>
    )
}

export default App
