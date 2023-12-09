import  { useEffect, useState } from 'react';
import { useUser } from './FileContext';
import axios from 'axios';
import DeleteFileApi from './DeleteFileApi';

function GetAllFile() {
    const [files, setFiles] = useState([]);
    const { userId } = useUser();

    const handleDelete=(deleteid)=>{
        setFiles((prevFiles)=>prevFiles.filter((file)=>file.id!==deleteid))

    }

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const res = await axios.get(`http://localhost:2023/get_files/${userId}`);
                if (res.data.files) {
                    setFiles(res.data.files);
                }
            } catch (error) {
                console.log('Error fetching files:', error);
            }
        };

        if (userId) {
            fetchFiles();
        }
    }, [userId,files]);

    return (
        <div>
            <h1 className="text-xl font-bold mb-4 mt-5">List of All files </h1>
            <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-black-300 px-4 py-2 text-black">File Name</th>
            <th className="border border-black-300 px-4 py-2  text-black">Actions</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border border-gray-300 px-4 py-2 text-black">{file.filename}</td>
              <td className="border border-gray-300 px-4 py-2">
                <DeleteFileApi id={file.id} deleted={handleDelete} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );
}

export default GetAllFile;
