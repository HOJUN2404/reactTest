import React, { Component } from "react";
import { useState } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Contents from "./Components/Contents";
import Portfolio from "./Components/Portfolio";
import Test from "./Components/Test";
import Modal3 from "./Components/Modal";
import Media from "./Components/Media";
import { BrowserRouter,Route, Link,Switch } from "react-router-dom";
import Modal from 'react-modal';


class Main extends Component {
  constructor(props){
      super(props);

      this.state = {
          isOpenPopup: true,
      }

      this.openPopup = this.openPopup.bind(this);
      this.closePopup = this.closePopup.bind(this);
  }

  openPopup(){
      this.setState({
          isOpen: true,
      })
  }

  closePopup(){
      this.setState({
          isOpen: false,
      })
  }

}

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      modalOpen: false,
      isOpen:false
    };
    
    function openModal() {
      this.setState({ modalOpen: true })
    }

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {

    return (
      <div className="App">
        <Modal3 />
        <Header data={this.state.resumeData.main} />
        {/* <Media /> */}
        <Test data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        {/* <Portfolio data={this.state.resumeData.portfolio} /> */}
        <Contents data={this.state.resumeData.main} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}


export default App;
