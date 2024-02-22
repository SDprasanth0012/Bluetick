import Header from './Components/Header'
import HeroSectionComponent from './Components/HeroSectionComponent'
import WhatWeOfferComponent from './Components/WhatWeOfferComponent'
import BlogComponent from './Components/BlogComponent'
import LetsConnect from './Components/LetsConnect'
import Footer from './Components/Footer'
import styled from 'styled-components'
import hero from './assets/hero.jpeg'
const Container = styled.div`
background-image:url(${hero});
background-size:cover;
`
function App() {
  return (
    <Container >
        <Header />
        <HeroSectionComponent />
        <WhatWeOfferComponent />
        <BlogComponent />
        <LetsConnect />
        <Footer />
    </Container>
  )
}

export default App
