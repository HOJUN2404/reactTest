import React, { Component } from "react";
import { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import Modal2 from "./Modal";
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive'
import { DEVICE_SIZES } from "react-bootstrap/esm/createUtilityClasses";

Modal.setAppElement("#root");

const desktopMainImg = "/images/awesome/main.png"


class Main extends Component {


  constructor(props){
      super(props);
      
      console.log("여기 어디냐 ? ");

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

// window.onload = function(){
//   alert(window.screen.width + "아이고메야" + window.screen.height);

// }




const Header = () => {

    const isPhone = useMediaQuery({ maxWidth:600 })
    const isDesktop = useMediaQuery({ minWidth:601 })
    
    // if (!this.props.data) return null;

    function ModalPage() {
      const [modalVisible, setModalVisible] = useState(false)
      const openModal = () => {
        setModalVisible(true)
      }
      const closeModal = () => {
        setModalVisible(false)
      }
      return (
        <>
        </>
      )
    }

    // const main1 = "images/" + this.props.data.main1;

    return (
      
      <header id="home">
        {/* 여기 배경 부분 */}
        {isPhone &&
          // <img 
          //   src = {imgUrl}
          // />
          <div></div>
        }
        {isDesktop &&
          <img 
            src = {desktopMainImg}
            style={{width:"100%", height:"100%"}}
          />
        }

        {/* <img
                  src = {main1}
                  alt="실패"
                  style={{width:"100%", height:"100%"}}
                /> */}
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
              <a className="smoothscroll" href="#Academy">
                Awesome Studio
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#Contents">
                Awesome Academy
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Calendar
              </a>
            </li>

            {/* <li>
              <a className="smoothscroll" href="#Contents">
                More INFO
              </a>
            </li> */}

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
              <h1 className="responsive-headline">Awesome Live</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>라이브 방송 쇼호스트 <br></br> 이렇게 시작하세요<br></br><br></br></h3>
              {/* <h3>{description}.</h3> */}
                  <p>
                    <a href="https://open.kakao.com/o/s9mSFuQd" className="button1">
                    {/* https://open.kakao.com/o/s9mSFuQd */}
                      <i className="fa fa-comments"></i>   KaKao Talk
                    </a>
                  </p>

                  {/* <p>
                    <a className="button1">
                    https://open.kakao.com/o/s9mSFuQd
                      <i className="fa fa-comment"></i>   팝업 테스트
                    </a>
                  </p> */}
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

















// class Header extends Component {

//   render() {
//     const isPhone = useMediaQuery({ maxWidth:600 })
//     const isDesktop = useMediaQuery({ minWidth:601 })

//     if (!this.props.data) return null;

//     function ModalPage() {
//       const [modalVisible, setModalVisible] = useState(false)
//       const openModal = () => {
//         setModalVisible(true)
//       }
//       const closeModal = () => {
//         setModalVisible(false)
//       }
//       return (
//         <>
//         </>
//       )
//     }
//     const project = this.props.data.project;
//     const github = this.props.data.github;
//     const name = this.props.data.name;
//     const description = this.props.data.description;
//     const aaaa = this.props.data.aweLoggoPng;

//     const main1 = "images/" + this.props.data.main1;

//     return (
      
//       <header id="home">
//         {/* 여기 배경 부분 */}
//         {/* <ParticlesBg type="circle" bg={true} /> */}
//         <img
//                   src = {main1}
//                   alt="실패"
//                   style={{width:"100%", height:"100%"}}
//                 />
//         <nav id="nav-wrap">
//           <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
//             Show navigation
//           </a>
//           <a className="mobile-btn" href="#home" title="Hide navigation">
//             Hide navigation
//           </a>

//           <ul id="nav" className="nav">
//             <li className="current">
//               <a className="smoothscroll" href="#home">
//                 Home
//               </a>
//             </li>

//             <li>
//               <a className="smoothscroll" href="#Academy">
//                 Awesome Studio
//               </a>
//             </li>

//             <li>
//               <a className="smoothscroll" href="#Contents">
//                 Awesome Academy
//               </a>
//             </li>

//             <li>
//               <a className="smoothscroll" href="#resume">
//                 Calendar
//               </a>
//             </li>

//             {/* <li>
//               <a className="smoothscroll" href="#Contents">
//                 More INFO
//               </a>
//             </li> */}

//             <li>
//               <a className="smoothscroll" href="#contact">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </nav>

//         <div className="row banner">
//           <div className="banner-text">
//             <Fade bottom>
//               <h1 className="responsive-headline">Awesome Live</h1>
//             </Fade>
//             <Fade bottom duration={1200}>
//               <h3>라이브 방송 쇼호스트 <br></br> 이렇게 시작하세요<br></br><br></br></h3>
//               {/* <h3>{description}.</h3> */}
//                   <p>
//                     <a href="https://open.kakao.com/o/s9mSFuQd" className="button1">
//                     {/* https://open.kakao.com/o/s9mSFuQd */}
//                       <i className="fa fa-comments"></i>   KaKao Talk
//                     </a>
//                   </p>

//                   {/* <p>
//                     <a className="button1">
//                     https://open.kakao.com/o/s9mSFuQd
//                       <i className="fa fa-comment"></i>   팝업 테스트
//                     </a>
//                   </p> */}
//             </Fade>
//             <hr />
//             {/* <Fade bottom duration={2000}>
//               <ul className="social">
//                 <a href={project} className="button btn project-btn">
//                   <i className="fa fa-book"></i>Project
//                 </a>
//                 <a href={github} className="button btn github-btn">
//                   <i className="fa fa-github"></i>Github
//                 </a>
//               </ul>
//             </Fade> */}
//           </div>
//         </div>

//         <p className="scrolldown">
//           <a className="smoothscroll" href="#about">
//             <i className="icon-down-circle"></i>
//           </a>
//         </p>
//       </header>
//     );
//   }
// }

export default Header;
