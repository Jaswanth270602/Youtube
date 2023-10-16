import React from 'react';

const commentsData=[
    {
        name:"Jaswanth",
        text:"Super video, found it helpful and nice work bro",
        replies:[
            {
                name:"Akshay",
                text:"I found you everywhere🤣",
                replies:[
                    {
                        name:"Jaswanth",
                        text:"U too 😆, come on bro lets encourage them!!",
                        replies:[]
                    },
                ]
            },
        ]
    },
    {
        name:"Akshay",
        text:"never disappoints us!! 👌😍",
        replies:[]
    },
    {
        name:"Rahul",
        text:"keet it up and do more work , keep going on brother",
        replies:[
            {
                name:"Akshay",
                text:"Hey you are cricketer right??",
                replies:[
                    {
                        name:"Rahul",
                        text:"But not as famous as your namastey javascript 😂",
                        replies:[
                            {
                                name:"Akshay",
                                text:"😶😎, anyway thank you .",
                                replies:[]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name:"Kohli",
        text:"Its exactly looks like my Cover Drive, fantastic and good looking 😁",
        replies:[]
    },
    {
        name:"Kevin",
        text:"Super video, found it helpful and nice work bro",
        replies:[
            {
                name:"Mcculum",
                text:"comeon lets play 1 vs 1 in bgmi",
                replies:[]
            },
        ]
    },
    {
        name:"Jaswanth",
        text:"Super video, found it helpful and nice work bro",
        replies:[
            {
                name:"Akshay",
                text:"I found you everywhere🤣",
                replies:[
                    {
                        name:"Jaswanth",
                        text:"U too 😆, come on bro lets encourage them!!",
                        replies:[]
                    },
                ]
            },
        ]
    },
    {
        name:"Jaswanth",
        text:"Super video, found it helpful and nice work bro",
        replies:[
            {
                name:"Akshay",
                text:"I found you everywhere🤣",
                replies:[
                    {
                        name:"Jaswanth",
                        text:"U too 😆, come on bro lets encourage them!!",
                        replies:[]
                    },
                ]
            },
        ]
    },
    {
        name:"Rahul",
        text:"keet it up and do more work , keep going on brother",
        replies:[
            {
                name:"Akshay",
                text:"Hey you are cricketer right??",
                replies:[
                    {
                        name:"Rahul",
                        text:"But not as famous as your namastey javascript 😂",
                        replies:[
                            {
                                name:"Akshay",
                                text:"😶😎, anyway thank you .",
                                replies:[]
                            },
                        ]
                    },
                ]
            },
        ]
    },
]

const Comment = ({data})=>{
    const {name,text,replies}=data;
    return(
        <div className='flex shadow-md bg-gray-100 p-1 rounded-lg my-2'>
            <img alt="user" src="https://logodix.com/logo/1984127.png" className='w-9 h-9 mt-1'/>
            <div className='px-1 ml-2 '>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
                {/* <Comment data={replies[0]}/> */}
            </div>
        </div>
    )
}

const CommentList = ({comments})=>{
    return comments.map((comment,index)=> (
        <div key={index}  >
            <Comment data={comment} />
            <div className=' border border-l-black ml-3 pl-5'>
                <CommentList comments={comment.replies} />
            </div>
        </div>
    ))
}
const CommentsContainer = () => {
  return (
    <div className='ml-2'>
      <h1 className='text-xl font-bold mt-3 mb-5'>Comments :</h1>
      <CommentList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer
