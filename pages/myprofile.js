import React from 'react'
import Sidebar from './compo/sidebar'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Myprofile = () => {
    return (


        <div className='container-signal'>
            <div className='child1'>
                <div className='sig'>

                    <p>  <h3>My profile</h3> </p>
                    <p>
                        <CircleNotificationsIcon style={{ color: 'white', fontSize: '60px' }} />
                        <AccountCircleIcon style={{ color: 'white', fontSize: '60px' }} />
                    </p>
                </div>
                <div className='li'></div>


            </div>

            <div className='profilebox'>
                <div className='line5'></div>
                <div>
                    <p><AccountCircleIcon style={{ color: 'white', fontSize: '100px', ml: '8px' }} /></p>
                    <h3 className='hh'>John Meher</h3>
                </div>

                <div className='line5'>

                </div>

            </div>


            <div className='profile-info'>
                <div className='pro-left'>

                    <input className='int' type="text" placeholder='Email'></input>
                    <input className='int' type="number" placeholder='Phone No.'></input>
                    <div className='sevices'>
                        <div className='flex'>
                            <h4>Sevices</h4> <h4>Start</h4> <h4>End</h4>
                        </div>

                        <p className='line6'></p>

                    </div>
                    <button className='btn1'>Change Password</button>

                    <div>

                    </div>



                </div>

                <div className='pro-right'>
                    <div className='detail'>
                        <h4>Details</h4>
                        <p className='line6'></p>
                        <span className='span'><h4 >John Myckel Myer</h4></span>
                        <div>
                            <input type='radio'></input> Fyers

                        </div>

                    </div>

                    <div className='apidcontainer'>
                        <div className='spn'>
                            <span className='span'><h4 >App ID</h4></span>
                            <input className='inp' type='text'></input>
                        </div>
                        <div className='spn'>
                            <span className='span'><h4 >Secrete Key</h4></span>
                            <input className='inp' type='text'></input>
                        </div>
                        <div className='spn'>
                            <span className='span'><h4 >Client Key</h4></span>
                            <input className='inp' type='text'></input>
                        </div>

                        <div>
                            <button className='generate-key'>Generate Key</button>
                        </div>
                        <div>
                            <b>Web Url</b><input type='radio' name='status' className='spn2'></input> T4<input type='radio' name='status' className='spn2'></input> Trading View

                        </div>
                        <div>
                            <button className='pro-submit'>Submit</button>
                            <button className='pro-reset'>Reset</button>
                        </div>


                    </div>

                </div>

            </div>

            <Sidebar />


        </div>


    )
}

export default Myprofile;