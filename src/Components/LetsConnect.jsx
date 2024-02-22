import React from 'react';
import styled from 'styled-components';

// Styled components
const ConnectSection = styled.section`
  background-color: rgba(0,0,0,0);
  padding: 60px 0;
`;

const ConnectContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const DecorativeLine = styled.div`
  width: 40px;
  height: 4px;
  background-color: #001b3a;
  margin: 0 auto 20px;
`;

const ConnectForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

const ConnectLabel = styled.label`
  font-size: 1.2em;
  color: #001b3a;
`;

const ConnectInput = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 5px;
  background-color:rgba(255,255,255,0.3);
  font-size: 1em;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #3498db;
  }

  &:required {
    border-color: red;
  }
`;

const ConnectTextarea = styled.textarea`
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 5px;
  background-color:rgba(255,255,255,0.3);
  font-size: 1em;
  height: 150px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #3498db;
  }

  &:required {
    border-color: red;
  }
`;

const ConnectButton = styled.button`
  background-color: rgba(0,27,58,0.8);
  color: #fff;
  padding: 10px 15px; /* Adjusted padding for a smaller size */
  border: none;
  width :200px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2em;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgb(0,27,58);
  }
`;

const AdditionalInfo = styled.p`
  text-align: center;
  font-size: 1em;
  color: #666;
  margin-top: 20px;
`;

const LetsConnectHeading = styled.h2`
  text-align: center;
  font-size: 2em;
  color: #333; /* Change to your desired color */
  margin-bottom: 20px;
`;

const LetsConnect = () => {
  return (
    <ConnectSection>
      <ConnectContainer>
        <DecorativeLine />
        <LetsConnectHeading>Let's Connect</LetsConnectHeading>
        <AdditionalInfo>Contact our support team and make an appointment with our experts.</AdditionalInfo>
        <ConnectForm>
          <ConnectLabel htmlFor="fullName">Full Name</ConnectLabel>
          <ConnectInput type="text" id="fullName" name="fullName" required />

          <ConnectLabel htmlFor="email">Email</ConnectLabel>
          <ConnectInput type="email" id="email" name="email" required />

          <ConnectLabel htmlFor="contactNumber">Contact Number</ConnectLabel>
          <ConnectInput type="tel" id="contactNumber" name="contactNumber" required />

          <ConnectLabel htmlFor="subject">Subject</ConnectLabel>
          <ConnectInput type="text" id="subject" name="subject" required style={{ marginBottom: '10px' }} />

          <ConnectLabel htmlFor="message">Message</ConnectLabel>
          <ConnectTextarea id="message" name="message" rows="4" required />

          <ConnectButton type="submit">Submit</ConnectButton>
        </ConnectForm>
      </ConnectContainer>
    </ConnectSection>
  );
};

export default LetsConnect;
