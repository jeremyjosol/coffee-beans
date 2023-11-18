import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <h1>NEW COFFEE BEAN</h1>
      <form onSubmit={props.formSubmissionHandler}>
      <div className="form-control">
          <input type='text' name='brand' placeholder='BRAND' style={{ width: '250px' }} required />
        </div>
        <div className="form-control">
          <input type='text' name='name' placeholder='NAME' style={{ width: '250px' }} required />
        </div>
        <div className="form-control">
          <input type='text' name='origin' placeholder='COUNTRY OF ORIGIN' style={{ width: '250px' }} required />
        </div>
        <div className="form-control">
          <input type='text' name='roast' placeholder='ROAST TYPE' style={{ width: '250px' }} required /> 
        </div>
        <div className="form-control" style={{ height: '180px' }}>
          <input type='text' name='description' placeholder='DESCRIPTION' style={{ width: '250px', height: '160px' }} required /> 
        </div>
        <div className="form-control">
          $
          <input type='number' name='price' min='0' step='0.01' placeholder='PRICE PER LB' style={{ width: '250px' }} required />
        </div>
        <div className="form-control">
          <input type='number' name='availability' min='0' max='130' placeholder='AVAILABILITY (lbs)' style={{ width: '250px' }} required /> 
        </div>
        <br />
        <button className="btn btn-secondary btn-submit" type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusableForm;