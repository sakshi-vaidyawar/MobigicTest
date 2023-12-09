import  { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../fileupload/FileContext';

function LoginPage() {
    const [username,setUserName]=useState('');
    const[password,setPassword]=useState('')
    const {setUser}=useUser();
    const navigate=useNavigate();
    const handleLogin= async()=>{
       
      
      if (!username || !password) {
        alert('Please enter both username and password.');
        return;
    }

    try {
        const response = await axios.post('http://localhost:2023/login', {
            username,
            password
        });

        const { userId, message } = response.data;
        
        if (userId) {
            alert(message);
            // Set the userId in the context
            setUser(userId);
            console.log(userId);
            navigate("/fileupload");
        } else {
            alert('Invalid username or password');
        }
    } catch (error) {
        console.error('Error logging in:', error);
    }
};

        

    
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 max-w-md w-full">
      <h2 className="text-2xl mb-4 text-center text-black font-bold">Login Page</h2>
      
        <div className="mb-4">
          <div className="flex items-center mb-4">
            <label
              className="block text-blue-500 text-sm font-bold mr-2"
              htmlFor="username"
            >
              User Name:
            </label>
            <input
              id="username"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline "
              placeholder="User Name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <label
              className="block text-blue-500 text-sm font-bold mr-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handleLogin}
          
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Log In
        </button>
        <p className='text-black'>Don't have account please? <span className=' text-blue-600 text-m' onClick={()=>navigate("/")}>SignUP</span></p>
      
    </div>
  </div>
    
  );
}

export default LoginPage;
