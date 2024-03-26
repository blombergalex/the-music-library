import AlbumIcon from "../AlbumIcon"
import { albumTitles } from "../../data/data"
import styles from './Library.module.css'

const Library = ({updateFunction}) => {
    return(
        <div className={styles.library}>
            {albumTitles.map((title, index) => (
            < AlbumIcon choice={title} key={index} updatePage={updateFunction}/>
            ))}
        </div>
    )
}

export default Library