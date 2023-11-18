import React from "react";
import PropTypes from "prop-types";

const CoffeeBean = (props) => {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeBeanClicked(props.id)}>
        <h3>{props.name} | {props.origin}</h3> 
        <h5>{props.roast}</h5>
        <h5>${props.price} per lb.</h5>
        <h5>{props.availability} lbs available.</h5>
        <hr/>
      </div>
    </React.Fragment>
  );
}

CoffeeBean.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  price: PropTypes.number,
  availability: PropTypes.number,
  id: PropTypes.string, 
  whenCoffeeBeanClicked: PropTypes.func
};

export default CoffeeBean;