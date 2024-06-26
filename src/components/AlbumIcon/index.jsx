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

    const handleMouseOut = () => { 
        setIsHovered(false) 
    }

    const iconClasses = `${styles.hide} ${isHovered ? styles.overlay : ''}`;

    return(
        <div className={styles.icon} onClick={handleClick}>
            <div className={styles.checkHoverState}
                onMouseEnter={handleMouseEnter} 
                onMouseOut={handleMouseOut}></div>
            <img className={styles.iconImg} src={albumCoverSrc(choice)} alt='Album cover'></img>
            <p className={styles.mobileTitle}>{choice}</p>
            <div className={iconClasses}>
                {choice}
            </div>
        </div>
    )
}

export default AlbumIcon;