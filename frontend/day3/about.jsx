import CustomNavBar from "./Navbar";
import './about.css'
import tw from './assets/tower_photo.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import po from'./assets/ponnuu.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMobileAlt, faWifi } from '@fortawesome/free-solid-svg-icons';
import Footer from "./Footer";


const About=()=>
{
    return(
        <>
         <div>
            
            <CustomNavBar/>    
    </div>
    <div>
         <div style={{backgroundColor:"beige"}}>
      <div style={{display:'flex'}}>
     <div><h1 className="AC">Fiberr!</h1>
      <br></br>
      <br></br>
      <img className="tow" style={{width:800,height:700}} src={tw}></img>
      </div> 
      <div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <section className="about-section">
      <div className="cntainer">
        <div className="about-content">
          <h2 className="af">About Fiberr!</h2>
          <h2 style={{textAlign:'center',color:"green"}}>Empowering Connections, Enriching Lives</h2><br></br>
        <p style={{fontSize:'20px',justifyContent:"center",marginLeft:20,color:"black"}}>
          Welcome to Fiberr!, where innovation meets convenience in the realm of online recharges.At Fiberr!, we believe in the power of seamless connectivity and the transformative impact it can have on your daily life.Experience seamless and convenient mobile top-ups with our user-friendly platform.
          Enjoy instant recharges for any mobile carrier, anytime, anywhere. Easily recharge your prepaid mobile balance, data plans, and more.
          Discover exclusive promotions, discounts, and cashback offers on every recharge. Our responsive design ensures a seamless experience across all devices. 
        </p>
        </div>
        <div><img className="ry" src="https://img.freepik.com/free-vector/hand-holding-phone-with-credit-card-screen-man-making-purchase-shopping-paying-online-using-banking-app-flat-vector-illustration-transaction-e-commerce-concept_74855-26014.jpg?w=900&t=st=1706548142~exp=1706548742~hmac=86bdfe5f1363bdf54eeecd4287acad2e56d192d6d9d3ad3c46a84df7b33f357c"></img></div>
      </div>
    </section>
    </div> 
    </div> 
    

    <section className="abo-section">
      <div className="tainer">
        <div className="abo-content">
          <h2 style={{fontSize:'40px',color:"black"}}>Our story</h2>
          <p style={{fontSize:'20px',color:"black"}}>
          Founded with a vision to simplify and enhance the way you stay connected, Fiber! is more than just an online recharge portal.
          We are a team of passionate individuals who understand the significance of uninterrupted communication in today's fast-paced world.
          
            With years of experience in the industry, we have established a strong reputation for delivering exceptional results. Our team of dedicated professionals is committed to understanding your unique requirements and guiding you every step of the way.
          </p>
        </div>
        <div className="ima-container">
          <img src="https://img.freepik.com/free-photo/3d-hand-making-cashless-payment-from-smartphone_107791-16609.jpg?size=626&ext=jpg&uid=R135791312&ga=GA1.1.1428761677.1689065684&semt=sph" alt="About" className="about-image" />
        </div>
      </div>
    </section>
   
    
   
    
      
      <br></br>
      <br></br>
      <div className="ca">

    <Card sx={{ maxWidth: 345,borderRadius:10 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="data:image/png;base64,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"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Prepaid
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Prepaid services offer users the flexibility and control over their expenses in the ever-evolving digital landscape. With prepaid plans, customers pay in advance for mobile services, avoiding monthly bills and commitments.Prepaid plans often come with customizable features, including talk time, text messages, and data, catering to individual needs.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>

    <div className="co">

    <Card sx={{ maxWidth: 345,borderRadius:10 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://media.istockphoto.com/id/974746812/photo/5g-network.jpg?s=612x612&w=0&k=20&c=xp8MgyYceX0Po8cZIt1Vt-OCGKfqgNxmdhkgwsLxcTU="
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Postpaid
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Postpaid plans are popular for their flexibility, as users can change their plan or upgrade their devices easily. They are suitable for those who prefer a predictable monthly bill and consistent service without the need for frequent recharges.
        These plans often include a set amount of talk time, text messages, and data, with additional charges for exceeding the allocated limits.






        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>

    </div>

    <div className="ci">

      

    
    <Card sx={{ maxWidth: 345,borderRadius:10 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.lovepik.com/element/45009/5151.png_860.png"
        title="green iguana"
      />

      

    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Payment Transactions
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Recharge portals facilitate seamless transactions for mobile, DTH, and data recharges. Users can choose various payment methods, including credit/debit cards, digital wallets, and net banking, ensuring convenience. Security measures, such as OTP verification, safeguard transactions.Transactions should be secure and to enhance the overall user experience, fostering trust and reliability.
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
      {/* </CardActions> */}
    </Card>

    </div>

    





<div className="cd">

  
    <Card sx={{ maxWidth: 345,borderRadius:10  }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.freepik.com/free-photo/business-analysis-report-folder-icon_53876-14637.jpg?size=626&ext=jpg&ga=GA1.1.1428761677.1689065684&semt=ais"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Fiber
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Fiber networks utilize optical fiber cables to transmit data at incredibly high speeds, enabling seamless communication and internet access. These networks offer low latency, increased bandwidth, and improved reliability, supporting the growing demand for data-intensive applications. Fiber-optic infrastructure is pivotal for advancing telecommunications, fostering efficient connectivity worldwide. 
        </Typography>
        
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>

    </div>

    </div>
<br></br>
      {/* <div className="w">

    <img className="ponnu" src={po} alt="pi"></img>
    <div className="or">

      <h2 className="highlight-text">Why Choose Us?  </h2>
      <br></br>
      <p style={{fontSize:'20px'}}>
        Our Fiber! is built with the latest technologies to ensure a smooth and user-friendly experience. Here are a few reasons why you should choose our system:
      </p>
      <ul>
      <li>Intuitive and responsive user interface.</li>
        <li>Robust security measures to protect your data.</li>
        <li>Scalable architecture to accommodate your growing real estate business.</li>
        <li>Regular updates and improvements based on user feedback.</li>
        <li>24/7 customer support to assist you whenever you need help.</li>
        </ul>
    </div>
    
       </div> */}
       <div><Footer/></div>
       
    </div>
    </div>
        </>
    )
}
export default About;