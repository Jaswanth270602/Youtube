import React from 'react'

import VideosContainer from './VideosContainer'
import ButtonList from './ButtonList'

const MainContainer = () => {
  return (
    <div className='ml-[200px]'>
      <ButtonList/>
      <VideosContainer/>
    </div>
  )
}

export default MainContainer
