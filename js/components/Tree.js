export default class Flake extends Component {
  
  // ...exisiting code

  componentDidMount() {
    this.animate();
  }

  animate = () => {
    // Animation duration
    let duration = 500;
    // Pull x and y out of Animated.ValueXY object in this.state.position
    const { x: { _value: x }, y: { _value: y } } = this.state.position;
    // Pull radius and density out of props
    const { radius, density } = this.props;

    this.angle += 0.02;
    let newX = x + Math.sin(this.angle) * 10;
    let newY = y + Math.cos(this.angle + density) + 10 + radius / 2;

    // Send flakes back from the top once they exit the screen
    if (x > width + radius * 2 || x < -(radius * 2) || y > height)
    {
      duration = 0;                   // no animation
      newX = Math.random() * width;   // random x
      newY = -10;                     // above the screen top

      // Send 2/3 of flakes back to the top
      if (Math.floor(Math.random() * 3) + 1 > 1) {
        newX = Math.random() * width;
        newY = -10;
      // Send the rest to either left or right
      } else {
        // If the flake is exiting from the right
        if (Math.sin(this.angle) > 0) {
          // Enter from the left
          newX = -5;
          newY = Math.random() * height;
        } else {
          // Enter from the right
          newX = width + 5;
          newY = Math.random() * height;
        }
      }
    }

    // Animate the movement
    Animated.timing(this.state.position, {
      duration,
      easing: Easing.linear,
      toValue: {
        x: newX,
        y: newY,
      }
    }).start(() => {
      // Animate again after current animation finished
      this.animate();
    });
  }

  // ...exisiting code
}