import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../Assets/logo.svg'
import image from '../Assets/NOZE-Hero-1.png'
const Navbar = () => {
    const [isOpen, setIsOpen]=useState(false)
    const [increase,setIncrease]=useState(1)
    const [price,setPrice]=useState(249)
    const increaseValue=()=>{
             setIncrease((previous)=>previous+1)
             
    }
  
    const decreaseValue=()=>{
        if(increase>1)
        {
            setIncrease((previous)=>previous-1)
          
        }
        
}
    return (
        <div>
            <div class="navbar bg-base-100 fixed z-30 shadow-sm px-8">
                <div class="navbar-start">
                    <Link to='/home'><img src={icon} alt="" /></Link>
                    <div class="dropdown">
                    <div class="flex-none lg:hidden">
                    <ul class="menu menu-horizontal p-0">
                    <li tabindex="0">
                        <a>
                        Overview
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul class="p-2 bg-base-100">
                        <li><Link to="/specs">Specs</Link></li>
                        <li><a href="#collapse1" className='text-[#654A9B]'>FAQs</a></li>
                        </ul>
                    </li>
                        </ul>
                    </div> 
                    
                    </div>
                    <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                       <li><Link to='/home' className='text-[#654A9B]'>Overview</Link></li>
                       <li><Link to='/specs' className='text-[#654A9B]'>Specs</Link></li>
                       <li><a href="#collapse1" className='text-[#654A9B]'>FAQs</a></li>
                    </ul>
                </div>
                </div>
                <div class="navbar-end">
                    <p className="text-[#6B5A78] text-lg mr-2 hidden lg:block">Order for $249</p>
                    <label for="my-modal" className="bg-[#654A9B] hidden lg:block  cursor-pointer py-3.5 px-9 text-white rounded-md">Pre order</label>
                    <p className="relative top-72 right-0 p-4 rounded-lg z-30 text-white bg-[#654A9B] ">Cart <span className="block">{increase}</span><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></p>
                </div>
                </div>
                    <input type="checkbox" id="my-modal" class="modal-toggle" />
                    <div class="modal">
                    <div class="modal-box">
                        <label for="my-modal" class="btn float-right ml-3">✕</label>
                            <div className="flex justify-between">
                            <img src={image} class="w-8 h-16" />
                            <div>
                            <h1 className="text-lg">Noze | Smart Air Quality Monitor</h1>
                            <div class="form-control">
                            <label class="input-group">
                                <button onClick={()=>decreaseValue()} className="w-6  border-solid border-2 border-black">-</button>
                                <p className="w-8 border-solid border-2 border-black">{increase}</p>
                                <button onClick={()=>increaseValue()} className="w-6 border-solid border-2 border-black">+</button>
                                <p className="ml-28">${increase*249}</p>
                            </label>
                            </div>
                            </div>
                            </div>
                            <p className="ml-28">${increase*249}</p>
                            <button className="bg-[#654A9B] py-3.5 px-9 text-white rounded-md w-full my-6">CheckOut</button>
                            
                    </div>
                    </div>    
        </div>
    );
};

export default Navbar;