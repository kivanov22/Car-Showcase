'use client'

import {AiOutlineMenu} from 'react-icons/ai'
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {BiUserCircle } from 'react-icons/bi'


const Navbar = () => {
  return (
    <div className="bg-orange-500  h-14 w-100 flex justify-between">
        {/* bg-blue-primary */}
        {/* left side */}
        <div className='order-first flex flex-row gap-8 place-items-center ml-10'>
            {/* logo */}
            {/* side navigation */}
            <AiOutlineMenu className='fill-white' size={25}/>
            <span className='text-white font-bold'>IvanovCars</span>
        </div>
        {/* right side */}
        {/* bg-[#09f] */}
        <div className='order-last flex place-items-center mr-20 gap-8'>
            {/* login */}
            {/* when logged edit or add an post */}
            <BiUserCircle size={25} className='fill-white'/>
            {/* register */}
            {/* favorites */}
            <AiOutlineHeart size={25} className='fill-white'/>
        </div>
    </div>
  )
}

export default Navbar