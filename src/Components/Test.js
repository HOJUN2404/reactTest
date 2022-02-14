import React, { Component } from "react";
import Fade from "react-reveal";

class Test extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const testImage = "images/" + this.props.data.testImage;
    const detail1 = "images/" + this.props.data.detail1;
    const studioDetail1 = "images/awesome/" + this.props.data.studioDetail1;
    const studioDetail2 = "images/awesome/" + this.props.data.studioDetail2;
    const studio2 = "images/awesome/" + this.props.data.studio2;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="Test">
        {/* <Fade duration={1000}> */}
            <div className="blank">
                {/* 공백 */}
            </div>
            <div className="allImgae">
                <img
                    className="sizeImage"
                    src = {studio2}
                />
            </div>
        {/* </Fade> */}
      </section>
    );
  }
}

export default Test;
