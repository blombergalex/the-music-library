import Album from "../Album";
import { Essence } from "../../data/data";

const DemoAlbum = ({updateFunction}) => {
    const {albumTitle, songs} = Essence;
    
    return(
    <>  
        <h4>{albumTitle}</h4>
        {songs.map((song, index) => <p key={index}>{song}</p> )}

        < Album choice='library' updatePage={updateFunction} />
        
    </>    
    )
}

export default DemoAlbum;