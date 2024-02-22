import React from 'react';
import styled from 'styled-components';
import { AiOutlineBulb, AiOutlineLock, AiOutlineAntDesign, AiOutlineLineChart } from 'react-icons/ai';

// Styled components
const OfferSection = styled.section`
  background-color: rgba(0,0,0,0); /* Light gray background */
  padding: 80px 20px;
  h2 {
    text-align:center;
    font-size:40px;
    color: #001b3a;
    margin-bottom:30px;
  }
`;

const OfferContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  color:rgb(0,27,58);
`;

const OfferItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  border: 1px solid #e0e0e0; /* Light gray border */
  border-radius: 8px;
  padding: 20px;
  background-color: rgba(255,255,255,0.7); /* Full white background */
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Subtle shadow on hover */
  }
`;

const OfferIcon = styled.div`
  font-size: 3em;
  margin-bottom: 10px;
  color: #3498db; /* Icon color */
`;

const OfferText = styled.p`
  font-size: 1.2em;
  color: #444; /* Darker gray text color */
`;

const WhatWeOfferComponent = () => {
  return (
    <OfferSection>
      <h2 >What We Offer</h2>
      <OfferContent>
        <OfferItem>
          <OfferIcon><AiOutlineBulb /></OfferIcon>
          <OfferText>
            Explore AI Opportunities for Your Enterprise. Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation.
          </OfferText>
        </OfferItem>
        <OfferItem>
          <OfferIcon><AiOutlineLock /></OfferIcon>
          <OfferText>
            Design AI Trust Layer. Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational and customer data.
          </OfferText>
        </OfferItem>
        <OfferItem>
          <OfferIcon><AiOutlineAntDesign /></OfferIcon>
          <OfferText>
            Scalability-Focused Solutions. Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity.
          </OfferText>
        </OfferItem>
        <OfferItem>
          <OfferIcon><AiOutlineLineChart /></OfferIcon>
          <OfferText>
            End-to-end Workflow Automation. Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration.
          </OfferText>
        </OfferItem>
      </OfferContent>
    </OfferSection>
  );
}

export default WhatWeOfferComponent;
