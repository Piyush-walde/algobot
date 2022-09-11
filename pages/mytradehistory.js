import React from 'react'
import Sidebar from './compo/sidebar'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import RefreshIcon from '@mui/icons-material/Refresh';

const Mytradehistory = () => {
  return (
    <div>

      <div className='container-signal'>
        <div className='child1'>
          <div className='sig'>

            <p>  <h3>My Trade History</h3> </p>
            <p>
              <CircleNotificationsIcon style={{ color: 'white', fontSize: '60px', cursor: 'pointer' }} />
              <Link href='/myprofile'><AccountCircleIcon style={{ color: 'white', fontSize: '60px', cursor: 'pointer' }} /></Link>
            </p>


          </div>
          <div className='li'></div>
        </div>

        <div className='symbol-container'>
          <div className='select1'>
            <input className='search' type='search' placeholder='Search Symbol'></input>
            <SearchIcon style={{ color: 'white', fontSize: '25px', cursor: 'pointer' }} />
            <RefreshIcon style={{ color: 'white', fontSize: '25px', cursor: 'pointer', marginRight: '0px' }} />

          </div>

          <div className='select2' type='text'><h3>Total Communicative P&L :+765</h3></div>

          <div className='date'>

            <div className='dtn dtn2'>Download my history</div>

          </div>

        </div>


        <div className='Recent-container'>

          {/* <span className='recent'><h3>Recent calls</h3></span> */}

          <table className='table'>

            <thead className='flex thead'>
              <th>No.</th>
              <th>Date</th>
              <th>Symbol</th>
              <th>Entry time</th>
              <th>Entry Price</th>
              <th>Exit time</th>
              <th>Exit price</th>
              <th>Qty.</th>
              <th>P&L</th>
              <th>Commulative P&L</th>
            </thead>

            <tbody className='flex tbody'>
              <td>1</td>
              <td>Symbol</td>
              <td>Entry time</td>
              <td>Entry price</td>
              <td>Symbol</td>
              <td>Exit time</td>
              <td>Exit price</td>
              <td>Qty.</td>
              <td>P&L</td>
              <td>Commulative P&L</td>
            </tbody>

            <tbody className='flex tbody'>
              <td>2</td>
              <td>25-12-2022</td>
              <td>Nifty</td>
              <td>11:05</td>
              <td></td>
              <td>Symbol</td>
              <td>Quantity</td>
              <td>Strategy</td>
              <td>Trading Status</td>
              <td>0.22%</td>
            </tbody>

          </table>

        </div>



        <Sidebar />
      </div>
    </div>
  )
}

export default Mytradehistory