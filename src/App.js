import './App.css';
import LoginPage from './Forms/LoginPage';
{/*import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from './Project/ContactUs';
import AboutUs from './Project/AboutUs';
import Home from './Project/Home';
import Login from './Project/Login';*/}
{/*import ButtonAppBar from './Project/NavBarDemo';
import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';
import HooksEx from './Components/HooksEx';*/}
function App()
{
    return(
        <div className="App"> 
        <LoginPage/>
        {/*<ButtonAppBar/>
        <BrowserRouter>
        <Routes>                      
        <Route path="/" element={<Home/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
        <ClickCounter/>
        <HoverCounter/>
   <HooksEx/>*/}
    </div>
   );
}
export default App;