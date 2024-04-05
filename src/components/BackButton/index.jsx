import Button from '../Button'
import styles from './BackButton.module.css'

const BackButton = ({choice, updatePage}) => {

const handleClick = () => {
    {choice === 'library' ? updatePage(null) : ''}
}

return(
    < Button onClick={handleClick} buttonName={'Back to library'} className={styles.Button} />
    )
}

export default BackButton