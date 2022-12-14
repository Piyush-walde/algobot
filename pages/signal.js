import React from 'react'
import Sidebar from './compo/sidebar'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Link from 'next/link';

const Signal = () => {
  return (
    <div>

      <div className='container-signal'>
        <div className='child1'>
          <div className='sig'>

            <p>  <h3>Signals</h3> </p>
            <p>
              <CircleNotificationsIcon style={{ color: 'white', fontSize: '60px', cursor: 'pointer' }} />
              <Link href='/myprofile'><AccountCircleIcon style={{ color: 'white', fontSize: '60px', cursor: 'pointer' }} /></Link>
            </p>

          </div>
          <div className='li'></div>
        </div>


        <div className='symbol-container'>
          <select className='select' value='symbol'>
            <option value='symbol'>Symbol</option>
          </select>

          <select className='select' value='symbol'>
            <option value='symbol'>Segment</option>
          </select>

          <div className='date'>
            <span className='lineheight'><h3>To date-</h3></span>

            <div className='year'>
              <input className='dtn' type='date'></input>
              <div className='bttncontainer'>
                <button className='btnn'>Reset</button>
                <button className='btnn'>Search</button>
              </div>


            </div>



          </div>

        </div>

        <div className='Recent-container'>

          <span className='recent'><h3>Recent calls</h3></span>

          <table className='table'>

            <thead className='flex thead'>
              <th>No.</th>
              <th>Date</th>
              <th>Segment</th>
              <th>Trade ID</th>
              <th>Entry Time</th>
              <th>Entry Price</th>
              <th>Exit time</th>
              <th>Exit Price</th>
            </thead>

            <tbody className='flex tbody'>
              <td>No.</td>
              <td>Date</td>
              <td>Segment</td>
              <td>Trade ID</td>
              <td>Entry Time</td>
              <td>Entry Price</td>
              <td>Exit time</td>
              <td>Exit Price</td>
            </tbody>

            <tbody className='flex tbody'>
              <td>No.</td>
              <td>Date</td>
              <td>Segment</td>
              <td>Trade ID</td>
              <td>Entry Time</td>
              <td>Entry Price</td>
              <td>Exit time</td>
              <td>Exit Price</td>
            </tbody>

          </table>

        </div>


        <Sidebar />
      </div>
    </div>
  )
}

export default Signal