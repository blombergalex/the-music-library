import AlbumIcon from "../AlbumIcon"
import { albums } from "../../data/data"
import styles from './Library.module.css'

const Library = ({updateFunction}) => {
    return(
        <div className={styles.library}>
            {albums.map((album, index) => (
            < AlbumIcon choice={album.albumTitle} chosenAlbum={album} key={index} updatePage={updateFunction}/>
            ))}
        </div>
    )
}

export default Library