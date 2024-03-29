import AlbumIcon from "../AlbumIcon";
import { Essence, albums } from "../../data/data";
import styles from './AlbumPage.module.css'

const AlbumPage = ({album, updateFunction}) => {
    return (
        <div className={styles.albumPage}>
            < img src={`/src/images/${album.albumTitle}.png`} alt='Album cover'/>
            <h3 className={styles.albumTitle}>{album.albumTitle}</h3>
            <h4 className={styles.artistName}>{album.artist}</h4> 
            {album.songs.map((song, index) => 
            <p className={styles.songTitle} key={index}>{song} </p> )}
            < AlbumIcon choice='library' updatePage={updateFunction} /> 
        </div>
    )
}

export default AlbumPage;
