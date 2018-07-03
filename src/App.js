import React, { Component } from 'react';
import Routes from './router';
import Blog from './containers/Blog/Blog';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  state={
    authentication : false
  }
  render() {
    let blog='';
    if(this.state.authentication){
      blog = <Blog />;
    }
    return (
      <BrowserRouter>
      <div className="App">
      <Routes />
     
      
       {blog}
      
      
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
