import React from 'react'

const ChatMessage = ({name,text}) => {
  return (
    <div className='flex items-center ml-2 p-1 shadow-md'>
      <img alt="user" src="https://logodix.com/logo/1984127.png" className='w-7 h-7 mt-1'/>
      <span className='font-bold px-2'>{name}</span>
      <span >{text}</span>
    </div>
  )
}

export default ChatMessage
