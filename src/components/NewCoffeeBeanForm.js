import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';

function NewCoffeeBeanForm(props){
  
  function handleNewCoffeeBeanFormSubmission(event) {
    event.preventDefault();

    props.onNewCoffeeBeanCreation({
      brand: event.target.brand.value,
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      availability: event.target.availability.value, 
      description: event.target.description.value,
      id: v4()
    });
  }
  
  return (
    <div className='form'>
      <ReusableForm 
        formSubmissionHandler={handleNewCoffeeBeanFormSubmission}
        buttonText='SUBMIT' />
        <br />
    </div>
  );
}

NewCoffeeBeanForm.propTypes = {
  onNewCoffeeBeanCreation: PropTypes.func
};

export default NewCoffeeBeanForm;