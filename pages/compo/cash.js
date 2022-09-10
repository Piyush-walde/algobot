import React from 'react'
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';

const Cash = () => {
  return (
    <>

      <div className='onetoeight-container'>
        <div className='flex'>
          <div className='cash-left'>
            <button className='startbtn'>Cash</button>
            <button className='startbtn'>Future</button>
            <button className='startbtn'>Option</button>
            <button className='startbtn'>Commondity</button>
            <button className='startbtn'>All</button>
            <ArrowCircleLeftRoundedIcon className='iconn' fontSize='large' />
          </div>



          <div className='cash-left'>
            <button className='startbtn'>Cash</button>
            <button className='startbtn'>Future</button>
            <button className='startbtn'>Option</button>
            <button className='startbtn'>Commondity</button>
            <button className='startbtn'>All</button>
            <ArrowCircleLeftRoundedIcon className='iconn' fontSize='large' />
          </div>

        </div>



      </div>


    </>
  )
}

export default Cash