import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 40px 20px;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FooterSection = styled.div`
  flex: 1 1 300px;
  margin-bottom: 20px;

  h4 {
    font-size: 1.8em;
    margin-bottom: 15px;
    color: #3498db;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
    }

    a {
      color: #ecf0f1;
      text-decoration: none;
      font-size: 1.4em;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #3498db;
      }
    }
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  a {
    display: inline-block;
    color: #ecf0f1;
    font-size: 1.8em;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #3498db;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h4>Connect with Us</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Whitepapers</a></li>
            <li><a href="#">Case Studies</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h4>Products</h4>
          <ul>
            <li><a href="#">LinkIn Time</a></li>
            <li><a href="#">Pdf experience</a></li>
            <li><a href="#">NFT Image Prediction</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h4>Contact Us</h4>
          <ul>
            <li>Email: saiprasanth0028@exmp.com</li>
            <li>Phone: +91 86888956980</li>
          </ul>
        </FooterSection>
      </FooterContent>

      <SocialMediaIcons>
        <a href="https://www.facebook.com/bluetickconsultants/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://twitter.com/BluetickConsult" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com/bluetickconsultants/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/company/bluetick-consultants/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </SocialMediaIcons>
    </FooterContainer>
  );
};

export default Footer;
