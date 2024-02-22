import React from 'react';
import styled from 'styled-components';
import hero from '../assets/hero.jpeg'
// Styled components
const HeroSection = styled.section`
  /*background-color: #f8f9fa;  Light gray background */
  color: white; /* Dark text color */
  text-align: center;
  padding: 100px 20px;
  display :flex;
  justify-content:center;
  align-items:center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3em;
  margin-bottom: 50px;
  color: #495057; /*#495057 Dark gray title color */
`;

const HeroDescription = styled.p`
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #495057; /* Dark gray text color */
`;

const HighlightedText = styled.span`
  color:#007bff ; /* #007bffBlue highlighted text color */
  font-weight: bold;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

const StatItem = styled.div`
  flex: 1;
`;

const StatText = styled.p`
  font-size: 3em;
  color:  #001b3a; /* Dark gray text color */
`;
const StatText1 = styled.p`
  font-size: 1.5em;
  color: black; /* Dark gray text color */
`;
const HeroSectionComponent = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>Incorporated in 2017, Bluetick Consultants</HeroTitle>
        <HeroDescription>
          A technology-driven firm that has already created a substantial impact in the Indian start-up ecosystem. We have years of previous experience in technology companies such as <HighlightedText>Amazon</HighlightedText>, <HighlightedText>Microsoft</HighlightedText>, <HighlightedText>Craftsvilla</HighlightedText>, etc. We have a strong focus on emerging technologies such as analytics tools and technologies (R, BI tools), backend languages and frameworks (like Python, R, Ruby on Rails, Java, .NET), frontend technologies (like React, Angular, jQuery), cloud developments (like AWS, Azure, Digital Ocean), and mobile technologies (like Android, iOS, Windows Phone OS).
        </HeroDescription>
        <StatsContainer>
          <StatItem>
            <StatText>5 +</StatText>
            <StatText1>Years of experience</StatText1>
          </StatItem>
          <StatItem>
            <StatText>100 +</StatText>
            <StatText1>Clients we handle</StatText1>
          </StatItem>
          <StatItem>
            <StatText>30 +</StatText>
            <StatText1>Projects we delivered</StatText1>
          </StatItem>
        </StatsContainer>
      </HeroContent>
    </HeroSection>
  );
}

export default HeroSectionComponent;
