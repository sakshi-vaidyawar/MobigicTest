import  { useState } from 'react';
import axios from 'axios';
// import FileList from './FileList';
import { useUser } from './FileContext';
import GetAllFile from './GetAllFile';
import { toast } from 'react-toastify';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const { userId } = useUser();
  console.log(userId);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };



  const handleSubmit = async () => {
    if (!userId) {
        toast.error('Please log in to upload a file');
        return;
    }
    if (!file) {
      alert('Please select a file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    console.log('Selected File:', file); // Log selected file
    console.log('Form Data:', formData);

    try {
        await axios.post(`http://localhost:2023/upload/${userId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        
        toast.success('File uploaded successfully');
    } catch (error) {
        console.error('Error uploading file:', error);
        alert('Error uploading file. Please try again.');
    }
};

  return (
    <>
      <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-md">
  <h1 className="text-2xl font-bold mb-4">File Upload App</h1>
  <label className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md tracking-wide cursor-pointer">
    <span className="text-base leading-normal text-black text-lg">Choose a file</span>
    <input
      type="file"
      className="hidden"
      onChange={handleFileChange}
    />
  </label>
  <br />
  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleSubmit}>
    Upload File
  </button>
</div>

     <GetAllFile/>
    </>
  );
};

export default FileUpload;