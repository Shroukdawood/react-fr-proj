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
function App() {
  const routes= useRoutes([{
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
}
])
  return  (<>
  <MainNavbar/>
{routes}
  <MainFooter/>
  </>)

  }
  export default App
