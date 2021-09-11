import React, { Component } from "react";
import headLogoLeft from "../assets/images/Beidou_logo.png";
// import headLogoRight from "../assets/images/headlogo.png";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={headLogoLeft} className="App-logo-left" alt="logo" />
        {/* <img src={headLogoRight} className="App-logo-right" alt="logo" /> */}
        <p className="title">Star Tracker</p>
      </header>
    );
  }
}
export default Header;
