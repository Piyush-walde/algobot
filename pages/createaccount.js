import React from 'react'
import Image from 'next/image'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Createaccount = () => {
  return (
    
        <div className='creat-container'>

          <div className='left'>
         
             <div className='propart'>
            <div className='logo'>
            <Image src='/logo2.jpg' height="90px" width="90px"></Image>
            </div>
            
                <p className='line1'></p>
                <div className='accountcircle'>
                  <AccountCircleIcon style={{color:'white',fontSize:'70px'}}/>
                </div>
                <p className='line1'></p>
              </div>
                 <h1>Create your Account</h1>
                 <div className='firstlast'>
                    <div className='first'>
                       <input type="text" placeholder='First Name'></input>
                       <input type="text" placeholder='Last Name'></input>
                    </div>
                    <div className='first'>
                       <input type="text" placeholder='City'></input>
                       <input type="text" placeholder='Phone Number'></input>
                    </div>
                 </div>

                 <div className='emaiil'>
                    
                    <div className='email-fist'>
                      <input type="text" placeholder='Username'></input>
                      <input type="password" placeholder='Password'></input>
                      <input type="password" placeholder='Confirm Password'></input>
                      <input type="email" placeholder='E-mail'></input>
                      <button className='create-btn'>Create</button>

                    </div>

                 </div>
             

          <div></div>
            
          </div>

          <div className='right'>
            
            {/* <img src='./'></img> */}
            <Image src='/createpage.jpg' height="698px" width="550px"></Image>

          </div>

          
          </div>
  )
}

export default Createaccount