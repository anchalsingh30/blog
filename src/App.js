import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//components
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import Mainpage from './components/pages/mainPage';
import Navigationbar from './components/pages/navigationBar';
import Blog1 from './components/pages/blog1';
import Blog2 from './components/pages/blog2';
import Blog3 from './components/pages/blog3';
//import bali1 from './src/images/bali1.png';


import '../src/Assets/scss/default.scss';
import './Assets/css/default.min.css';

class App extends Component{
  render(){
    return(
      <Router>
        <div className="App">
          <Header />
            <Route exact path='/Mainpage' component={Mainpage} />
            <Route exact path='/Navigationbar' component={Navigationbar} />
            <Route exact path='/Blog1' component={Blog1} />
            <Route exact path='/Blog2' component={Blog2} />
            <Route exact path='/Blog3' component={Blog3} />
          <Footer />
        </div>
      </Router>
    );
  }
}


export default App;
