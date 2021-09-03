import logo from './logo.svg';
import './App.css';
import {Box} from '@material-ui/core';
import Navbar from "../src/Components/Navbar/Navbar.js";
import SideBar from "../src/Components/SideBar/SideBar.js";
import { useStyles } from "./Components/Navbar/HeaderStyles";
import { Router, Routes, Route, Link } from "react-router-dom";
import DashBoard from "../src/Pages/DashBoard.js";
import Login from "../src/Pages/Login.js";
import LinkPage from "./Pages/LinkPage.js";
import Blogs from "../src/Pages/Blog.js";
import NotificationPage from './Pages/NotificationPage';


function App() {
  const classes = useStyles();
  return (
    <div className="App">
     <Navbar/>
     <SideBar/>
     <Box className={classes.wrapper} >
      <Routes>
       <Route exact path="/" element = {<DashBoard/>}/>
       <Route  path = "/blog" element = {<Blogs/>}/>
       <Route  path = "/link" element = {<LinkPage/>}/>
       <Route  path = "/login" element = {<Login/>}/>
       <Route  path = "/notification" element = {<NotificationPage/>}/>
     </Routes>
    </Box>
    </div>
  );
}

export default App;
