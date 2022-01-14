import React, { Component } from "react";
import Fade from "react-reveal";
import YouTube from 'react-youtube';

class About extends Component {
  render() {

    if (!this.props.data) return null;
        // 유튜브 부분
        const opts = {
          height: '390',
          width: '640',
          playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
        };
        
    
    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <div>
          <h3>라이브트리 방송예고</h3>
        </div>
          <div className="divtest">
            <iframe src="https://view.shoppinglive.naver.com/replays/361129" />
            {/* <YouTube videoId="IlyF79osFPAu8vs_" opts={opts} onReady={this._onReady} />; */}
          </div>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="https://open.kakao.com/o/s9mSFuQd" className="button">
                    {/* https://open.kakao.com/o/s9mSFuQd */}
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default About;
