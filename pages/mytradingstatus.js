import React from 'react'
import Sidebar from './compo/sidebar'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';

const Mytradingstatus = () => {
  return (
    <div>
        
    <div className='container-signal'>
         <div className='child1'>
            <div className='sig'>

               <p>  <h3>My Trading Status</h3> </p>
               <p>
                        <CircleNotificationsIcon style={{color:'white', fontSize:'60px'}}/>
                        <Link href='/myprofile'><AccountCircleIcon style={{color:'white', fontSize:'60px'}}/></Link>
                            </p>
                            
                      
            </div>
            <div className='li'></div>  
         </div>
         

         <Sidebar/>
    </div>
    </div>
  )
}

export default Mytradingstatus