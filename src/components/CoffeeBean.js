import React from "react";
import PropTypes from "prop-types";

const CoffeeBean = (props) => {
  
  return (
    <React.Fragment>
      <div className='coffee-bean' onClick = {() => props.whenCoffeeBeanClicked(props.id)}>
        <h2 className='blue-bottle'><strong>{props.brand.toUpperCase()}</strong></h2>
        <h3 className='name'>{props.name} | <em>{props.origin}</em></h3> 
        <h5 className='roast'><strong>{props.roast.toUpperCase()}</strong></h5>
        <h5>${props.price} per lb</h5>
        <h5 className='availability' style={{ color: props.availability <= 0 ? 'red' : 'inherit' }}>{props.availability > 0 ? 'In Stock' : props.availability === 0 ? 'Out of Stock' : `${props.availability} lbs available`}</h5>
        <hr/>
      </div>
    </React.Fragment>
  );
}

CoffeeBean.propTypes = {
  brand: PropTypes.string,
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.number,
  availability: PropTypes.number,
  description: PropTypes.string,
  id: PropTypes.string, 
  whenCoffeeBeanClicked: PropTypes.func
};

export default CoffeeBean;