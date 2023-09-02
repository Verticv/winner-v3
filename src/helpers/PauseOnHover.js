import React from 'react';
import { WithStore } from 'pure-react-carousel';

class PauseOnHover extends React.Component {
  constructor(props) {
    super(props);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter() {
    this.props.carouselStore.setStoreState({ isPlaying: false });
  }

  onMouseLeave() {
    this.props.carouselStore.setStoreState({ isPlaying: true });
  }

  render() {
    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        {this.props.children}
      </div>
    )
  }
}

export default WithStore(PauseOnHover);