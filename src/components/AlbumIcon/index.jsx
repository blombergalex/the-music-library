import styles from './AlbumIcon.module.css'
import { albums } from '../../data/data'

const AlbumIcon = ({choice, chosenAlbum, updatePage}) => {
    const handleClick = () => {
        {choice === 'library' ? updatePage(null) : updatePage(chosenAlbum)}
    }

    const albumCoverSrc = choice => {
        const album = albums.find(album => album.albumTitle === choice);
        return album ? album.cover : null;
    }

    return(
        <div className={styles.icon} onClick={handleClick}>
            <img src={albumCoverSrc(choice)} alt='Album cover'></img>
            <p className={styles.mobileTitle}>{choice}</p>
            <div className={styles.overlay}>
                <p className={styles.desktopTitle}>{choice}</p>
            </div>
        </div>
    )
}

export default AlbumIcon;
