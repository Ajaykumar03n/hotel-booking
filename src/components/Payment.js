import React, { useState } from "react";
import axios from "axios";
import "./Payment.css";
import Navbar from "./Navbar";

const Payment = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    amount: "",
    referenceNumber: "",
    gpayQRCode: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/payment", paymentDetails);
      console.log(response.data);
      // Reset form after successful submission
      setPaymentDetails({
        amount: "",
        referenceNumber: "",
        gpayQRCode: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
      });
      alert("Payment details saved successfully");
    } catch (error) {
      console.error("Error saving payment details", error);
      alert("Failed to save payment details. Please try again.");
    }
  };

  return (
    <div className="payment-form">
      <header className="header">
        <h1>Hotel Atrium</h1>
        <Navbar />
      </header>
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="amount"
          value={paymentDetails.amount}
          onChange={handleChange}
          placeholder="Amount"
          required
        />
        <input
          type="text"
          name="referenceNumber"
          value={paymentDetails.referenceNumber}
          onChange={handleChange}
          placeholder="Reference Number"
          required
        />
        <input
          type="text"
          name="gpayQRCode"
          value={paymentDetails.gpayQRCode}
          onChange={handleChange}
          placeholder="GPay QR Code"
          required
        />
        <input
          type="text"
          name="firstName"
          value={paymentDetails.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={paymentDetails.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          value={paymentDetails.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          value={paymentDetails.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
};

export default Payment;