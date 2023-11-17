import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditCoffeeBeanForm(props) {
  const { bean } = props;
  
  function handleEditCoffeeBeanFormSubmission(event) {
    event.preventDefault();
    
    props.onEditCoffeeBean({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      availablility: event.target.availability.value,
      id: bean.id
    });
  }
  
  return (  
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditCoffeeBeanFormSubmission} 
        buttonText="Update Bean" />
    </React.Fragment>
  );
}

EditCoffeeBeanForm.propTypes = {
  bean: PropTypes.object,
  onEditCoffeeBean: PropTypes.func
};

export default EditCoffeeBeanForm;
