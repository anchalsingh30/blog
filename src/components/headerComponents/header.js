import React, { Component } from 'react';
//import bali1 from './src/images/bali1.png'; // Tell webpack this JS file uses this image

class Header extends Component{
  render(){
    return(
      
      <header>
          <div className="title">
              The Destinations!
          </div>
      </header>
    );
  }
}


export default Header;
