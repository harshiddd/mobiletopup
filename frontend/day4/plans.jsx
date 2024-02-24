import CustomNavBar from "./Navbar"
import './plans.css';
import ji from "./assets/jio_image.png";
import air from "./assets/airtel-logobg.png";
import vi from "./assets/vi-logo.png";
import bsnl from "./assets/bsnl_ima-logo.png";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";


const Plan=()=>
{
  return(
    <>
    <div>
      <CustomNavBar/>
    </div>
    <div >

      <h1 style={{textAlign:'center',marginTop:'150px',marginRight:"100px"}}>Choose your Operator</h1>
       <section style={{backgroundColor:"beige"}}>
      <div style={{display:'flex',marginLeft:'250px',marginTop:"130px"}}>
       
      <NavLink to="/jio"><img src={ji}></img></NavLink><br></br><br></br>
       <div><NavLink to="/jio"><img style={{maxHeight:200,maxWidth:200,marginTop:"20px"}} src={air}></img></NavLink></div><br></br><br></br>
       <div><img style={{maxHeight:200,maxWidth:200,marginTop:"120px"}} src={vi}></img></div><br></br><br></br>
       <div><img style={{maxHeight:200,maxWidth:200,marginTop:"90px"}} src={bsnl}></img></div><br></br><br></br>
      </div>
      </section>


    </div>
    <div><Footer/></div>
    
    </>
  );
};

export default Plan;
