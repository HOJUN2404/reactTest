import React, { Component } from "react";
import { useState } from "react";
import { Fade, Slide } from "react-reveal";
import { useMediaQuery } from 'react-responsive'

// const Contact = () => {

//     // if (!this.props.data) return null;
//     const isPhone = useMediaQuery({ maxWidth:600 });
//     const isDesktop = useMediaQuery({ minWidth:601 });

//     const aweLoggoJpg3 = "/images/aweLoggo3.jpg"

//     return (
//       <section id="contact">
//         <div className="row">
//           <Slide left duration={1000}>

//             {isPhone && 
//               <div className="columns2 flowleft501"
//               style={{height:"100%", width:"80%", marginLeft:"5%", marginRight:"5%"}}>
//                   <img
//                     src = {aweLoggoJpg3}
//                     alt="실패"
//                     style={{width:"100%", height:"100%"}}
//                   />
//               </div>
//             },
//             {isDesktop &&
//               <div className="columns2 flowleft501"
//               style={{height:"100%", width:"80%", marginLeft:"5%", marginRight:"5%"}}>
//                   <img
//                     src = {aweLoggoJpg3}
//                     alt="실패"
//                     style={{width:"100%", height:"100%"}}
//                   />
//               </div>
//             }
//           </Slide>              
//           <Slide right duration={1000}>
//             <aside className="five columns footer-widgets flowleft50">
//               <div className="widget widget_contact">
//                 <h3>엔에프팅 주식회사 NFTing Inc.</h3>
//                 <h4>Address and Info</h4>
//                 <p className="address">
//                   <span>대표이사 : 전병욱</span><br/>
//                   <span>주소 : 경기도 부천시 소향로 131, 7층</span><br/>
//                   <span>통신판매업신고 : 2021 경기부천 1948</span><br/>
//                   <span>EMAIL : admin@nfting.co.kr</span><br/>
//                   <span>사업자 번호 : 698 86 02279</span><br/>
//                 </p>
//               </div>
//             </aside>
//           </Slide>
//         </div>
//       </section>
//     );
// }

class Contact extends Component {
  render() {
    if (!this.props.data) return null;
    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    const aweLoggoJpg = "images/" + this.props.data.aweLoggoJpg;
    const aweLoggoJpg2 = "images/" + this.props.data.aweLoggoJpg2;
    const aweLoggoJpg3 = "images/" + this.props.data.aweLoggoJpg3;
    const aweLoggoJpg4 = "images/" + this.props.data.aweLoggoJpg4;
    const aweLoggoPng = "images/" + this.props.data.aweLoggoPng;
    const aweIconJpg = "images/" + this.props.data.aweIconJpg;
    const aweIconPng = "images/" + this.props.data.aweIconPng;

    return (
      <section id="contact">
        {/* <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade> */}
        <div className="row">
          <Slide left duration={1000}>
            {/* 카카오톡 상담 버튼 */}
            <div>

            </div>


            <div className="columns2 flowleft501"
            style={{height:"100%",marginTop:"3%", marginLeft:"5%", marginRight:"5%"}}>
                <img
                  src = {aweLoggoJpg4}
                  alt="실패"
                  style={{width:"100%"}}
                />
            </div>
          </Slide>              
              {/* <form action="" method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      name="contactName"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="contactMessage"
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form> */}



          <Slide right duration={1000}>
            <aside className="five columns footer-widgets flowleft50">
              <div className="widget widget_contact">
                <h3>엔에프팅 주식회사 NFTing Inc.</h3>
                <h4>Address and Info</h4>
                <p className="address">
                  <span>대표이사 : 전병욱</span><br/>
                  <span>주소 : 경기도 부천시 소향로 131, 7층</span><br/>
                  <span>통신판매업신고 : 2021 경기부천 1948</span><br/>
                  <span>EMAIL : admin@nfting.co.kr</span><br/>
                  <span>사업자 번호 : 698 86 02279</span><br/>
                </p>
              </div>

              {/* 
                  대표이사 : 전병욱  
                  주소 : 경기도 부천시 소향로 131, 7층  | 통신판매업신고 : 2021 경기부천 1948
                  E mail : admin@nfting.co.kr  | 사업자 번호 : 698 86 02279
                  Copyright  2021 NFTing, lnc. All rights reserved 
              */}


              {/* <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                      quis bibendum auctor, nisi elit consequat ipsum
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">3 Days Ago</a>
                    </b>
                  </li>
                </ul>
              </div> */}
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
