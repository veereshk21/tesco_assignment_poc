import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from 'serialize-javascript';
import Routes from "../client/routes";

export default (req, store, context) => {
  const content = ReactDOMServer.renderToString(
    // Needs mandatory parameter context so passed empty object
    <Provider store={store}>
      <StaticRouter context={context} location={req.path}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  const template = `
          <html>
              <head>
              <link
                  rel="stylesheet"
                  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css?family=Verdana Geneva:400,300,700"
                  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                  crossorigin="anonymous"
                />
                <link rel="stylesheet" href="main.css"></link>
              </head>
              <body>
                  <div id="root">
                      ${content}
                  </div>
                  <script>
                    window.INITIAL_STATE = ${serialize(store.getState())}
                  </script>
                  <script src="bundle.js"></script>
              </body>
          </html>
      `;
  return template;
};
