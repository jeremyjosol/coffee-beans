import React from "react";
import PropTypes from "prop-types";
import imgCoffeeBeans from "../img/coffee-beans.jpg";
import imgCoffeeBag from "../img/coffee-bag.jpg";


function CoffeeBeanDetail(props) {
  const { bean, onClickingDelete } = props;

  let editIcon = (
    <svg 
      stroke="currentColor" 
      fill="currentColor" 
      stroke-width="0" viewBox="0 0 1024 1024" 
      height="1em" 
      width="1em" 
      xmlns="http://www.w3.org/2000/svg">
      <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z">
      </path>
    </svg>
  )

  let deleteIcon = (
    <svg 
      stroke="currentColor" 
      fill="currentColor" 
      stroke-width="0" 
      viewBox="0 0 1024 1024" 
      height="1em" 
      width="1em" 
      xmlns="http://www.w3.org/2000/svg">
      <path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z">
      </path>
    </svg>
  )

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
          <h2><strong>{bean.brand}</strong></h2>
          <h3>{bean.name} | <em>{bean.origin}</em></h3>
          <h5>{bean.roast}</h5>
          <p>{bean.description}</p>
          <h6>${bean.price} per lb | {bean.availability === 0 ? <span className='out-of-stock'>Out of Stock</span> : <strong className='available'>{bean.availability} available</strong>}</h6>
          <br />
          <button 
            className='btn btn-secondary btn-detail' 
            onClick={props.onClickingSell}>
            <span class='sell'>SELL</span>
          </button> 
          {' '}
          <button 
            className='btn btn-secondary btn-detail' 
            onClick={props.onClickingRestock}>
            <span class='restock'>RESTOCK</span>
          </button>
          <button 
            className='btn btn-secondary btn-detail' 
            onClick={props.onClickingEdit}>
            {editIcon} <span className='edit'>EDIT</span>
            </button> 
            {' '}
          <button 
            className='btn btn-outline-danger btn-delete' 
            onClick={() => onClickingDelete(bean.id)}>
            {deleteIcon} <span className='delete'>DELETE</span>
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
