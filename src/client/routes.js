import React from "react";
import App from "./app.component";
import News from "./components/News/News.component";
import NotFound from "./components/notFound/notFound.component";

export default [
  {
    ...App,
    routes: [
      {
        ...News,
        path: "/",
       
      },
      {
          ...NotFound
      }
    ]
  }
];
