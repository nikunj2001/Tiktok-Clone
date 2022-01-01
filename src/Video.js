import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
const Video = ({url,channel,description,song,likes,shares,messages}) => {
    const [play,setPlay] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress=()=>{
        
    }
    return (
        <div className='video'>
                <video controls className='video__player' onClick={onVideoPress} ref={videoRef} loop autoPlay src={url}></video>
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
            <VideoFooter channel={channel} decription={description} song={song} /> 
        </div>
    )
}

export default Video
