// import "./assets/style.css" ; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRoutes } from "react-router-dom"
import MainFooter from "./components/MainFooter"
import MainNavbar from "./components/MainNavbar"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Error404 from "./Pages/Error404"
import Content from './Pages/Contant/Content';
import Registration from './Pages/Registeration/Registration';
import LogIn from './Pages/Log in/LogIn';
import Student from './Pages/Student/Student';
import Profile from './Pages/Student/children/Profile/Profile';
import Courses from './Pages/Student/children/Courses/Courses';
import Course from './Pages/Student/children/Course/Course';
import StudentLayout from './Layout/StudentLayout';
import MainLayout from './Layout/MainLayout';
import Counter from './Pages/Counter/Counter';
import Products from './Pages/Products/Products';

function App() {
  const routes= useRoutes([{
    element:<MainLayout/>,
    children:[{
      path:"/",
      element:<Home/>
    },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/*",
    element:<Error404/>
  },{
    path:"/content",
    element:<Content/>
  },
  {
    path:"/registration",
    element:<Registration/>
  },
  {
    path:"/login",
    element:<LogIn/>
  },
  {
    path:"/counter",
    element:<Counter/>
  }
  ,
  {
    path:"/products",
    element:<Products/>
  },
  {
    path:"/student",
    children:[{
  element:<StudentLayout/>,
  children:[{
    path:"",
    element:<Student/>},
    {
      path:"profile",
      element:<Profile/>
    },
    {
      path:"courses",
      element:<Courses/>
    }
  ]
    }
      ,{
        path:"course/:courseId",
        element:<Course/>
      },
      
    ]
  }
  ]
  
  }]);
    return (<>{ routes }</>);
  }
  export default App
