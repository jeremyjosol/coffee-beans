// import React from "react";
// import PropTypes from "prop-types";

// function CoffeeBeanDetail(props){
//   const { bean, onClickingDelete } = props;
//     return (
//       <React.Fragment>
//         <div className='details'>
//         <h3>{bean.name} | {bean.origin}</h3>
//         <h5><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 32 32" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.587 7.569c-0.4 0.118-1.293 0.517-1.998 0.917-1.622 0.917-2.751 1.128-3.385 0.658-0.4-0.329-0.423-0.399-0.117-0.611 0.188-0.141 0.752-0.212 1.222-0.188 0.494 0.023 0.893-0.047 0.893-0.165 0.023-0.423-2.257-0.423-2.68 0-0.87 0.893-0.024 1.787 1.834 1.951 1.081 0.094 1.528-0.023 3.15-0.752 2.116-0.964 3.714-1.269 4.49-0.87 0.588 0.329 0.658 0.846 0.117 1.058-0.682 0.258-1.904 0.141-2.21-0.188-0.306-0.399-0.94-0.235-0.94 0.235 0 0.964 3.573 1.105 4.49 0.165 1.481-1.458-1.787-2.939-4.866-2.21zM6.029 9.121c-1.928 1.034-0.070 2.445 4.137 3.15 5.336 0.893 13.729 0.235 15.985-1.246 0.729-0.47 0.776-1.434 0.118-1.787-0.4-0.212-0.47-0.188-0.47 0.212 0 1.293-3.738 2.139-9.544 2.139-6.394 0-10.061-0.917-9.591-2.421 0.141-0.47 0.141-0.47-0.635-0.047zM6.039 12.694c0.094 0.353 0.306 1.128 0.47 1.693 0.306 1.011 0.282 1.034-0.517 1.857-1.81 1.881-1.646 4.466 0.423 5.995 0.705 0.517 2.633 0.635 3.080 0.188 0.188-0.188 0.117-0.259-0.259-0.259-0.611 0-2.045-1.223-2.539-2.139-0.47-0.94-0.423-2.398 0.117-3.056l0.447-0.564 0.235 0.588c0.141 0.329 0.846 1.505 1.599 2.586 0.752 1.105 1.528 2.469 1.74 3.056 0.353 0.917 0.588 1.152 1.763 1.763 1.152 0.564 1.716 0.705 3.503 0.776 3.479 0.165 5.994-0.87 6.371-2.562 0.094-0.4 0.823-1.693 1.622-2.868 1.504-2.233 2.186-3.597 2.821-5.783 0.564-1.928 0.541-1.951-0.87-1.316-2.116 0.964-5.501 1.363-10.485 1.223-5.101-0.141-6.982-0.494-9.497-1.763-0.094-0.047-0.117 0.211-0.023 0.588z"></path></svg> {bean.roast}</h5>
//         <h5>${bean.price} per lb</h5>
//         <h5>{bean.availability === 0 ? 'Out of Stock' : `${bean.availability} lbs available.`}</h5>
//         <br />
//         <button className='btn btn-secondary btn-sm' onClick={ props.onClickingSell }>Sell</button>
//         <button className='btn btn-secondary btn-sm' onClick={ props.onClickingRestock }>Restock</button>
//         <button className='btn btn-secondary btn-sm' onClick={ props.onClickingEdit }>Edit</button> 
//         <br />
//         <br />
//         <button className='btn btn-danger btn-sm' onClick={()=> onClickingDelete(bean.id) }>Delete</button>
//         <br />
//         <br />
//         </div>
//         </React.Fragment>
//     );
// }

// CoffeeBeanDetail.propTypes = {
//     bean: PropTypes.object,
//     onClickingDelete: PropTypes.func,
//     onClickingEdit: PropTypes.func,
//     onClickingSell: PropTypes.func,
// };  

// export default CoffeeBeanDetail;

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
          <button className='btn btn-secondary btn-sm' onClick={props.onClickingSell}>Sell</button>
          <button className='btn btn-secondary btn-sm' onClick={props.onClickingRestock}>Restock</button>
          <button className='btn btn-secondary btn-sm' onClick={props.onClickingEdit}>Edit</button>
          <br />
          <br />
          <button className='btn btn-danger btn-sm' onClick={() => onClickingDelete(bean.id)}>Delete</button>
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
