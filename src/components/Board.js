import React, {useState,useRef } from 'react';
import Square from './Square';


const Board = ({audioNames})=>{

    const [powerButton,setPowerButton] = useState(false);
    const intervalRef = useRef();
    const [audioQue,setAudioQue] = useState({});


    const handlePowerOnClick=()=>{
        if(powerButton)
        {
            Object.values(audioQue).forEach(x => {
                x.current.pause();
                x.current.startTimer = 0;
            });
            setAudioQue({})
        }
        setPowerButton(!powerButton)
        clearInterval(intervalRef.current);
           
    }

    const playEventHandler =async  (audioRef,id)=>{
        if(!audioQue[id])
        {
            let currentAudioList = Object.assign(audioQue, {[id]: audioRef});
            setAudioQue(currentAudioList);
            if( Object.keys(currentAudioList).length === 1)
            {
                stratAudios();
                startTimer()
            }
        }
    }

  
    const handleAudioIsStop = (item)=>{
        let currentAudioList = {...audioQue};
        delete currentAudioList[item.id]
        setAudioQue(currentAudioList);
    }

  
    const startTimer = () => {
        intervalRef.current = setInterval(() => {

                    if( Object.keys(audioQue).length > 0 )
                    {
                         stratAudios();
                    }
                       else
                    {
                        clearInterval(intervalRef.current);
                    }
          }, [8002]);

       };

       const stratAudios = ()=>{
        return  (powerButton && Object.values(audioQue).forEach(x => {
                    if(x.current.play)
                    {
                       setTimeout(() => {
                        clearInterval(intervalRef.current);
                        startTimer()
                       }, 0);
                    }
                        x.current.play();
                  
                 })
        )
       }


      const squreElement = audioNames.map(x=>{
       return ( 
            <Square   key={x.id} item={x} onClick={playEventHandler} powerButton={powerButton} handleAudioIsStop={handleAudioIsStop}/> 
        )
       });

     

    return(
       <div className='board'> 
           <div className='flex'>
                <button className='play-button' onClick={handlePowerOnClick}>{powerButton ?  "Stop" : "Play"}</button>
           </div>
           <div className='board'>
                {squreElement}
  
            </div>
       </div>
    )

}
export default Board;