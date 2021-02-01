import React, { Component } from 'react';
import VideoSrc from './../../assets/videos/splashScreen.mp4';
import { Container, Video } from './styles'

export default class componentName extends Component {
  state = {
    animate: true,
    videoEnded : false
  }

  componentDidMount() {
    document.getElementById('splashScreenVideo').addEventListener("ended", this.splashEnded, false);
  }

  splashEnded = () => {
    this.setState({videoEnded : true, animate : false});
  }

  render() {
    return (
      <Container>
        {this.state.animate &&
          <Video id="splashScreenVideo" src={VideoSrc} muted autoPlay finished={this.state.videoEnded} />
        }

        {!this.state.animate &&
          <h1>Hello World!</h1>
        }
      </Container>
    );
  }
}
