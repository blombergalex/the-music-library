import AlbumIcon from "../AlbumIcon";
import styles from './AlbumPage.module.css'


const AlbumPage = ({album, updateFunction}) => {
    console.log(album)
    return (
        <div className={styles.albumPage}>
            < img src={album.cover} alt='Album cover'/>
            <h3 className={styles.albumTitle}>{album.albumTitle}</h3>
            <h4 className={styles.artistName}>{album.artist}</h4> 
            {album.songs.map((song, index) => 
            <p className={styles.songTitle} key={index}>{song} </p> )}
            < AlbumIcon choice='library' updatePage={updateFunction} /> 
        </div>
    )
}

export default AlbumPage;
