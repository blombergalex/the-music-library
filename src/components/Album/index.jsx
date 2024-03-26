import styles from './Album.module.css'

const Album = ({choice, updatePage}) => {
    const handleClick = () => {
        {choice === 'again' ? updatePage(null) : updatePage(choice)}
        console.log(`${choice} picked`)
    }

    return(
        <div className={styles.album} onClick={handleClick}>
            <p>Pick {choice}</p>
        </div>
    )
}

export default Album;