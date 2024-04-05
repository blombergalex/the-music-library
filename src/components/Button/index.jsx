import styles from './Button.module.css'


const Button = ({buttonName, onClick}) => {
    return(
        <div onClick={onClick} className={styles.Button}> {buttonName} </div>
    )
}

export default Button
