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
              <th>Time</th>
              <th>Placeholder</th>
              <th>Symbol</th>
              <th>Quantity</th>
              <th>Strategy</th>
              <th>Trading Status</th>
            </thead>

            <tbody className='flex tbody'>
              <td>1</td>
              <td>Date</td>
              <td>Time</td>
              <td>Placeholder</td>
              <td>Symbol</td>
              <td>Quantity</td>
              <td>Strategy</td>
              <td>Trading Status</td>
            </tbody>

            <tbody className='flex tbody'>
              <td>2</td>
              <td>Date</td>
              <td>Time</td>
              <td>Placeholder</td>
              <td>Symbol</td>
              <td>Quantity</td>
              <td>Strategy</td>
              <td>Trading Status</td>
            </tbody>

          </table>

        </div>



        <Sidebar />
      </div>
    </div>
  )
}

export default Mytradingstatus