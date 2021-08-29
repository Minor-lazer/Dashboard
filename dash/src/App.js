import logo from './logo.svg';
import './App.css';
import Navbar from "../src/Components/Navbar/Navbar.js";
import SideBar from "../src/Components/SideBar/SideBar.js";
import { Router, Routes, Route, Link } from "react-router-dom";
import DashBoard from "../src/Pages/DashBoard.js";
import Login from "../src/Pages/Login.js";
import LinkPage from "./Pages/LinkPage.js";
import Blogs from "../src/Pages/Blog.js";
import NotificationPage from './Pages/NotificationPage';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <SideBar/>
    <Routes>
      <Route exact path="/" element = {<DashBoard/>}/>
      <Route  path = "/blog" element = {<Blogs/>}/>
      <Route  path = "/link" element = {<LinkPage/>}/>
      <Route  path = "/login" element = {<Login/>}/>
      <Route  path = "/notification" element = {<NotificationPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
