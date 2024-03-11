import React, { useState } from 'react';

const RazorpayPayment = () => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const options = {
        key: 'rzp_test_cauugbeTpuheUu',
        key_secret: 'YoKUhKDAn2ghDA0KLIorcaoC',
        amount: 2000,
        currency: 'INR',
        name: 'Your Company Name',
        description: 'Payment for Product',
        image: 'https://img.freepik.com/free-photo/online-payment-security-concept-3d-phone-bill_107791-16722.jpg?t=st=1710065844~exp=1710069444~hmac=96f4e1c51c1bb9dd76764299f8579b3cdde96132ad10cac00481ea2093f0e592&w=900',
        handler: function (response) {
          // Handle successful payment
          console.log('Payment successful:', response);
          alert('Payment successful!');
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('Payment failed. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? 'Processing...' : 'Recharge'}
      </button>
    </div>
  );
};

export default RazorpayPayment;
