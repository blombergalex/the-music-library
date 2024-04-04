import styles from './Button.module.css'

const Button = ({buttonName}) => {
    return(
        <div className={styles.Button}>{buttonName}</div>
    )
}

export default Button