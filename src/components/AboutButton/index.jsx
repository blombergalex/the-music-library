import Button from '../Button'
import styles from './AboutButton.module.css'

const AboutButton = ({choice, updatePage}) => {

const handleClick = () => {
    {choice === 'about' ? updatePage('about') : ''}
}

    return(
    < Button onClick={handleClick} buttonName={'About'} />
        )
}

export default AboutButton