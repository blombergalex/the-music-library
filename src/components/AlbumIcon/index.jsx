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
        console.log('icon entered')
    }

    const handleMouseOut = () => { 
        setIsHovered(false) 
        console.log('icon exited')
    }

    const iconClasses = ` ${isHovered ? styles.overlay : ''}`;

    return(
        <div className={styles.icon} onClick={handleClick}>
            <div className={styles.checkHoverState}
                onMouseEnter={handleMouseEnter} 
                onMouseOut={handleMouseOut}></div>
            <img src={albumCoverSrc(choice)} alt='Album cover'></img>
            <p className={styles.mobileTitle}>{choice}</p>
            <div className={iconClasses}>
                <p className={styles.desktopTitle}>{choice}</p>
            </div>
        </div>
    )
}

export default AlbumIcon;