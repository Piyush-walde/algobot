import React from 'react'
import Sidebar from './compo/sidebar'
import Link from 'next/link';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Dashboard = () => {
    return (
        // npm install-save @fortawesome/free-solid-svg-icons npm install --save @fortawesome/react-fontawesome

        <div className='container'>

            <div className='child1'>
                <div className='sig'>

                    <p>  <h3>Dashboard</h3> </p>
                    <p>
                        <Link href='/compo/notification'><CircleNotificationsIcon style={{ color: 'white', fontSize: '60px', cursor: 'pointer' }} /></Link>

                        <Link href='/myprofile'><AccountCircleIcon style={{ color: 'white', fontSize: '60px', cursor: 'pointer' }} /></Link>

                    </p>

                </div>
                <div className='li'></div>
            </div>


            <div className='bankcontainer'>

                <div className='piyush'>
                    <div className='bankleft'>
                        <div>

                            <h4>BANKNIFTY</h4>
                            <p> <hr></hr>  </p>

                        </div>

                        <div className='chart'>
                            <div className='chartleft'>
                                <h4>Market Indices</h4>
                                <h5>BANKNIFTY</h5>
                                <div className='flex val'>
                                    <p>38276.30</p>
                                    <span className='red'> <p >-710.45(-1.82)</p></span>

                                </div>

                            </div>

                        </div>

                        <div className='buttons'>
                            <div className='bits'>
                                <h4>Quantity</h4>
                                <input type="number" className="txt"></input>
                            </div>
                            <div className='bits'>
                                <h4>Segment</h4>
                                <select type="option" className="txt">
                                    <option></option>
                                </select>
                            </div>
                            <div className='bits'>
                                <h4>Strategy</h4>
                                <select type="option" className="txt">
                                    <option></option>
                                </select>

                            </div>
                            <div className='bits'>
                                <h4>Trading</h4>
                                <input type="text" className="txt"></input>
                            </div>


                        </div>

                    </div>

                    <div className='bankright'>

                        <div>
                            <h4>NIFTY</h4>
                            {/* <p> <hr></hr>  </p> */}

                        </div>

                        <div className='chart'>
                            <div className='chartleft'>
                                <h3>Market Indices</h3>
                                <h5>NIFTY</h5>
                                <div className='flex val'>
                                    <p>38276.30</p>
                                    <span className='red'> <p >-710.45(-1.82)</p></span>

                                </div>

                            </div>

                        </div>

                        <div className='buttons'>
                            <div className='bits'>
                                <h4>Quantity</h4>
                                <input type="number" className="txt"></input>
                            </div>
                            <div className='bits'>
                                <h4>Segment</h4>
                                <select type="option" className="txt">
                                    <option></option>
                                </select>
                            </div>
                            <div className='bits'>
                                <h4>Strategy</h4>
                                <select type="option" className="txt">
                                    <option></option>
                                </select>
                            </div>
                            <div className='bits'>
                                <h4>Trading</h4>
                                <input type="select" className="txt"></input>
                            </div>


                        </div>



                    </div>
                </div>
                <div className='btnpapa'>
                    <button className='btn'>update</button>
                </div>


            </div>

            <Sidebar />
        </div>




    )
}

export default Dashboard