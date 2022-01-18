import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Components/modalTest.js'
import Modal from './Components/Modal'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <App />,
  document.getElementById('root')
  
);

// window.onload = function (){
//   alert("테스트");
//   <Modal/>
// }


{/* <script>
  document.addEventListener("DOMContentLoaded", () => {
    alert("DOM이 준비되었습니다!");
  });
</script> */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
