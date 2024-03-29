import styles from './Footer.module.css'

const Footer = () => {
    const currentDate = new Date().getFullYear();

    return(
        <footer>
            <p> <a href='https://github.com/blombergalex/the-music-library' target='_blank'>@blombergalex</a> {currentDate}</p>
        </footer>
    )
}

export default Footer;