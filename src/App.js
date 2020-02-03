import React from "react";

import ClipBoard from "./pages/Clipboard";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faCheckCircle, faTrash);

function App() {
  return (
    <>
      <ClipBoard />
    </>
  );
}

export default App;
