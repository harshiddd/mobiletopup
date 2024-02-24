import React from "react";
import Login from "./login";

import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Register from "./register";
import Navbar from "./Navbar";
import Home from "./home";
import plan from "./plans";
import About from "./about";
import Jio from "./jio";
import Admin from "./admin";
import UserGroup from "./usergroup";
import Dashboard from "./dashboard";
import ALogin from "./Admin/adminl";

import Recharge from "./Recharge";
import Plan from "./plans";
import AddP from "./Addplan/addP";
import PaymentPage from "./payment";

function App()
{
  return(
    <div >
      <Router>
      <Routes>
       <Route path="/reg" element={<Register/>}/>
       <Route path="/" element={<Login/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/plan" element={<Plan/>}/>
       <Route path="/jio" element={<Jio/>}/>
       <Route path="/admin" element={<Admin/>}/>
       <Route path="/usergroup" element={<UserGroup/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/adminLogin" element={<ALogin/>}/>
       <Route path="/addp" element={<AddP/>}/>
       
       <Route path="/recharge" element={<Recharge/>}/>
       <Route path="/pay" element={<PaymentPage/>}/>
 
     
      </Routes>
      </Router>
    </div>
  );
}

export default App






