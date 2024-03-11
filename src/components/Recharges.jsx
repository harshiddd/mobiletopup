import PaymentComponent from "./PaymentComponent";
import Navbar from "./Navbar";

const Recharge = () => {
  return (
    <div>
    <Navbar />
    <div style={{
        backgroundImage: "url('https://img.freepik.com/free-photo/close-up-hand-holding-receipt_23-2149149730.jpg?t=st=1710082624~exp=1710086224~hmac=b753c3a9b0de81f17161fb76ff282a7fa7201f5a68e37dfad802c36bade8a0c6&w=1060')",
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover", 
      }}>
       
    <div className="flex flex-col justify-between items-center " >
      <div>
        <PaymentComponent />
      </div>
      <div>
        <PaymentComponent />
      </div>
      <div>
        <PaymentComponent />
      </div>
      <div>
        <PaymentComponent />
      </div>
    </div>
    </div>
    </div>
  );
};
export default Recharge;