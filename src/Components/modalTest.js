import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class modalTest extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="modalTest">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#Test">
                INFO
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">Live Tree</h1>
              {/* <h1 className="responsive-headline">{name}</h1> */}
            </Fade>
            <Fade bottom duration={1200}>
              <h3>라이브 방송 쇼호스트 <br></br> 이렇게 시작하세요 !<br></br><br></br></h3>
              {/* <h3>{description}.</h3> */}
                  <p>
                    <a href="https://open.kakao.com/o/s9mSFuQd" className="button1">
                    {/* https://open.kakao.com/o/s9mSFuQd */}
                      <i className="fa fa-download"></i>   KaKao Talk
                    </a>
                  </p>
            </Fade>
            <hr />
            {/* <Fade bottom duration={2000}>
              <ul className="social">
                <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a>
                <a href={github} className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade> */}
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default modalTest;
