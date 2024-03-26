import { useState } from 'react'
import Library from './components/Library'
import './App.css'
import DemoAlbum from './components/DemoAlbum'

function App() {

  const[page, setPage] = useState(null)
  return (
    <>
      {!page && < Library updateFunction={setPage} />}
      {page === 'AlbumA' && <DemoAlbum updateFunction={setPage}/>}
      {page === 'AlbumB' && <DemoAlbum updateFunction={setPage}/>}
    </>
  )
}

export default App
