import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewCoffeeBeanForm(props){
  
  function handleNewCoffeeBeanFormSubmission(event) {
    event.preventDefault();

    props.onNewCoffeeBeanCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: price,
      availability: event.target.availability.value, 
      id: v4()
    });
  }
  
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewCoffeeBeanFormSubmission}
        buttonText="Add Coffee Bean" />
    </React.Fragment>
  );
}

NewCoffeeBeanForm.propTypes = {
  onNewCoffeeBeanCreation: PropTypes.func
};

export default NewCoffeeBeanForm;