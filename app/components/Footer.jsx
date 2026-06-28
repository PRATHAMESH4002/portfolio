import { assets } from '@/public/assets/assets'
import React from 'react'
import Image from 'next/image'

export default function Footer({isDarkMode}) {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.TM_dark} alt='' className='w-36 mx-auto'/>

            <div className='w-max flex items-center gap-1 mx-auto'>
                <Image src={isDarkMode? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
                prathameshdabhole06@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t  border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© Prathamesh Dabhole. All rights reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/PRATHAMESH4002?tab=repositories">GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/prathamesh-dabhole-7813a5267/">LinkedIn</a></li>
                
            </ul>
        </div>
    </div>
  )
}
