import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Navbar';
import About from './Components/About';
import Contact from './Components/Contact';
import Menu from "./Components/Menu"
import Deals1 from './Components/Deals1';
import RegistrationForm from './Components/Register';
import LoginForm from './Components/Login';
import AdminLogin from './Components/Adminlogin';
import AdminDashboard from './Components/Dashboard';
// import US from './Components/Userstatus';
import UserTable from './Components/Userstatus';
import Empdata from './Components/Empdata';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = createBrowserRouter([
    {
      path:"/",
      element:<>  <Nav/> <Home/> </>
    },
    {
      path:"/About",
      element:<>  <Nav/> <About/> </>
    },
    {
      path:"/Contact",
      element:<> <Nav/> <Contact/> </>
    },
    {
      path:"/Menu",
      element:<> <Nav/> <Menu/> </>
    },
    {
      path:"/Deals1",
      element:<> <Nav/> <Deals1/> </>
    },
    {
      path:"/Register",
      element:<> <Nav/> <RegistrationForm/> </>
    },
    {
      path:"/Login",
      element:<> <Nav/> <LoginForm/> </>
    },
    {
      path:"/Adminlogin",
      element:<> <Nav/> <AdminLogin/>   </>
    },
    {
      path:"/Dashboard",
      element:<> <Nav/> <AdminDashboard/>    </>
    },
    {
      path:"/Userstatus",
      element:<>  <Nav/> <UserTable/> </>
    },
    {
      path:"/Empdata",
      element:<><Nav /><Empdata/> </>
    }
  ])
  return (
    <RouterProvider router={router}>
    </RouterProvider>

  );
}

export default App;
