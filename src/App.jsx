import React from "react";
import { Camera, Footer, Hero } from "./page";
import { Nav, } from "./components";
import { styled } from 'styled-components'
import Gallery from "./page/Gallery";
import Contact from "./page/Contact";


function App() {

  return (
  <React.Fragment>
      <Wrapper>
        <div className="nav">
          <Nav />
        </div>
        <div className="comp">
          <Hero />
          <Camera />
          <Gallery />
          <Contact />
          <Footer />
        </div>
      </Wrapper>
      </React.Fragment> 
  );
}

const Wrapper = styled.div`

.comp{
  overflow: hidden;
}
.nav {
  position: sticky;
  top: 0; 
  z-index: 1000;
}

`

export default App;


