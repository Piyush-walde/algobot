import React from 'react'
import Link from 'next/link';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Notification = () => {
  return (
    <>

      <div className='container-notification'>
        <div className='notification'>
          <div className='iconnoti'>
            <NotificationsIcon className='noti' fontSize='large' />
            <h3>Notification</h3>

          </div>

          <div className='whitepart'>

          </div>

          <Link href='/dashboard'><button className='btonnn'>Back</button></Link>

        </div>

      </div>


    </>
  )
}

export default Notification