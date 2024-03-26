import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Library from './components/Library'
import Footer from './components/Footer'
import DemoAlbum from './components/DemoAlbum'

function App() {

  const[page, setPage] = useState(null)
    return (
      <>
        < Header />
        {!page && < Library updateFunction={setPage} />}
        {page === 'AlbumA' && <DemoAlbum updateFunction={setPage}/>}
        {page === 'AlbumB' && <DemoAlbum updateFunction={setPage}/>}
        < Footer />
      </>
    )
}

export default App
