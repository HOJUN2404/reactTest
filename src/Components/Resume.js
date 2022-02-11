import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div>
              <h1 className="h1center">
                <p>AwesomeLive 방송일정</p>
              </h1>
            </div>

            <div className="three columns header-col">
              
              <h1>
                <span>Monday</span>
              </h1>

              <div className="boxdetail">
                {/* 방송제목 */}
                <h4>
                  <sapn>아키클래식</sapn>
                </h4>
                {/* 방송날짜 */}
                <h6>
                  <span>2022. 01. 15</span>
                  <br/>
                  <span>PM 17:00 - 18:00</span>
                </h6>
                {/* 방송 설명 */}
                {/* <p>
                  아키클래식 방송 
                </p> */}
              </div>
              
              <div className="boxdetail">
                {/* 방송제목 */}
                <h4>
                  <sapn>아키클래식</sapn>
                </h4>
                {/* 방송날짜 */}
                <h6>
                  <span>2022. 01. 15</span>
                  <br/>
                  <span>17:00 - 18:00</span>
                </h6>
                {/* 방송 설명 */}
                {/* <p>
                  아키클래식 방송 
                </p> */}
              </div>

              <div className="boxdetail">
                {/* 방송제목 */}
                <h4>
                  <sapn>아키클래식</sapn>
                </h4>
                {/* 방송날짜 */}
                <h6>
                  <span>17:00 - 18:00</span>
                </h6>
                {/* 방송 설명 */}
                {/* <p>
                  아키클래식 방송 
                </p> */}
              </div>
            </div>

            <div className="three columns header-col">
              <h1>
                <span>Tuesday</span>
              </h1>

              <div className="boxdetail">
                {/* 방송제목 */}
                <h4>
                  <sapn>아키클래식</sapn>
                </h4>
                {/* 방송날짜 */}
                <h6>
                  <span>2022. 01. 15</span>
                </h6>
                {/* 방송 설명 */}
                {/* <p>
                  아키클래식 방송 
                </p> */}
              </div>

              <div className="boxdetail">
                {/* 방송제목 */}
                <h4>
                  <sapn>아키클래식</sapn>
                </h4>
                {/* 방송날짜 */}
                <h6>
                  <span>2022. 01. 15</span>
                </h6>
                {/* 방송 설명 */}
                {/* <p>
                  아키클래식 방송 
                </p> */}
              </div>
            </div>

            <div className="three columns header-col">
              <h1>
                <span>Wendsday</span>
              </h1>

              <div className="boxdetail">
                {/* 방송제목 */}
                <h4>
                  <sapn>아키클래식</sapn>
                </h4>
                {/* 방송날짜 */}
                <h6>
                  <span>2022. 01. 15</span>
                </h6>
                {/* 방송 설명 */}
                {/* <p>
                  아키클래식 방송 
                </p> */}
              </div>

              <div className="boxdetail">
                {/* 방송제목 */}
                <h4>
                  <sapn>아키클래식</sapn>
                </h4>
                {/* 방송날짜 */}
                <h6>
                  <span>2022. 01. 15</span>
                </h6>
                {/* 방송 설명 */}
                {/* <p>
                  아키클래식 방송 
                </p> */}
              </div>

              <div className="boxdetail">
                {/* 방송제목 */}
                <h4>
                  <sapn>아키클래식</sapn>
                </h4>
                {/* 방송날짜 */}
                <h6>
                  <span>2022. 01. 15</span>
                </h6>
                {/* 방송 설명 */}
                {/* <p>
                  아키클래식 방송 
                </p> */}
              </div>

              <div className="boxdetail">
                {/* 방송제목 */}
                <h4>
                  <sapn>아키클래식</sapn>
                </h4>
                {/* 방송날짜 */}
                <h6>
                  <span>2022. 01. 15</span>
                </h6>
                {/* 방송 설명 */}
                {/* <p>
                  아키클래식 방송 
                </p> */}
              </div>
            </div>

            <div className="three columns header-col">
              <h1>
                <span>Thursday</span>
              </h1>

              <div className="boxdetail">
                {/* 방송제목 */}
                <h4>
                  <sapn>아키클래식</sapn>
                </h4>
                {/* 방송날짜 */}
                <h6>
                  <span>2022. 01. 15</span>
                </h6>
                {/* 방송 설명 */}
                {/* <p>
                  아키클래식 방송 
                </p> */}
              </div>

              <div className="boxdetail">
                {/* 방송제목 */}
                <h4>
                  <sapn>아키클래식</sapn>
                </h4>
                {/* 방송날짜 */}
                <h6>
                  <span>2022. 01. 15</span>
                </h6>
                {/* 방송 설명 */}
                {/* <p>
                  아키클래식 방송 
                </p> */}
              </div>
            </div>

            <div className="three columns header-col">
              <h1>
                <span>Friday</span>
              </h1>

              <div className="boxdetail">
                {/* 방송제목 */}
                <h4>
                  <sapn>아키클래식</sapn>
                </h4>
                {/* 방송날짜 */}
                <h6>
                  <span>2022. 01. 15</span>
                </h6>
                {/* 방송 설명 */}
                {/* <p>
                  아키클래식 방송 
                </p> */}
              </div>

              <div className="boxdetail">
                {/* 방송제목 */}
                <h4>
                  <sapn>아키클래식</sapn>
                </h4>
                {/* 방송날짜 */}
                <h6>
                  <span>2022. 01. 15</span>
                </h6>
                {/* 방송 설명 */}
                {/* <p>
                  아키클래식 방송 
                </p> */}
              </div>

              <div className="boxdetail">
                {/* 방송제목 */}
                <h4>
                  <sapn>아키클래식</sapn>
                </h4>
                {/* 방송날짜 */}
                <h6>
                  <span>2022. 01. 15</span>
                </h6>
                {/* 방송 설명 */}
                {/* <p>
                  아키클래식 방송 
                </p> */}
              </div>


            </div>
            </div>
        </Slide>
            {/* <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <div>
                    <h3>아키클래식</h3>
                    <p className="info">
                      {education.degree} <span>&bull;</span>
                      <em className="date">2022. 01. 15</em>
                    </p>
                    <p>아키클래식의 의류 방송이 진행됩니다.</p>
                  </div>
                </div>
              </div>
            </div> */}
          



        {/* <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide> */}
      </section>
    );
  }
}

export default Resume;
