import React from 'react';
import Topbar from './Topbar'; // นำเข้า Topbar
import logo from './user_icon.png'; // แทรกที่อยู่ของรูปภาพที่คุณต้องการใช้


function Profile() {
  return (

    <div className="min-h-screen bg-gray-100">

      <Topbar />
      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="w-full max-w-2xl p-8 space-y-6 bg-white border border-gray-300 rounded-lg shadow-md">
          
          {/* รูปภาพด้านบน */}
          <img src={logo} alt="Logo" className="w-24 h-24 mx-auto rounded-full" />

          <h1 className="text-3xl font-bold text-center text-blue-500">Welcome to Suphakit mini Zoo</h1>
          <p className="text-center text-gray-600">
            This is your homepage. Enjoy exploring the features of our platform.
          </p>
          
          <div className="flex flex-col items-center space-y-4">
            <button className="w-1/2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Get Started
            </button>
            <button className="w-1/2 px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

