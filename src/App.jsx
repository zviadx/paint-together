// eslint-disable-next-line

import React from 'react';
import "./style/app.scss"
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import BasicComponent from "./component/BasicComponent";
// import Home from "./component/Home";
// import canvasState from "./store/canvasState";



const App = () => {


  return (
      <BrowserRouter>
          <Routes>
              <Route path='/:id'
                      element={<BasicComponent />}
              />
              <Route path="*" element={<Navigate to={`f${(+new Date).toString(16)}`} /> } />
          </Routes>
      </BrowserRouter>


  );
};

export default App;