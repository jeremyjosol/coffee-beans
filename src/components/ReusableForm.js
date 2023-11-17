import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <div className="form-control">
          <input type='text' name='name' placeholder='Coffee Bean Name' required />
        </div>
        <div className="form-control">
          <input type='text' name='origin' placeholder='Country of Origin' required />
        </div>
        <div className="form-control">
          <input type='text' name='roast' placeholder='Roast' required /> 
        </div>
        <div className="form-control">
          <input type='number' name='price' min='0' placeholder='Price per lb' required />
        </div>
        <div className="form-control">
          <input type='number' name='availability' min='0' max='130' placeholder='Lbs available' required />
        </div>
        <button className="btn btn-success" type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
    formSubmissionHandler: PropTypes.func,
    buttonText: PropTypes.string
};

export default ReusableForm;