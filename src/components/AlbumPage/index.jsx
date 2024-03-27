import AlbumIcon from "../AlbumIcon";
import { albums } from "../../data/data";
import styles from './AlbumPage.module.css'

const AlbumPage = ({updateFunction, album}) => {

    return (
        <div className={styles.albumPage}>
            <h3 className={styles.albumTitle}>{album.albumTitle}</h3>
            <h4 className={styles.artistName}>{album.artist}</h4> 
            {album.songs.map((song, index) => 
            <p className={styles.songTitle} key={index}>{song} </p> )}
            < AlbumIcon choice='library' updatePage={updateFunction} /> 
        </div>
    )
}

export default AlbumPage;
