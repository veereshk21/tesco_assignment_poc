import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/header/header.component";
import { fetchCurrentUser } from "./actions/index";
import  './app.css';
const App = ({ route }) => {
  return (
    <div className="container">
      <Header />
      <div className="main-content"> 
        {renderRoutes(route.routes)}
      </div>
     
    </div>
  );
};

export default {
  component: App,
  loadData: ({dispatch}) => dispatch(fetchCurrentUser())
};
