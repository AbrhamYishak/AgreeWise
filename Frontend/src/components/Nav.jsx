import React from 'react'
import Logo from '../assets/logo.png'
import history from '../assets/history.png'
import setting from '../assets/setting.png'
function Nav() {
  return (
    <div>
        <ul className='flex flex-row justify-between items-center shadow-md'>
            <li>
                <div className='flex justify-center items-center'>
                    <img src={Logo} className='w-15'/>
                    <p className='text-2xl flex font-bold'>Agree <p className='bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent'>Wise</p></p>
                </div>
            </li>
            <div className='pr-4 gap-3 flex justify-center items-center'>
                <li>
                    <img src={history} className='w-5'/>
                </li>
                <li>
                    <img src={setting} className='w-5' />
                </li>
            </div>
            
        </ul>
    </div>
  )
}

export default Nav