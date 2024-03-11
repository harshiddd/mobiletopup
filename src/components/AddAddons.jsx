import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function AddAddons() {
  const api_url = "http://localhost:8080";
  const navigate = useNavigate();
  const [addonId, setAddonId] = useState(0);
  const [addonName, setAddonName] = useState("");
  const [addonDetails, setAddonDetails] = useState("");
  const [addonPrice, setAddonPrice] = useState(0);
  const [addonValidity, setAddonValidity] = useState("");

  const handleSubmit = async () => {
    try {
      const body = {
        addonId: addonId,
        addonName: addonName,
        addonDetails: addonDetails,
        addonPrice: addonPrice,
        addonValidity: addonValidity
      };
      const token = sessionStorage.getItem("token");
      const response = await axios.post(`http://localhost:8080/api/addon`,
       body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/addons");
    } catch (error) {
      console.error("Error adding addon:", error);
    }
  };

  return (
    <div>
      <Navbar />
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0" style={{
        backgroundImage: "url('https://img.freepik.com/free-photo/colorful-abstract-nebula-space-background_53876-111356.jpg?t=st=1710084963~exp=1710088563~hmac=24ada6bcc4a30cd5b61fc5be109aa36397ce3bb4b5f1e6d59ebdb4234d8b8ea9&w=1060')",
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover", 
      }} >
      <div className="md:w-1/3 max-w-sm">
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded my-4"
          type="number"
          placeholder="Addon Id"
          value={addonId}
          onChange={(e) => setAddonId(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded my-4"
          type="text"
          placeholder="Addon Name"
          value={addonName}
          onChange={(e) => setAddonName(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded my-4"
          type="text"
          placeholder="Addon Details"
          value={addonDetails}
          onChange={(e) => setAddonDetails(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded my-4"
          type="number"
          placeholder="Addon Price"
          value={addonPrice}
          onChange={(e) => setAddonPrice(e.target.value)}
        />
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded my-4"
          type="text"
          placeholder="Addon Validity"
          value={addonValidity}
          onChange={(e) => setAddonValidity(e.target.value)}
        />

        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </section>
    </div>
  );
}

export default AddAddons;
