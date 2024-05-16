import React, { useRef } from 'react';
import video from "../../assets/college.mp4";
import "./Video.css";

const Video = ({ playState, setPlayState }) => {
    const player = useRef(null);
    
    const closePlayer = (e) => {
        if (e.target === player.current) {
            console.log("This is working");
            setPlayState(false);
        }
    };

    return (
        <div className={`video-player ${playState ? "" : "hide"}`} ref={player} onClick={closePlayer}>
            <video src={video} autoPlay muted controls></video>
        </div>
    );
};

export default Video;
