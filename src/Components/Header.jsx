import React from 'react';
import styled from 'styled-components';

// Styled components
const HeaderContainer = styled.header`
  background-color: #3498db;
  color: #fff;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto Mono', monospace;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  h1 {
    margin: 0;
    font-size: 1.5em;
  }
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    transition: color 0.3s ease; /* Add a smooth color transition on hover */

    &:hover {
      color: #ffcc00; /* Change color on hover */
    }
  }

  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      align-items: flex-start;
    }

    li {
      margin: 0 0 10px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <h1>BLUETICK</h1>
      </Logo>
      <Nav>
        <ul>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#what-we-offer">What We Offer</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
