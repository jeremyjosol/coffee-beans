import React from "react";
import PropTypes from "prop-types";
import imgCoffeeBeans from "../img/coffee-beans.jpg";
import imgCoffeeBag from "../img/coffee-bag.jpg";


function CoffeeBeanDetail(props) {
  const { bean, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div className='details-container'>
        <div className='image-container'>
          <img src={imgCoffeeBeans} alt='Coffee Beans' />
          <br />
          <br />
          <img src={imgCoffeeBag} alt='Coffee Bag' />
        </div>
        <div className='details'>
          <h2>{bean.brand}</h2>
          <h3>{bean.name} | <em>{bean.origin}</em></h3>
          <h5>{bean.roast}</h5>
          <p>{bean.description}</p>
          <h6>${bean.price} per lb | {bean.availability === 0 ? 'Out of Stock' : <strong>{bean.availability}</strong>} lbs available</h6>
          <br />
          <button 
            className='btn btn-secondary btn-detail' 
            onClick={props.onClickingSell}>
            SELL
          </button> 
          {' '}
          <button 
            className='btn btn-secondary btn-detail' 
            onClick={props.onClickingRestock}>
            RESTOCK
          </button>
          <button 
            className='btn btn-secondary btn-detail' 
            onClick={props.onClickingEdit}>
            EDIT
            </button> 
            {' '}
          <button 
            className='btn btn-outline-danger btn-delete' 
            onClick={() => onClickingDelete(bean.id)}>
            DELETE
          </button>
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
