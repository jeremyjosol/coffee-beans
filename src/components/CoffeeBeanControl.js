import React from 'react';
import NewCoffeeBeanForm from './NewCoffeeBeanForm';
import CoffeeBeanList from './CoffeeBeanList';
import CoffeeBeanDetail from './CoffeeBeanDetail';
import EditCoffeeBeanForm from './EditCoffeeBeanForm';

class CoffeeBeanControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedCoffeeBean: null,
      editing: false,
      mainCoffeeBeanList: [
        {
          name: 'Blue Bottle Coffee Bright Home Blend',
          origin: 'East Africa',
          roast: 'Light Roast',
          price: 15.99,
          availability: 130
        }
      ]
    }
  }
}