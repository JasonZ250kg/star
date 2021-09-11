import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PlaySound from "./PlaySound";
import musicOn from "../assets/images/music_note_black_36dp.svg";
import musicOff from "../assets/images/music_off_black_36dp.svg";
import News from "./News";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  // console.log(isPlaying);
  return (
    <div className="App">
      <button className="music-button" onClick={() => setIsPlaying(!isPlaying)}>
        <img src={!isPlaying ? musicOn : musicOff} alt="logo" />
        {/* {!isPlaying ? "Play" : "Stop"} */}
      </button>
      <Header />
      <News />
      <Footer />
      <Main />
      <PlaySound Playing={isPlaying} />
    </div>
  );
}

export default App;
