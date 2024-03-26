import styles from './Footer.module.css'

const Footer = () => {
    const currentDate = new Date().getFullYear();

    return(
        <footer>
            <p> Copyright {currentDate} Alexandra Blomberg</p>
        </footer>
    )
}

export default Footer;