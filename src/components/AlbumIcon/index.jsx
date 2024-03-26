import styles from './AlbumIcon.module.css'

const AlbumIcon = ({choice, updatePage}) => {
    const handleClick = () => {
        {choice === 'library' ? updatePage(null) : updatePage(choice)}
    }

    return(
        <div className={styles.icon} onClick={handleClick}>
            <p>{choice}</p>
        </div>

    )
}

export default AlbumIcon;