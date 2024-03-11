import "../home.css"
import React from "react";
import Navbar from "./Navbar";
import hm from '../assets/recharge img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMobileAlt, faWifi } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
import Footer from "./Footer";


const Home=()=>
{
    return(
        <>
        <div>   
        <Navbar />
        </div>
        <div style={{backgroundColor:"beige"}}>
        <div style={{flexDirection:'row',display:'flex'}}>
           <img className="t" style={{width:800,height:700}} src={hm}></img>
           <div style={{marginLeft:50}}>
            <br></br>
            <br></br>
            <br></br>
            <h1 className="ft" >Recharge from any where in the world. Anytime.</h1>
            <br></br>
            <br></br>
            <p className="rt">Your online mobile reharge transation is completely gauranteed and seure</p>
            <p className="rt">Earn reward points & get bonus anytime,anywhere</p>
            <br></br>
            <br></br>
            <div style={{flexDirection:'row',display:'flex'}}>

           <NavLink to="/plans"> <button className="innovation-button">
      Get started
    </button></NavLink>
    <div style={{marginLeft:30}}>
        <NavLink to="/about">

    <button className="innovation-button">
        
     Learn more
    </button>
        </NavLink>

    </div>
    
  
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <footer>

            <div className="footer-icons">
        <FontAwesomeIcon icon={faCreditCard} />
        <div style={{marginLeft:20}}>

        <FontAwesomeIcon icon={faMobileAlt} />
        </div>
        <div style={{marginLeft:20}}>

        <FontAwesomeIcon icon={faWifi} />
        </div>
        {/* Add more icons as needed */}
      </div>
      <p>&copy; 2024 Fiberr!!!</p>
            </footer>
           </div>
        </div>
        </div>
        <div>
            <Footer/>
        </div>
       
        </>
    );
};

export default Home;