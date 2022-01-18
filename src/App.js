import React, { Component } from "react";
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
import Modal from "./Components/Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      modalOpen: false
    };

    openModal = () => {
      this.setState({ modalOpen: true })
    }
    closeModal = () => {
      this.setState({ modalOpen: false })
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
  // test2

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <Test data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        {/* <Portfolio data={this.state.resumeData.portfolio} /> */}
        <Contents data={this.state.resumeData.main} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
        <React.Fragment>
            <button onClick={ this.openModal }> 모달팝업</button>
            <Modal open={ this.state.modalOpen } close={ this.closeModal } title="Create a chat room">
                // Modal.js <main> { this.props.children } </main>에 내용이 입력된다.
                리액트 클래스형 모달 팝업창입니다.
                쉽게 만들 수 있어요.
                같이 만들어봐요!
            </Modal>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
