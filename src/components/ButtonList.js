import React from 'react'
import Button from './Button'

const list=["All","Computers","Gaming","Politics","Freelancing","News","Kids","Cook","Beauty","Medical","Engineering","India","Fun"];
const ButtonList = () => {

  return (
    <div className='flex'>
      {list.map((ele,index)=> <Button name={ele} key={index}/>)}
    </div>
  )
}

export default ButtonList
