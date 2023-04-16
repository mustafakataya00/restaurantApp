import React, { useState } from 'react';

import './Intro.css';
import {BsFillPlayFill , BsPauseFill} from 'react-icons/bs';
import {meal} from '../../constants';
import { MdVideoCameraFront } from 'react-icons/md';


const Intro = () => {

  const[PlayVideo,setPlayVideo] = useState(false);
  const vidRef = React.useRef();
  
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo );
    if(PlayVideo)
    {
      vidRef.current.play();
    }
  }
    return(
      
      <div className='app__video'>
      <video 
      src={meal}
      ref={vidRef}
      type="video/mp4"
      loop
      controls={false}
      muted    
      />

    
      <div className='app__video-overlay flex__center'>
        <div className='app__video-overlay-circle flex__center'
        onClick={handleVideo}>
          {
            PlayVideo 
            ? (
                <BsPauseFill color="#fff" fontSize={30}/>
            ):
            (
                <BsFillPlayFill color="#fff" fontSize={30}/>
            )
          }

        </div>
        </div>
        </div>   

    )
};

export default Intro;
