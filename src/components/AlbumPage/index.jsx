import BackButton from "../BackButton";
import styles from './AlbumPage.module.css'

const AlbumPage = ({album, updateFunction}) => {
    return (
        <div className={styles.albumPage}>
            <div className={styles.albumArea}>
                <img className={styles.albumPageImg} src={album.cover} alt='Album cover'/>
                <h3 className={styles.albumTitle}>{album.albumTitle}</h3>
                <h4 className={styles.artistName}>{album.artist}</h4> 
                {album.songs.map((song, index) => 
                <p className={styles.songTitle} key={index}>{song} </p> )} 
            </div>
            < BackButton choice='library' updatePage={updateFunction} className={styles.button}/>
        </div>
    )
}

export default AlbumPage;
