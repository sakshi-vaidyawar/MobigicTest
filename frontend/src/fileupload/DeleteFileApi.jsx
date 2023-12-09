import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify'
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';


function DeleteFileApi({id,deleted}) {
    const handleDeleted= async()=>{
        try{
            await axios.delete(`http://localhost:2023/files_deleted/${id}`);
            deleted(id);
            toast.success("File Dleted Succussfully")
            
            


        }catch (error){
            toast.error("error deleting file");
        }
    }

  return (
    <div>
        <button         className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
 onClick={handleDeleted} >Delete</button>
      
    </div>
  );
}

export default DeleteFileApi;
