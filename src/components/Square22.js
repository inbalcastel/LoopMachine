import React,{useContext} from 'react';
import PlayImg from '../assets/Images/play.jpg';
import StopImg from '../assets/Images/stop.jpg';



const Square22 = ({title, onClick,isPlaying})=>{



    return(
        <button onClick={onClick} className="square" >
            <img  src={isPlaying ? StopImg : PlayImg}  />
        </button>
    )

}
export default Square22;