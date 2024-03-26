import styles from './Album.module.css'

const Album = ({choice, updatePage}) => {
    const handleClick = () => {
        {choice === 'library' ? updatePage(null) : updatePage(choice)}
    }

    return(
        
        <div className={styles.album} onClick={handleClick}>
            <p>{choice}</p>
        </div>

    )
}

export default Album;