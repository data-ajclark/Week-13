import { Route, Routes, } from "react-router-dom";
import Travel from './Travel';
import Login from "./Login";
import React from "react" 



function App() {
     return (
      <div>
        <Routes>
          <Route path="LoginForm" element={<Login />} />
          <Route path="Travel" element={<Travel />} />
        </Routes>
      </div>
    );
  }

  
export default App;
