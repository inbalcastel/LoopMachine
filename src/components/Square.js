import React ,{useEffect, useState,useRef} from 'react';
import PlayImg from '../assets/Images/play.jpg';
import StopImg from '../assets/Images/stop.jpg';

const Square = ({item, onClick,powerButton,handleAudioIsStop})=>{

    const [isPlaying,setIsPlaying] = useState(false)
    const audioModule = require.context('../assets/audio', true);
    const audioRef = useRef(new Audio(audioModule(`./${item.title}.mp3`)));


  
    useEffect(() => {
        if (!isPlaying) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          handleAudioIsStop(item)
        } 
         else {
         }
      }, [isPlaying]);

      useEffect(() => {
        if (!powerButton) {
            setIsPlaying(false)
        } 
         else {
         }
      }, [powerButton]);


      const hadleOnClick=()=>{
        if(!isPlaying)
        {
          setIsPlaying(true)
          onClick(audioRef,item.id)
         
        }
        else
        {
          setIsPlaying(false)
        }
      }


   
    return(
        <button onClick={hadleOnClick} className="square"   key={item.id} disabled={!powerButton} >
            <img  src={(isPlaying && powerButton) ? StopImg : PlayImg} alt={isPlaying ? "Stop" : "Play"} />
        </button>
    )

}
export default Square;