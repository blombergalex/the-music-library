import Album from "../Album"

const Library = ({updateFunction}) => {
    return(
        <div>
             <p>Pick an album to check out!</p>
            < Album choice='AlbumA' updatePage={updateFunction} />
            < Album choice='AlbumB' updatePage={updateFunction} />
        </div>
    )
}

export default Library