import React from 'react'
import { FaHome } from 'react-icons/fa'

function Topbar() {
  return (
    <div className='w-full bg-blue-500 py-4 px-8 shadow-md'>
        <div className='container mx-auto flex justify-between items-center'>
            {/* แทรก icon FaHome */}
            <h1 className='text-lg font-bold text-white flex items-center'>
                <FaHome className='mr-2'/>mini Zoo
            </h1>
            
            <div className=' space-x-4'>
                <a href="/profile" className="text-white hover:text-blue-800 font-bold">Home</a>
                <a href="/login" className="text-white hover:text-blue-800 font-bold">Login</a>
                <a href="/register" className="text-white hover:text-blue-800 font-bold">Register</a>
            </div>
        </div>
    </div>
  );
}

export default Topbar