import React from 'react'
import Sidebar from './compo/sidebar'
import Link from 'next/link';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

const Brokerresponse = () => {
  return (
    <div>

      <div className='container-signal'>
        <div className='child1'>
          <div className='sig'>

            <p>  <h3>Broker Response</h3> </p>
            <p>
              <CircleNotificationsIcon style={{ color: 'white', fontSize: '60px', cursor: 'pointer' }} />
              <Link href='/myprofile'><AccountCircleIcon style={{ color: 'white', fontSize: '60px', cursor: 'pointer' }} /></Link>

            </p>


          </div>
          <div className='li'></div>
        </div>


        <div className='Recent-container'>

          {/* <span className='recent'><h3>Recent calls</h3></span> */}

          <table className='table'>

            <thead className='flex thead'>
              <th>No.</th>
              <th>Date</th>
              <th>Symbol</th>
              <th>Segment</th>
              <th>Strategy</th>
              <th>Exit time</th>
              <th>Exit price</th>
              <th style={{ width: '28%' }}>Broker Response

              </th>
            </thead>
           
            <tbody className='flex tbody'>
              <td>1</td>
              <td>Date</td>
              <td>Symbol</td>
              <td>Segment</td>
              <td>Strategy</td>
              <td>Exit time</td>
              <td>Exit price</td>
              <td style={{ width: '28%' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '400' }}>Order Submitted successfully.<br></br>
                  Your order refererce no. 2224124600 <br></br>
                  <br></br>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '10px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '600' }}>STATUS</h3>
                    <ToggleOnIcon style={{ color: '#048BC8', fontSize: '40px' }} />

                  </div>

                </h3>
              </td>
            </tbody>

            <hr></hr>
            
            <tbody className='flex tbody'>
              <td>2</td>
              <td>Date</td>
              <td>Symbol</td>
              <td>Segment</td>
              <td>Strategy</td>
              <td>Exit time</td>
              <td>Exit price</td>
              <td style={{ width: '28%' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '400' }}>Order Submitted successfully.<br></br>
                  Your order refererce no. 2224124600 <br></br>
                  <br></br>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '10px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '600' }}>STATUS</h3>
                    <ToggleOnIcon style={{ color: '#048BC8', fontSize: '40px' }} />

                  </div>

                </h3>
              </td>
            </tbody>


            
            <hr></hr>
            
            <tbody className='flex tbody'>
              <td>3</td>
              <td>Date</td>
              <td>Symbol</td>
              <td>Segment</td>
              <td>Strategy</td>
              <td>Exit time</td>
              <td>Exit price</td>
              <td style={{ width: '28%' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '400' }}>Order Submitted successfully.<br></br>
                  Your order refererce no. 2224124600 <br></br>
                  <br></br>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '10px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '600' }}>STATUS</h3>
                    <ToggleOnIcon style={{ color: '#048BC8', fontSize: '40px' }} />

                  </div>

                </h3>
              </td>
            </tbody>


          </table>

        </div>







        <Sidebar />
      </div>
    </div>
  )
}

export default Brokerresponse