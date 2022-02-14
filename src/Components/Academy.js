import React, { Component } from "react";
import Fade from "react-reveal";

class Academy extends Component {
  render() {
    if (!this.props.data) return null;

    const studioDetail1 = "images/awesome/" + this.props.data.studioDetail1;
    const studioDetail2 = "images/awesome/" + this.props.data.studioDetail2;
    const studio1 = "images/awesome/" + this.props.data.studio1;


    return (
      <section id="Academy">
        <Fade duration={1000}>
            <div className="allImgae">
                <img
                    className="sizeImage"
                    src = {studio1}
                />
            </div>

          {/* <div className="row">
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
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </Fade>
      </section>
    );
  }
}

export default Academy;
