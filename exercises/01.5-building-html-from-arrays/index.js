import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// only update the value of this array
const navlinkItems = [<li key={1}>Link to google.com</li>, <li key={2}>Link to facebook.com</li>, <li key={3}>Link to amazon.com</li>];

const content = <ul className="nav">{navlinkItems}</ul>;

ReactDOM.render(content, document.querySelector("#myDiv"));
