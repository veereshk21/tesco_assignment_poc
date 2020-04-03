import React from "react";
import App from "./app.component";
import News from "./components/home/News";

export default [
  {
    ...App,
    routes: [
      {
        path: "/",
        component: News,
        exact: true
      }
    ]
  }
];
