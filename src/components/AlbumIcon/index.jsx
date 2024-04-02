import styles from './AlbumIcon.module.css'

const AlbumIcon = ({choice, chosenAlbum, updatePage}) => {
    const handleClick = () => {
        {choice === 'library' ? updatePage(null) : updatePage(chosenAlbum)}
    }
    const albumCoverSrc = chosenAlbum.cover;

    return(
        <div className={styles.icon} onClick={handleClick}>
            <img src={albumCoverSrc} alt='Album cover'></img>
            <p className={styles.mobileTitle}>{choice}</p>
            <div className={styles.overlay}>
                <p className={styles.desktopTitle}>{choice}</p>
            </div>
        </div>
    )
}

export default AlbumIcon;
