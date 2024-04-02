import styles from './AlbumIcon.module.css'

const AlbumIcon = ({choice, chosenAlbum, updatePage}) => {
    const handleClick = () => {
        {choice === 'library' ? updatePage(null) : updatePage(chosenAlbum)}
    }
    const albumCoverSrc = chosenAlbum.cover;

    return(
        <div className={styles.icon} onClick={handleClick}>
            <p>{choice}</p>
            <img src={albumCoverSrc} alt='Album cover'></img>
        </div>
    )
}

export default AlbumIcon;
