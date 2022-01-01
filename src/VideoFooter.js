import React from 'react'
import "./FooterVideo.css"
import Ticker from "react-ticker"
import FavoriteBorderIcon  from "@material-ui/icons/FavoriteBorder"
import MusicNote  from "@material-ui/icons/MusicNote"
const VideoFooter = ({channel,decription,song}) => {
    return (
        <div className='videoFooter' >
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{decription}</p>
                <div className="videoFooter__ticker">
            <Ticker className='ticker' mode="smooth">
                {
                    ({index})=>(
                        <>
                        <p>{song}</p>
                        </>
                    )
                }
            </Ticker>   
                </div>
                <MusicNote className='videoFooter__icon' />
            </div>
            <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
        </div>
    )
}

export default VideoFooter
