import logo from './logo.svg';
import './App.css';
import React from 'react'
import myWonderfulImage from "./myImage.png"

function App() {
  return (
    <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">my project</h1>
          <br />
          <img src="/myImage.png" alt="myimage" />
           <br />
           <img src={myWonderfulImage} alt ='myImage' />
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
  );
}

export default App;
