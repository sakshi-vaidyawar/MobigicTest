import RegistrationPage from '../user/RegistrationPage';
import LoginPage from '../user/LoginPage';
import { BrowserRouter,  Route, Routes,  } from 'react-router-dom';
import FileUpload from '../fileupload/FileUpload';

function Layout() {
  return (
    <>
   <div>
    <BrowserRouter>
    <Routes>
        <Route exact path="/" Component={RegistrationPage}/>

        
        <Route path="/loginpage" Component={LoginPage}/>
        <Route path="/fileUpload" Component={FileUpload}/>

    </Routes>
    
    </BrowserRouter>
        
        </div>
    </>
    
  );
}

export default Layout;
