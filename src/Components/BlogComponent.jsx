import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.jpeg'
import image4 from '../assets/image4.jpeg'
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const BlogSection = styled.section`
  margin: 40px 0;
`;

const BlogPost = styled.div`
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 27, 58, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BlogHeader = styled.div`
  padding: 20px;
  cursor: pointer;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BlogTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BlogTitle = styled.h2`
  font-size: 1.5em;
  color: #001b3a;
  margin-left: 20px; /* Add margin to separate title from the image */
`;

const ClosedBlogImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const BlogImage = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const BlogContent = styled.div`
  padding: 20px;
  font-size:1.3em;
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const BlogDate = styled.p`
  font-size: 0.9em;
  color: rbga(0,27,58,0.6);
`;

const BlogText = styled.p`
  font-size: 1.1em;
  color: rbga(0,27,58,0.8);
`;

const RedirectLink = styled.a`
  color: #001b3a;
  text-decoration: underline;
  display: block;
  margin-top: 15px;
`;

const BlogComponent = () => {
  const [openBlog, setOpenBlog] = useState(null);
  const blogs =[
    {
      id: 1,
      title: "Speaking SQL: Turning Natural Language into Database Dialogues",
      date: "Published on February 21, 2024",
      image: image1,
      content: "Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data management, SQL databases have long stood as the backbone, housing vast quantities of invaluable information. As enterprises increasingly lean on business intelligence (BI) tools to extract insights from these data repositories, the quest for more intuitive and accessible querying methods gains momentum. The emerging solution? Leveraging Large Language Models (LLMs) to interact with SQL databases using natural language.",
      link: "https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html",
    },
    {
      id: 2,
      title: "Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback",
      date: "Published on February 22, 2024",
      image: image2,
      content: "Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the success of ChatGPT, marking a significant advancement in AI's ability to understand and engage in human language. This method, vital for fine-tuning language models, addresses the complexities and nuances of communication, ensuring AI interactions are natural and intuitive. It navigates the challenges of training AI with diverse internet data, carefully guiding models to avoid replicating inappropriate language or tones.",
      link: "https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-from-human-feedback.html",
    },
    {
      id: 3,
      title: "The Fine Art of Tuning: Parameter-Efficient Fine-Tuning",
      date: "Published on February 23, 2024",
      image: image3,
      content: "Welcome to our exploration of the fascinating world of large language models! As many of you are aware, the scale of these models has skyrocketed recently. Take, for instance, GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning requires adjusting countless parameters, which is time-consuming, and the GPU demands are nothing short of immense.",
      link: "https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html",
    },
    {
      id: 4,
      title: "PrivAIcy Matters: Balancing Privacy, Price, and Performance",
      date: "Published on February 24, 2024",
      image: image4,
      content: "Welcome to the enthralling universe of Generative AI! Recognized as a realm of artificial intelligence algorithms with the magic to conjure fresh content based on available data, this technology has unassumingly become the new frontier for a plethora of industries, including tech, banking, and media. And, no surprises here, the technological world has openly embraced it in myriad innovative ways.",
      link: "https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html",
    },
  ];
  

  const handleBlogToggle = (id) => {
    setOpenBlog(openBlog === id ? null : id);
  };

  return (
    <BlogSection>
      {blogs.map(blog => (
        <BlogPost key={blog.id}>
          <BlogHeader onClick={() => handleBlogToggle(blog.id)}>
            {openBlog === blog.id ? (
              <BlogImage src={blog.image} alt={`Blog Cover for ${blog.title}`} isOpen={openBlog === blog.id} />
            ) : (
              <BlogTitleContainer>
                <ClosedBlogImage src={blog.image} alt={`Closed Blog Image for ${blog.title}`} />
                <BlogTitle>{blog.title}</BlogTitle>
              </BlogTitleContainer>
            )}
          </BlogHeader>
          <BlogContent isOpen={openBlog === blog.id}>
            <BlogDate>{blog.date}</BlogDate>
            <BlogText>{blog.content}</BlogText>
            <RedirectLink href={blog.link}>
              Read more
            </RedirectLink>
          </BlogContent>
        </BlogPost>
      ))}
    </BlogSection>
  );
}

export default BlogComponent;
