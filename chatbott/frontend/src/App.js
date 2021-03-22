﻿import React from "react";
import "./App.css";

import styled from 'styled-components'
import LeftsideBar from "./components/sidebar/LeftsideBar";
import Chatbot from "./components/Chatbot";
import RightsideBar from "./components/sidebar/RightsideBar";



//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
    return (
      <div className="App">
          <Container>
          
     
              <LeftsideBar/>
              <Chatbot/>
              <RightsideBar/>  
          
          </Container>
      
     
    </div>
    );
}

export default App;




const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns:  minmax(0,400px) minmax(600px,auto) minmax(0,400px);
  `