import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {
  return (
    <div className='parent_container'>

        <div className='login-image'>

            <Image src="/img.jpg" height="719px" width="700px"></Image>

        </div>

        <div className='login'>
        <div className='logo2'>
            <Image src='/logo2.jpg' height="90px" width="90px"></Image>
            </div>
            <div className='name-con'>
                <div className='name'>
                  
                    <h2>Login</h2>
                    <span className='line'> <hr></hr> </span>
                </div>
                

            </div>

            <div>
                <div className='usepas'>
                  <h5>Username*</h5>
                  <input type="text" className='usertext'></input>
                </div>

                <div className='usepas'>
                  <h5>Password*</h5>
                  <input type="text" className='usertext'></input>
                </div>

                <div className='usepas'>
                  <h5></h5>
                  <div className='usertext'>
                    <div className='flex'>
                            <input type="checkbox"></input>
                            <h5>Remember me</h5>
                    </div>
                     

                     <h5>Forgot Password?</h5>

                  </div>
              
                </div>

                
            </div>


            <div className='acc'>

                <div >
                     <button className='login-btn'>Login</button>
                </div>
                <div >
                     
                     <Link href='/createaccount'><button className=' login-btn logbtn'>Create an account</button></Link>
                </div>

            </div>


        </div>

    </div>
  )
}

export default Login