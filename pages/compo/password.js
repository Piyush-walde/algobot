import React from 'react'
import Link from 'next/link';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';

const Password = () => {
    return (
        <>
            <div className='password-container'>
                <div className='pass'>
                    <div className='flex3'>
                        <h3>Old Password</h3>
                        <input className='classinit' type='password'></input>
                    </div>
                    <div className='flex3'>
                        <h3>New Password</h3>
                        <input className='classinit' type='password'></input>
                    </div>
                    <div className='flex3'> 
                         <h3>Confirm Password</h3>
                        <input className='classinit' type='password'></input>
                     </div>

                     <div className='flex5'>
                     <ArrowBackSharpIcon />   
                    <Link href='/myprofile'><h3>Back</h3></Link> 
                     </div>
                    

                </div>
            </div>

        </>
    )
}

export default Password