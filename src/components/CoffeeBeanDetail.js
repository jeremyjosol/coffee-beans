import React from "react";
import PropTypes from "prop-types";

function CoffeeBeanDetail(props){
  const { bean, onClickingDelete } = props;
    return (
      <React.Fragment>
        <h1>Coffee Bean Details</h1>
        <h3>{bean.name} | {bean.origin}</h3>
        <h5>{bean.roast}</h5>
        <h5>${bean.price} per lb.</h5>
        <h5>{bean.availability === 0 ? 'Out of Stock' : `${bean.availability} lbs available.`}</h5>
        <br />
        <button className='btn btn-secondary btn-sm' onClick={ props.onClickingSell }>Sell</button>
        <button className='btn btn-secondary btn-sm' onClick={ props.onClickingRestock }>Restock</button>
        <button className='btn btn-secondary btn-sm' onClick={ props.onClickingEdit }>Edit</button> 
        <br />
        <br />
        <button className='btn btn-danger btn-sm' onClick={()=> onClickingDelete(bean.id) }>Delete</button>
        <br />
        <br />
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