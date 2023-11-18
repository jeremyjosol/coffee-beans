import React from 'react';
import CoffeeBean from './CoffeeBean';
import PropTypes from 'prop-types';

function CoffeeBeanList(props) {

  if (props.coffeeBeanList.length === 0) {
    return <h3>No available coffee beans.</h3>
  }

  return (
    <React.Fragment>
      {props.coffeeBeanList.map((bean) =>
        <CoffeeBean 
          whenCoffeeBeanClicked = { props.onCoffeeBeanSelection }
          brand={bean.brand}
          name={bean.name}
          origin={bean.origin}
          roast={bean.roast}
          price={Number(bean.price)}
          availability={Number(bean.availability)}
          description={bean.description}
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