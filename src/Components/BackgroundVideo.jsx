import React from 'react';

const BackgroundVideo = ({ videoSource }) => {
    return (
        <>
            <div className='container'>
                <video
                    autoPlay="autoplay"
                    muted
                    id="video"
                    className='video' >
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
            </video>
            </div>
        </>
    )
}

export default BackgroundVideo;
