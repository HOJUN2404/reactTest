import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Components/modalTest.js'
import Modal from './Components/Modal'
import ReportWebVitals from './reportWebVitals';
import ReactDom from 'react-dom';


ReactDOM.render(
  <App />,
  document.getElementById('root')
  
);



// window.onload = function (){
//   // console.log(document.getElementById('boot'))
//   // console.log(document.getElementById('root'))
//   ReactDOM.render(
//   <App />,
//   document.getElementById('Boot')
//   );
// }


{/* <script>
  document.addEventListener("DOMContentLoaded", () => {
    alert("DOM이 준비되었습니다!");
  });
</script> */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReportWebVitals();
