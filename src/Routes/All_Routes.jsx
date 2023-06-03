import React from 'react'

import { Route, Routes } from "react-router-dom";
import Home from '../components/Home/Home';

import Token_inventry from '../components/Home/Token_inventry';
import Pair_inventry from '../components/Home/Pair_inventry';

function All_Routes() {
  return (
    <div>
      <Routes>
      {/* <Route path="/" element={<Home />}></Route> */}
      <Route path="/pair" element={<Pair_inventry />}></Route>
      <Route path="/" element={<Token_inventry />}></Route>

      </Routes>
    </div>
  )
}

export default All_Routes