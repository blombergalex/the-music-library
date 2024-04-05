import styles from './Button.module.css'


const Button = ({buttonName, onClick}) => {
    return(
        <div className={styles.Button} onClick={onClick}>{buttonName}</div>
    )
}

export default Button
