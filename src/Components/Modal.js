import React, { useState } from 'react';
import { useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'
import Button from 'react-bootstrap/Button';



const ModalPage = (props) => {
  // 반응형 사이즈
  const isPhone = useMediaQuery({ maxWidth:600 })
  const isDesktop = useMediaQuery({ minWidth:601 })

  const imgUrl = "/images/Event.png"

  

  // document.body.style.overflow = "hidden";

  // useEffect(() => {
  //   document.body.style.cssText = `
  //     position: fixed; 
  //     top: -${window.scrollY}px;
  //     overflow-y: scroll;
  //     width: 100%;`;
  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = '';
  //     window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
  //   };
  // }, []);
  

  // 모달 Close Button 부분
  const [modal, setModal] = React.useState(true); // 모달창

  const modalOff = () => {
    document.body.style.overflow = "unset";
    setModal(false);
  };
  // 모달 Close Button 부분 끝
  
  return (
    <section id="modal">
    <div className='unScroll'>
    {/* 모바일 부분 */}
      {isPhone &&
        <div style={{height:"10px"}}>
         
        <Modal
          isOpen={modal}
          ariaHideApp={true}
          onRequestClose={modalOff}
          style={{
            overlay: {
              position: 'fixed',
              padding:(0,0,0),
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
              position: 'absolute',
              top: '17%',
              left: '15%',
              right: '15%',
              bottom: '10%',
              border: '1px solid #ccc',
              background: 'white',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '8px',
              outline: 'none',
              padding: '20px'
            }
          }}
        >
          
            <div style={{ height:"100%"}}>
                {/* <div style={{float:"right",position:"relative", marginRight:"15%"}}>
                <Button style={{ zIndex:10,display:"flex", position:"absolute",justifyContent:"space-between", float:"right"}} onClick={modalOff} className='hjBtn' variant="primary">X</Button>
                </div> */}
                <img style={{zIndex:1, position:"relative", width:"100%", height:"95%"}} alt="iPhone_01" src="images/Event.png" />
                
                <div style={{ display:"flex", justifyContent:"center" }}>
                    <button onClick={modalOff} className="closeBtn1" >
                      Close
                      {/* <a className='closeText'>Close</a> */}
                    </button>
                </div>
            </div>
        </Modal>
      </div>
      }


      {/* 데스크탑 부분 */}
      {isDesktop &&
        <div>
          <div>
        <Modal
          isOpen={modal}
          ariaHideApp={true}
          onRequestClose={modalOff}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
              position: 'absolute',
              top: '7%',
              left: '28%',
              right: '28%',
              bottom: '7%',
              border: '1px solid #ccc',
              background: 'white',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '8px',
              outline: 'none',
              padding: '20px'
            }
          }}
        >
            <div style={{ height:"100%" }}>
                <img style={{ width:"100%", height:"95%"}} alt="iPhone_01" src="images/Event.png" />
                <div style={{ display:"flex", justifyContent:"center" }}>
                    <button onClick={modalOff} className="closeBtn1" >
                      Close
                    </button>
                </div>
            </div>
        </Modal>
      </div>
        </div>
      }
      
    </div>
    </section>
  );
};
  
  export default ModalPage;