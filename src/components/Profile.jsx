import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

const Profile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("No address details");
  const [mobile, setMobile] = useState("9445422734");
  const [customerId, setCustomerId] = useState();

  function showAlert() {
    const result = window.confirm(
      "Are you sure you want to delete your profile"
    );
    if (result) {
      // Call delete user API
      deleteUser();
    } else {
      console.log("Cancelled.");
    }
  }

  const getData = async (token) => {
    try {
       
      const response = await axios.get(
        `http://localhost:8080/api/customer/get/${6}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data[0]);
      setName(response.data.data[0].customerName);
      if (response.data.data[0].address != null)
        setAddress(response.data.data[0].address);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const getId = async (token) => {
    try {
      let email = sessionStorage.getItem("email");
      if (email == null) {
        sessionStorage.setItem("email", "kar@gmail.com");
      }
      email = sessionStorage.getItem("email");

      console.log(email);
      const response = await axios.get(
        `http://localhost:8080/api/customer/email/${email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data[0]);
      //setName(response.data.data[0].customerName);
      setCustomerId(response.data.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    getId(token);
    getData(token);
  }, []);

  const deleteUser = async (token) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/customer/${customerId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/plans");
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  };

  return (
    <div>
    <Navbar />
    <div className="h-screen dark:bg-white bg-gray-200 pt-12" style={{backgroundImage: "url('https://img.freepik.com/free-photo/top-view-smartphone-rocks-arrangement_23-2149672683.jpg?t=st=1710081878~exp=1710085478~hmac=4c7ba756964fefa3898631a6206f9843957a8852937bca2d9e56e8f5b4552c29&w=1060')"}}>
      <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <div className="border-b px-4 pb-6">
          <div className="text-center my-4">
            <img
              className="h-32 w-32 rounded-full border-4 border-white mx-auto my-4"
              src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1710081776~exp=1710085376~hmac=e7aeebb1dafe759210630c24fe895ca8bd8545d48df55a635c141bcc15707d9f&w=740"
              alt=""
            />
            <div className="py-2">
              <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
                {name}
              </h3>
              <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                <svg
                  className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    className=""
                    d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                  />
                </svg>
                {address}
              </div>
            </div>
          </div>
          <div className="flex gap-2 px-2">
            <button
              className="flex-1 rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2"
              onClick={() => {
                navigate("/editProfile");
              }}
            >
              Edit profile
            </button>
            <button
              className="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-black dark:text-white px-4 py-2"
              onClick={showAlert}
            >
              Delete user
            </button>
          </div>
        </div>
        <div className="px-4 py-4">
          <div className="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
            <svg
              className="h-6 w-6 text-gray-600 dark:text-gray-400"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path
                className=""
                d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"
              />
            </svg>
            <span>
              <strong className="text-black dark:text-white">1</strong> Plans
              plans and 2 Addons
            </span>
          </div>
          <div className="flex"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
