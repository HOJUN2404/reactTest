import React, { Component } from "react";
import Fade from "react-reveal";

class Contents extends Component {
  render() {
    if (!this.props.data) return null;

    const detail2 = "images/" + this.props.data.detail2;
    const detail3 = "images/" + this.props.data.detail3;
    const academyDetail1 = "images/awesome/" + this.props.data.academyDetail1;
    const academyDetail2 = "images/awesome/" + this.props.data.academyDetail2;

    return (
      <section id="Contents">
        {/* <Fade duration={1000}> */}
            <div className="blank">
                {/* 공백 */}
            </div>
            <div className="allImgae">
                <img
                    className="sizeImage"
                    src = {academyDetail1}
                    alt="실패"
                />
                <img
                    className="sizeImage"
                    src = {academyDetail2}
                    alt="실패"
                />
            </div>
            <div className="blank">
                {/* 공백 */}
            </div>
        {/* </Fade> */}
      </section>
    );
  }
}

export default Contents;
