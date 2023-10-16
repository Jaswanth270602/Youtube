import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import 'default-passive-events';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, generateRandomText } from '../utils/helper';

const LiveChat = () => {
    const dispatch= useDispatch();
    const [liveMessage,setLiveMessage]= useState("");
    const chatMessages= useSelector(store=>store.chat.messages);
    useEffect(()=>{
        const i=setInterval(()=>{
            console.log("API polling...");
            dispatch(
                addMessage({
                    name:generateRandomName(),
                    text:generateRandomText()
                })
            )
        },1000);
        return ()=> clearInterval(i);
    },[]);

    
  return (
    <>
    <div className='w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-t-lg overflow-y-scroll flex flex-col-reverse'>
      {chatMessages.map((c,index)=> <ChatMessage key={index} name={c.name} text={c.text} />)}
    </div>
    <form className='w-full p-2 ml-2 border border-black rounded-b-lg' onSubmit={(e)=>{
        e.preventDefault();
        // dispatch(addMessage({
        //     name:"Jassu",
        //     text:liveMessage,
        // }));
        // setLiveMessage("");
    }}>
        <input className='px-2 w-96 border border-blue-700' type="text" value={liveMessage} 
        onChange={(e)=>{setLiveMessage(e.target.value)}}>
        </input>
        <button className='bg-gray-900 text-white px-1 border border-black '
        onClick={()=>{
            dispatch(addMessage({
                name:"Jassu",
                text:liveMessage,
            }));
            setLiveMessage("")}}>Send</button>
        
    </form>
    </>
  )
}

export default LiveChat
