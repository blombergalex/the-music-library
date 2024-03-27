import styles from './Footer.module.css'

const Footer = () => {
    const currentDate = new Date().getFullYear();

    return(
        <footer>
            <p> &#169; {currentDate} <a href='https://github.com/blombergalex/the-music-library' target='_blank'>@blombergalex</a></p>
        </footer>
    )
}

export default Footer;