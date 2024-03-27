import styles from './Footer.module.css'

const Footer = () => {
    const currentDate = new Date().getFullYear();

    return(
        <footer>
            <p> &#169; {currentDate} Alexandra Blomberg</p>
        </footer>
    )
}

export default Footer;