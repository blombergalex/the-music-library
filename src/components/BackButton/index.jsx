import styles from './BackButton.module.css'

const BackButton = ({choice, updatePage}) => {

const handleClick = () => {
    {choice === 'library' ? updatePage(null) : ''}
}

return(
    <div className={styles.backButton} onClick={handleClick}>Back to library</div>
    )
}

export default BackButton