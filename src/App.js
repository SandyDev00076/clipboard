import React from "react";

import ClipBoard from "./pages/Clipboard";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; 

library.add(faCheckCircle);

function App() {
  return (
    <>
      <ClipBoard />
    </>
  );
}

export default App;
