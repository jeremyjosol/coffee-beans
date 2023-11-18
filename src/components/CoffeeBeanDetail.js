import React from "react";
import PropTypes from "prop-types";
import imgCoffeeBeans from "../img/coffee-beans.jpg";


function CoffeeBeanDetail(props) {
  const { bean, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div className='details-container'>
        <div className='image-container'>
          <img src={imgCoffeeBeans} alt='Coffee Beans' />
        </div>
        <div className='details'>
          <h3>{bean.name} | {bean.origin}</h3>
          <h5><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"></svg> {bean.roast}</h5>
          <h5>${bean.price} per lb</h5>
          <h5>{bean.availability === 0 ? 'Out of Stock' : `${bean.availability} lbs available.`}</h5>
          <br />
          <button className='btn btn-secondary btn-detail' onClick={props.onClickingSell}>Sell</button>
          <br />
          <button className='btn btn-secondary btn-detail' onClick={props.onClickingRestock}>Restock</button>
          <br />
          <button className='btn btn-secondary btn-detail' onClick={props.onClickingEdit}>Edit</button>
          <br />
          <br />
          <button className='btn btn-danger btn-delete' onClick={() => onClickingDelete(bean.id)}>Delete</button>
          <br />
          <br />
        </div>
      </div>
    </React.Fragment>
  );
}

CoffeeBeanDetail.propTypes = {
  bean: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSell: PropTypes.func,
};

export default CoffeeBeanDetail;
