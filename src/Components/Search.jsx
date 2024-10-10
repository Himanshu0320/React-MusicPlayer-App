import {useRef} from "react";

export const Search = ({fn}) =>{
    const artist = useRef();
    return (
       <>
        <label>Artist Name</label>
    <input ref={artist} type = 'text'  className="form-control" placeholder="Search Artist wise Song"/>
    <button className="btn btn-success" onClick={ ()=>{
        fn(artist.current.value);//this is the way to get value from hook
    }}>Search It</button>
    </>
    );
}