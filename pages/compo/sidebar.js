import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import DehazeIcon from '@mui/icons-material/Dehaze';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HandshakeIcon from '@mui/icons-material/Handshake';



const Sidebar = () => {
  return (
    <div className='sidebar'>

<div className='logo'>
            <Image src='/logo 13.jpg' width="100%" height="89px" ></Image>
          </div>
                 

           
            <ul className='unlist'>
              <div className='fle'>
                  <div className='fl'>
                  <DehazeIcon fontSize='small'/>
                    <Link href='/dashboard'><li>Dashboard</li></Link>

                  </div>
                  
                    <div className='small'></div>
              </div>

              <div className='fle'>
                  <div className='fl'>
                  <SignalCellularAltIcon fontSize='small'/>
                  <Link href='/signal'><li>Signal</li></Link>

                  </div>
                  
                    {/* <div className='small'></div> */}
              </div>

              
              <div className='fle'>
                  <div className='fl'>
                  <SignalCellularAltIcon fontSize='small'/>
                  <Link href='/mytradingstatus'><li>Trading Status </li></Link>

                  </div>
                  
                    {/* <div className='small'></div> */}
              </div>

              <div className='fle'>
                  <div className='fl'>
                  <InsertDriveFileIcon fontSize='small'/>
                  <Link href='/mytradehistory'><li>Tradehistory</li></Link>

                  </div>
                  
                    {/* <div className='small'></div> */}
              </div>

              
              <div className='fle'>
                  <div className='fl'>
                  <MailOutlineIcon fontSize='small'/>
                  <Link href='/brokerresponse'><li>Broker Response</li></Link>

                  </div>
                  
                    {/* <div className='small'></div> */}
              </div>

              <div className='fle'>
                  <div className='fl'>
                  <HandshakeIcon fontSize='small'/>
                  
                  <Link href='/help'><li>Help  </li></Link>

                  </div>
                  
                    {/* <div className='small'></div> */}
              </div>
              
              
            
          
           
            

            </ul>
     </div>
  )
}

export default Sidebar