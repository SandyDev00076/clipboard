import React from "react";

import ClipBoard from "./pages/Clipboard";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faCheckCircle, faTrash);

function App() {
  myLogs();
  return (
    <>
      <ClipBoard />
    </>
  );

  function myLogs() {
    console.log("Hello");
    console.log("My name is Sanjeet Tiwari");
    console.log("Thank you for using my website");
    console.log(
      "This application in NO WAY shares your clipboard data with anyone. Data is stored and retrieved from your browser's local storage."
    );
  }
}

export default App;
