import Invoice from "./Invoice";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import RazorpayPayment from "./RazorPay";

const Addons = () => {
  const [addons, setAddons] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const getData = async (token) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/user/getaddons",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data);
      setAddons(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    getData(token);
  }, []);

  const Popup = ({ onClose }) => {
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded-md w-[70%] h-[70%]">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-around flex-row bg-gray-800 h-2/3">
              <div className="bg-black w-2/3 h-full mx-2 my-16">
                <h1>dskao</h1>
              </div>
              <div className="bg-black w-1/3 h-full mx-2 my-16">
                <h1>dsl</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-cover bg-center h-screen bg-white" style={{backgroundImage: "url('https://img.freepik.com/free-vector/businessmen-increase-company-s-capital-affects-success-company-s-business_1150-64317.jpg?t=st=1710082103~exp=1710085703~hmac=a183fbaf03215d898e12210ff351c71355bcc870abaa26d70924d1fa39a35227&w=1060')"}}>
      <Navbar />
      <div className="bg-opacity-90 bg-cover">
        {isPopupOpen && <Popup onClose={closePopup} />}
        <section className="flex items-center justify-center">
          <ul className="flex flex-wrap justify-around w-[1000px]">
            {addons.map((addon, index) => (
              <li
                key={index}
                className="w-1/4 flex justify-center rounded-[20px] mx-4 my-16"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[10 0%]">
                  <div className="bg-blue-500 text-white font-bold py-2 px-4 uppercase tracking-wide text-sm rounded-t-lg">
                    {addon.addonName}
                  </div>
                  <div className="text-4xl font-bold text-black py-8 px-4 text-center">
                    ₹{addon.addonPrice}
                  </div>
                  <div className="flex justify-center items-center space-x-4 py-4">
                    <div className="text-gray-500 text-sm font-medium">
                      Details:
                      <br />
                      <span className="text-black font-bold">
                        {addon.addonDetails}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-4 px-4">
                  <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                  >
                    <RazorpayPayment />
                    </button>
                    <button
                      className="text-blue-500 font-bold py-2 px-4 rounded"
                      onClick={() => {
                        sessionStorage.setItem(
                          "invoice_addon",
                          JSON.stringify(addon)
                        );
                        openPopup();
                      }}
                    >
                      View details
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Addons;
