import  { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios'



function RegistrationPage() {
const[data ,setData]=useState({
  name:'',
  username:"",
  password:""

})
    const navigate=useNavigate();
    const handleChange=(e)=>{
      setData({...data,[e.target.name]:[e.target.value]})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:2023/singup', data)
        .then((res) => {
          console.log('registration successful');
          navigate('/loginpage');
        })
        .catch((err) => {
          console.log(err);
        });
        
    }
    

  return (
    <>
     <div className="container mx-auto p-6 bg-gray-100">
      <h1 className="text-3xl mb-6 text-center font-bold text-blue-800">Mobigic </h1>
        <h2 className="text-3xl mb-6 text-center text-blue-600">Registration</h2>
        <form onSubmit={handleSubmit} className="max-w-md border border-blue-400 p-6 rounded-lg bg-white">
          <div className="mb-6 flex items-center">
            <label className="w-1/4 pr-4 text-right  text-blue-600">Name:</label>
            <input
              type="text"
              className="border border-blue-400 p-2 w-3/4 rounded"
              placeholder="Enter Name"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 flex items-center">
            <label className="w-1/4 pr-4 text-right text-blue-600">Username:</label>
            <input
              type="text"
              className="border border-blue-400 p-2 w-3/4 rounded"
              placeholder="Enter Username"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 flex items-center">
            <label className="w-1/4 pr-4 text-right text-blue-600">Password:</label>
            <input
              type="password"
              className="border border-blue-400 p-2 w-3/4 rounded"
              placeholder="Enter password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
            Sign Up
          </button>
          <p className='text-black'>Already have an Account  <span className=' text-blue-600 text-m' onClick={()=>navigate("/loginpage")}>Login</span></p>
        </form>
      </div>
    </>
    
  );
}

export default RegistrationPage;
