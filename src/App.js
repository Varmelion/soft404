import React, { Component } from "react";
// import "typeface-roboto";
import Header from "./Components/Header/index";
import PostsList from "./Components/PostsList/index";
import Footer from "./Components/Footer/index";
import NewPost from "./Components/NewPost/NewPost";
import Login from "./Components/LogIn/LoginForm";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/" component={PostsList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/addPost" component={NewPost} />
        <Footer />
      </BrowserRouter>  
    );
  }
}

export default App;
