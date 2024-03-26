import Album from "../Album";

const DemoAlbum = ({updateFunction}) => {
    return(
    <div>
        < Album choice='again' updatePage={updateFunction} />
    </div>
    )
}

export default DemoAlbum;