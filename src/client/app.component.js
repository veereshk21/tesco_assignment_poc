import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/header/header.component";
import  './app.css';
const App = ({ route }) => {
  return (
    <div className="container">
      <Header />
      <div className="content">    
      <div className="main-content"> 
        {renderRoutes(route.routes)}
     </div>
     </div>
    </div>
  );
};

export default {
  component: App,
};
