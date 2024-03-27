import AlbumIcon from "../AlbumIcon";
import { albums } from "../../data/data";

const AlbumPage = ({updateFunction, album}) => {

    return (
        <>


        <h4>{album.albumTitle}</h4>
        <h5>{album.artist}</h5> 
            {album.songs.map((song, index) => <p key={index}>{song}</p> )}

            < AlbumIcon choice='library' updatePage={updateFunction} /> 
        </>
    )
}

export default AlbumPage;
