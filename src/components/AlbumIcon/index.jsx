import { useState } from 'react'
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

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseOut = () => { setIsHovered(false) }

    let iconClass = styles.icon;
    if (isHovered) {
        iconClass = `${styles.red}`;
        console.log('icon hovered')
    }

    return(
        <div 
        className={styles.icon}
        onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
            <img src={albumCoverSrc(choice)} alt='Album cover'></img>
            <p className={styles.mobileTitle}>{choice}</p>
            <div className={styles.overlay}>
                <p className={styles.desktopTitle}>{choice}</p>
            </div>
        </div>
    )
}

export default AlbumIcon;
