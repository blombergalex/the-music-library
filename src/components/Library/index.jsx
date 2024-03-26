import Album from "../Album"
import { albumTitles } from "../../data/data"
import styles from './Library.module.css'

const Library = ({updateFunction}) => {
    return(
        <div className={styles.library}>
            < Album choice='AlbumA' updatePage={updateFunction} />
            < Album choice='AlbumB' updatePage={updateFunction} />
        </div>
    )
}

export default Library