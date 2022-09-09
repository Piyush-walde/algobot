import React from 'react'
import Sidebar from './compo/sidebar'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';

const Help = () => {
  return (
    <div>
        
    <div className='container-signal'>
         <div className='child1'>
            <div className='sig'>

               <p>  <h3>Help</h3> </p>
                <p>
                        <CircleNotificationsIcon style={{color:'white', fontSize:'60px'}}/>
                        <Link href='/myprofile'><AccountCircleIcon style={{color:'white', fontSize:'60px'}}/></Link>
                            </p>
                      
            </div>
            <div className='li'></div>  
            <div className='help-info'>
                    <div className='help-left'>

                        <input className='int2' type="text" placeholder='Your Name'></input>
                        <input  className='int2' type="email" placeholder='Email'></input>
                        <input  className='int2' type="text" placeholder='Phone Number'></input>

                    <div>

                     </div>

               

                </div>
               <div className='helprightcontainer'>
                <div className='help-right'>


                    <div className='detail'>
                        {/* <input type='textarea' className='text'></input> */}
                        
                    </div>

                    <div>
                        <div >
                        <textarea className='newtext' type="text" placeholder='Enter Your Message Here'></textarea>
                            
                        </div>

                       

                    </div>
                 
                    

                </div>

                <div className='help-submit'>
                          <button className='help-submit'>Submit</button>
                        </div> 


               </div>
                


            </div>
      
         </div>

          
         <Sidebar/>
    </div>
    </div>
  )
}

export default Help