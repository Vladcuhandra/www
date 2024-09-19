import React from "react";
import * as ReactDOMClieant from "react-dom/client";

// ReactDOM. render (React, createElement (' input', {
//placeholder: "Help text",
//onClick: () => console. log("Clicked"),
//onMouseEnter: () => console. log("Mouse Over"),
// }), document.getElementfyId("app"))

const inputClick = () => console.log("Clicked"); //function inputClick, "Clicked" appears when событие onClick will be triggered.
const mouseOver = () => console.log("Mouse Over"); //function mouseOver, "Mouse Over" appears when событие onMouseEnter will be triggered.

const helpText = "Help text";

const elements = (
  <div className="name">
    <h1>{helpText}</h1>

    <input
      placeholder={helpText} // place where will be text
      onClick={inputClick} //событие onClick, потом вызываем функцию inputClick
      onMouseEnter={mouseOver} //событие onMouseEnter, потом вызываем функцию mouseOver
    />

    <p>{helpText === "Help text!" ? "Yes" : "No"}</p>
  </div>
);

const app = ReactDOMClieant.createRoot(document.getElementById("app"));

app.render(elements);
