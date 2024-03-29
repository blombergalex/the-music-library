import AlbumIcon from "../AlbumIcon";
import { Essence, albums } from "../../data/data";
import styles from './AlbumPage.module.css'
import albumCover from '../../images/essence.png'

const albumCoverSrc = () => '../../images/${album.albumTitle}.png'

const AlbumPage = ({album, updateFunction}) => {
    return (
        <div className={styles.albumPage}>
            < img src={albumCover} alt='Album cover'/>
            < img src={'albumCoverSrc'} alt='Album cover'/>
            <h3 className={styles.albumTitle}>{album.albumTitle}</h3>
            <h4 className={styles.artistName}>{album.artist}</h4> 
            {album.songs.map((song, index) => 
            <p className={styles.songTitle} key={index}>{song} </p> )}
            < AlbumIcon choice='library' updatePage={updateFunction} /> 
        </div>
    )
}

export default AlbumPage;
