import React from "react";
import CoffeeBean from "./CoffeeBean";
import PropTypes from "prop-types";

function CoffeeBeanList(props) {

  return (
    <React.Fragment>
      {props.coffeeBeanList.map((bean) =>
        <CoffeeBean 
          whenCoffeeBeanClicked = { props.onCoffeeBeanSelection }
          name={bean.name}
          origin={bean.origin}
          roast={bean.roast}
          price={bean.price}
          availability={bean.availability}
          id={bean.id}
          key={bean.id}/>
        )}
    </React.Fragment>
  );
}

CoffeeBeanList.propTypes = {
  coffeeBeanList: PropTypes.array, 
  onCoffeeBeanSelection: PropTypes.func
};

export default CoffeeBeanList;