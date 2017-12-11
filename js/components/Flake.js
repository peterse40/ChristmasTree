import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  Easing
} from 'react-native';

// Detect screen size
const { width, height } = Dimensions.get('window');

export default class Flake extends Component {

  // Angle of falling flakes
  angle = 0

  componentWillMount() {
    // Pull x and y out of props
    const { x, y } = this.props;
    // Initialize Animated.ValueXY with passed x and y coordinates for animation
    this.setState({
      position: new Animated.ValueXY({ x, y })
    });
  }

  getStyle = ({ radius, x, y } = this.props) => ({
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: radius,
    width: radius * 2,
    height: radius * 2,
  })

  render() {
    return <Animated.View style={[this.getStyle(), this.state.position.getLayout()]} />;
  }

}