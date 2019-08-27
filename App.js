import React, { Component } from 'react';
import VideoPlayer from 'react-video-markers';

import './App.css';

 class App extends Component {
    state = {
      isPlaying: false,
      volume: 0.7,
      height:''
    };
    
    handlePlay = () => {
      this.setState({isPlaying: true});
    };
    
    handlePause = () => {
      this.setState({isPlaying: false});
    };
    
    handleVolume = value => {
      this.setState({volume: value});
    };
    
    render () {
      const {isPlaying, volume} = this.state;
  
      return <VideoPlayer
        url="https://static.videezy.com/system/resources/previews/000/004/931/original/Backyard_4K_Living_Background.mp4"
        isPlaying={isPlaying}
        volume={volume}
        height={this.height}
        onPlay={this.handlePlay}
        onPause={this.handlePause}
        onVolume={this.handleVolume}
       />
    }
  }
  export default App


