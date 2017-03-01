import React from 'react';

const VideoPlayer = ({video, onVideoNumberStep}) => {
    if(!video){
        return <div>Loading...</div>;
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-player col-md-6">
            <div className="subsection">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}></iframe>
                </div>
                <div className="description">
                    <div><u>{video.snippet.title}</u></div>
                    <div>{video.snippet.description}</div>
                    {/*<div id="nextVideoButton"><button onClick={()=>onVideoNumberStep()} className="btn btn-primary">{videoNumber}</button> </div>*/}
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;