import React, { Component } from 'react';
import{
    Link
  } from 'react-router-dom';
  


class Navigationbar extends Component{
  render(){
    return(
        <div className="container-fluid">
            <div>
                <h1>
                Navigationbar
                </h1>

                <p>
                here will write about the blog.
                </p>
            </div>
            <div className="navigation">
                <nav>
                    <ul>
                        <li className="first">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Navigationbar">Navigationbar</Link>
                        </li>
                        <li className="last">
                            <Link to="/">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
   
    );
  }
}


export default Navigationbar;
