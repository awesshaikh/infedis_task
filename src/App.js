// import './App.css';
// import React from 'react';
// import Count from './Component/Count';

// import {Slide} from './Component/Slide';
import { Headarpart } from "./Component/ApiCall/Headarpart";
import { Bodypart } from "./Component/ApiCall/Bodypart";
import { Footerpart } from "./Component/ApiCall/Footerpart";

function App() {
  return (
    <div>
      <Headarpart />
      <Bodypart />
      <Footerpart />
    </div>
  );
}

export default App;
