

import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

const VideosContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        try {
            const data = await fetch(YOUTUBE_VIDEOS_API);
            const json = await data.json();
            console.log(json);
            if (json && json.items) {
                setVideos(json.items);
            }
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    }
    return (videos.length===0)? <Shimmer /> : 

     (
        <div className='flex flex-wrap'>
            {videos.map((video) => (
                <Link key={video.id} to={"watch?v=" + video.id + "&sq_ch=" + video.snippet.channelId}>
                    {videos.length > 0 && <VideoCard info={video} />}
                </Link>
            ))}
        </div>
    );
}

export default VideosContainer;
