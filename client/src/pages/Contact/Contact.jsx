import React from 'react';
import './contact.css';

const Contact = ({ name, address, contactNumber, email }) => (
  <div className="company-details">
    <h1>Rushit Patel</h1>
    <p>Address: Charusat</p>
    <p>Contact: +91 92659 76384</p>
    <p>Email: 21dcs086@charusat.edu.in</p>
  </div>
);

const CompanyDetailsPage = () => {
  const companyInfo = {
    name: 'Your Company Name',
    address: '123 Main St, Cityville',
    contactNumber: '123-456-7890',
    email: 'info@company.com',
  };

  return (
    <div className="company-details-page">
      <Contact
        name={companyInfo.name}
        address={companyInfo.address}
        contactNumber={companyInfo.contactNumber}
        email={companyInfo.email}
      />
    </div>
  );
};

export default Contact;

