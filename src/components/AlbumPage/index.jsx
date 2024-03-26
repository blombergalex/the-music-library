// import { Essence, TheCodeOfTheFlowers, Pellucidity, AnAwesomeWave, ShapeShifter, CaressYourSoul } from '../../data/data'
import AlbumIcon from "../AlbumIcon";
import { albums } from "../../data/data";

const AlbumPage = ({updateFunction}) => {
    // const {albumTitle, artist, songs} = album;

    return (
        <>
        <h4>{albums.albumTitle}</h4>
        <h5>{albums.artist}</h5> 
            {/* {songs.map((song, index) => <p key={index}>{song}</p> )} */}

            < AlbumIcon choice='library' updatePage={updateFunction} /> 
        </>
    )
}

export default AlbumPage;
