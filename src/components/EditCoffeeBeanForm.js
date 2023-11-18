import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditCoffeeBeanForm(props) {
  const { bean } = props;
  
  function handleEditCoffeeBeanFormSubmission(event) {
    event.preventDefault();
    
    props.onEditCoffeeBean({
      brand: event.target.name.value,
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      availablility: event.target.availability.value,
      description: event.target.description.value,
      id: bean.id
    });
  }
  
  return (  
    <div className='form'>
      <ReusableForm 
        formSubmissionHandler={handleEditCoffeeBeanFormSubmission} 
        buttonText='UPDATE' />
        <br />
    </div>
  );
}

EditCoffeeBeanForm.propTypes = {
  bean: PropTypes.object,
  onEditCoffeeBean: PropTypes.func
};

export default EditCoffeeBeanForm;
