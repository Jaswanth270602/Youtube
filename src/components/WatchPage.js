import React, { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { Link, useSearchParams } from 'react-router-dom';
import { FETCH_API, GOOGLE_API_KEY, SEARCH_RESULT_API, YOUTUBE_VIDEOS_API } from '../utils/constants';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import SuggestionVideo from './SuggestionVideo';
import WatchPageShimmer from './WatchPageShimmer';

const WatchPage = () => {
    
    const [searchParams]=useSearchParams();
    const [Vinfo,setVinfo]= useState();
    const [isDesOpen,setIsDesOpen]= useState(false);
    const [suggVideos,setSuggVideos]= useState([]);
   // console.log(searchParams.get("v"));
    const dispatch= useDispatch();
    useEffect(()=>{
         dispatch(closeMenu());
         getDetails();
         getSuggestedVideos();
    },[])
    
    const handleDes=()=>{
        setIsDesOpen(!isDesOpen);
    }
    const getSuggestedVideos=async ()=>{
        const result= await fetch(SEARCH_RESULT_API+searchParams.get("sq_ch")+"&maxResults=10");
        const data = await result.json();
       console.log(data.items);
        setSuggVideos(data.items);
    }
    const getDetails = async () => {
        try {
            console.log(FETCH_API);
            const response = await fetch(FETCH_API+"&id="+ searchParams.get("v"));
            const dataInbox = await response.json();
            console.log(dataInbox);
            setVinfo(dataInbox);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    
  return (!Vinfo)? <WatchPageShimmer/>: (
    <div className='w-full flex'>
    <div className='flex flex-col w-8/12'>
    <div className='ml-2'>
      <iframe width="1000" height="500" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      
    </div>

    <div className='ml-2 shadow-lg bg-gray-100 rounded-lg mt-2 mb-2'>
    {Vinfo && Vinfo.items && Vinfo.items.length > 0 && (
        <div className='mt-2 mb-2'>
          
          
          <p className='ml-5 font-bold text-xl underline'>{Vinfo.items[0].snippet.localized.title}</p>
          
          <div className='flex flex-row mt-3'>
            <p className='font-bold ml-5 text-xl underline bg-gray-300 px-2 py-1 rounded-full'>⬛[{Vinfo.items[0].snippet.channelTitle}]</p>
            <p className='bg-black text-white p-1 rounded-full px-3 ml-[50px]'>subscribe</p>
            <p className='m-1 ml-4 font-bold ml-24'>[{Vinfo.items[0].statistics.viewCount/1000}] K views</p>
                <p className='m-1 ml-8 font-bold'>[{Vinfo.items[0].statistics.likeCount}] Likes</p>
            </div>
            
            
          <div onClick={()=> handleDes()} className='bg-gray-300 px-3 mx-2 mt-3 rounded-lg py-2'>
            <p>Description : Click here to open</p>
          {isDesOpen && <p className='text-sm'>{Vinfo.items[0].snippet.description}</p> }
          </div>
        </div>
      )}
    </div>
        <CommentsContainer/>
    </div>

    <div className='w-[450px]'>
        <LiveChat />
        
        {/* <div className='w-[450px] mt-5 border p-2'>
            <h2 className='underline font-bold mb-3'>Suggested For You</h2>
            {suggVideos.map((s,index)=> 
            <Link key={index}  to={"/watch?v="+s.id.videoId+"&sq_ch="+s.snippet.channelId}><SuggestionVideo info={s}  /></Link>)};
        </div> */}

<div className='w-[450px] mt-5 border p-2'>
    <h2 className='underline font-bold mb-3'>Suggested For You</h2>
    {suggVideos && suggVideos.length > 0 ? (
        suggVideos.map((s, index) => (
            <Link key={index} to={"/watch?v=" + s.id.videoId + "&sq_ch=" + s.snippet.channelId}>
                <SuggestionVideo info={s} />
            </Link>
        ))
    ) : (
        <p>No suggested videos available</p>
    )}
</div>


    </div>

    </div>
  )
}

export default WatchPage
