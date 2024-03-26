import AlbumIcon from "../AlbumIcon";
import { Essence, TheCodeOfTheFlowers, Pellucidity, AnAwesomeWave, ShapeShifter, CaressYourSoul } from '../../data/data'

const DemoAlbum = ({updateFunction}) => {
    const {albumTitle, songs} = Essence;
    
    return(
    <>  
        <h4>{albumTitle}</h4>
        {songs.map((song, index) => <p key={index}>{song}</p> )}

        < AlbumIcon choice='library' updatePage={updateFunction} />
        
    </>    
    )
}

export default DemoAlbum;