import styles from './AlbumIcon.module.css'

const AlbumIcon = ({choice, chosenAlbum, updatePage}) => {
    const handleClick = () => {
        {choice === 'library' ? updatePage(null) : updatePage(chosenAlbum)}
    }

    return(
        <div className={styles.icon} onClick={handleClick}>
            <p>{choice}</p>
            {/* <img src={`/images/${albumTitle}.png`}/> */}
        </div>
    )
}

export default AlbumIcon;


