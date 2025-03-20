import React from 'react'

const LandingPage = () => {
  return (
    <div style={{backgroundColor: "#f2f4fa"}} className="w-full h-screen flex flex-row items-center">  {/* landing page div */}
        <div className="flex flex-col gap-y-2 pl-15"> {/* left half */}
            <h1 className="font-bold text-7xl text-orange-500 whitespace-nowrap"> See Ya <span className="text-blue-800">Later Gator</span></h1>
            <h2 className="text-5xl text-gray-600 whitespace-nowrap"> By Gators, For Gators</h2>
        </div>


        <div className="flex-grow w-full h-full flex items-center justify-end pr-15"> {/* second half of page */}
          <div className="bg-black w-1/2 h-1/2 rounded-2xl"> {/* cycler box */}

          </div>
        </div>
    </div>
  )
}

export default LandingPage