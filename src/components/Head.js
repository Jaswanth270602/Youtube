import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SUGG_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { Link } from 'react-router-dom';


const Head = () => {
    const [searchQuery,setSearchQuery]= useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions]= useState(false);
    const dispatch=useDispatch();
    const searchCache = useSelector((store)=>store.search);
    useEffect(()=>{
        const timer= setTimeout(()=>{
            //console.log("Hello")
            if(searchCache[searchQuery])
            {
                setSuggestions(searchCache[searchQuery]);
            }
            else{
                getSearchSuggestions()
            }
        },200);
        return ()=>{
            clearTimeout(timer);
        }
    },[searchQuery]);
    const getSearchSuggestions= async ()=>
    {
        const data= await fetch(YOUTUBE_SUGG_API+searchQuery);
        const json= await data.json();
        //console.log("APICALL-"+searchQuery);
        //console.log(json[1]);
        setSuggestions(json[1]);
        dispatch(cacheResults({
            [searchQuery]:json[1]
        }))
    }
    
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }

  return (
    <div className='grid grid-flow-col p-1 mt-0 m-2 ml-0 shadow-lg fixed top-0 w-full z-50 bg-white'>
      <div className='flex col-span-1'>
        <img 
        onClick={()=>toggleMenuHandler()}
        className='h-10 mt-2 mr-2 cursor-pointer' alt='hamburger' src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"/>
        <a href="/">
        <img className="h-14 " alt='youtube' src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg"/>
        </a>
      </div>
      <div className=" col-span-10 text-center pt-1 pb-1 flex justify-center ">
        
            <input  
                value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestions(true)}
            //onBlur={()=>setShowSuggestions(false)}
            onKeyDown={(e)=>{
                if(e.keyCode === 13)
                {
                    window.location.href="/results?q="+searchQuery;
                }
            }}
            type="text" className='border border-gray-400 w-1/2 h-9 rounded-l-full p-1'/>
            <Link to={"/results?q="+searchQuery}><button 
            // onKeyDown={(e)=>{
            //     if(e.keyCode === 13)
            //     {
            //         window.location.href="/results?q="+searchQuery;
            //     }
            // }}

            className='border border-gray-400 h-9 rounded-r-full p-1 pb-1 bg-gray-400 px-2'>🔍</button> </Link>
        
            {showSuggestions &&

            <div className='fixed bg-white w-[34rem] shadow-lg rounded-lg border border-gray-200 mt-9 text-left mr-8 p-2 '>
        <ul>
            {/* {suggestions.map((s, index) =>s[0]&& (<li key={index} 
            className='py-2 px-3 shadow-sm hover:bg-gray-200'>🔍{s}</li>))} */}

                {suggestions.map((s, index) =>suggestions[0]&& (<li onClick={()=>{console.log("clicked");
                setSearchQuery(s);
                setShowSuggestions(false);
                }} key={index} 
                className='py-2 px-3 shadow-sm hover:bg-gray-200'><Link to={`/results?q=${s}`} >🔍{s}</Link></li>))}
                       

           </ul> 
        
        </div>
        }
       
       

      </div>
      <div className="flex col-span-1 justify-end mr-3">
        <img className="h-9 mr-4 mt-2" alt='theme' src="https://www.medicalbag.com/wp-content/uploads/sites/19/2019/01/notificationbellss105653763_1471541.jpg"/>
        <img className="h-9 mt-2" alt='profile' src="https://logodix.com/logo/1984127.png"/>
      </div>
    </div>
  )
}

export default Head
