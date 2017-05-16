import React from 'react' // import react

class Product extends React.Component {

  render() {

    return (
      <div>
      <p>{this.props.name}</p>
      <p>{this.props.producer}</p>
      <p>{this.props.hasWatermark}</p>
      <p>{this.props.color}</p>
      <p>{this.props.number}</p>
      <p></p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  //weight: React.PropTypes.number.isRequired,

  weight: function weightValid(props, propName) {
    var weight = props[propName];

    if (weight === undefined) {
      return new Error("required")
    } if (isNaN(weight)) {
      return new Error("it doesn't exist")
    } if (weight < 80 || weight > 300) {
      return new Error("not valid")
    }
  }
};

export default Product;
