import BackButton from '../BackButton'
import styles from './AboutPage.module.css'

const AboutPage = (updateFunction) => {
    return(
        <div className={styles.AboutPage}>
            <h1>About</h1>
            <p>This is a site with some of my most listened albums the past time. It was created with the purpose of practicing the fundamentals of react and specifically passing state between components.</p>
            <BackButton choice='library' updatePage={updateFunction}/>
        </div>
    )
}
//måste choice importeras för att updatefunction ska funka? så choice blir library vid klick

export default AboutPage