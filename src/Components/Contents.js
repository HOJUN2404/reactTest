import React, { Component } from "react";
import Fade from "react-reveal";

class Contents extends Component {
  render() {
    if (!this.props.data) return null;

    const detail2 = "images/" + this.props.data.detail2;
    const detail3 = "images/" + this.props.data.detail3;

    return (
      <section id="Contents">
        {/* <Fade duration={1000}> */}
            <div className="blank">
                {/* 공백 */}
            </div>
            <div className="allImgae">
                <img
                    className="sizeImage"
                    src = {detail2}
                    alt="실패"
                />
                <img
                    className="sizeImage"
                    src = {detail3}
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
