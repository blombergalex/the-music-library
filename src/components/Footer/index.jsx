import AboutButton from '../AboutButton';
import styles from './Footer.module.css'

const Footer = ({updateFunction}) => {
    const currentDate = new Date().getFullYear();

    return(
        <footer>
            <p> <a href='https://github.com/blombergalex/the-music-library' target='_blank'>@blombergalex</a> {currentDate}</p>
            <AboutButton choice='about' updatePage={updateFunction} className={styles.aboutButton}/>
        </footer>
    )
}

export default Footer;