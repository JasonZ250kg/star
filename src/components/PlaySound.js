import React from "react";
import Sound from "react-sound";
import BackgroundMusic from "../assets/music/Positive_Outlook.mp3";

class PlaySound extends React.Component {
  render() {
    return (
      <Sound
        url={BackgroundMusic}
        // url="http://m9.music.126.net/20210903015408/c5f70eba61a188f7141400994920db69/ymusic/e257/dbec/c78b/04b10b899035cd34693bfff0b42732e4.mp3"
        volume={30}
        playStatus={
          this.props.Playing ? Sound.status.PLAYING : Sound.status.STOPPED
        }
        playFromPosition={300}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
        loop={true}
      />
    );
  }
}
export default PlaySound;
