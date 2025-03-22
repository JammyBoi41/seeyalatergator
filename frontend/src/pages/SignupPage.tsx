import React from 'react'
import Form from 'react-bootstrap/Form'

const SignupPage = () => {
  return (
    <div style={{backgroundColor: "#f2f4fa"}} className="w-full h-screen flex flex-col items-center justify-center">  {/* landing page div */}
      
      <div> {/* top label */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2"> Register for an Account </h1>
      </div>

      <Form className="w-1/4 bg-white rounded border-gray-200 border-1 pl-7 pr-7 pt-5 pb-5 font-bold">
        <Form.Group className="flex flex-col mb-5">
          <Form.Label className="text-sm">
            Name
          </Form.Label>
          <Form.Control placeholder="John Doe" className="outline-gray-400 border-gray-300 border-1 rounded h-9 font-thin pl-3 text-sm"/>
        </Form.Group>

        <Form.Group className="flex flex-col mb-5">
          <Form.Label className="text-sm">
            Email Address
          </Form.Label>
          <Form.Control placeholder="name@example.com" className="outline-gray-400 border-gray-300 border-1 rounded h-9 font-thin pl-3 text-sm"/>
        </Form.Group>


        <Form.Group className="flex flex-col mb-5">
          <Form.Label className="text-sm">
            Password
          </Form.Label>
          <Form.Control type="password" className="outline-gray-400 border-gray-300 border-1 rounded h-9 font-thin pl-3 text-sm"/>
        </Form.Group>

        <button className="bg-gray-950 w-full text-white pt-2 pb-2 rounded-xl hover:bg-gray-700 transition duration-300 cursor-pointer">
          Log In
        </button>
    </Form>
    </div>
  )
}

export default SignupPage