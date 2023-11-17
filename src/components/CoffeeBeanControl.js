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

  handleAddButtonClick = () => { 
    if (this.state.selectedCoffeeBean != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffeeBean: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddNewCoffeeBeanToList = (newBean) => {
    const newMainCoffeeBeanList = this.state.mainCoffeeBeanList.concat(newBean);
    this.setState({
      mainCoffeeBeanList: newMainCoffeeBeanList,
      formVisibleOnPage: false 
    });
  }
  
  handleChangingSelectedCoffeeBean = (id) => {
    const selectedCoffeeBean = this.state.mainCoffeeBeanList.filter(bean => bean.id === id)[0];
    this.setState({
      selectedCoffeeBean: selectedCoffeeBean 
    });
  }

  handleDeletingCoffeeBean = (id) => {
    const newMainCoffeeBeanList = this.state.mainCoffeeBeanList.filter(bean => bean.id !== id);
    this.setState({
      mainCoffeeBeanList: newMainCoffeeBeanList,
      selectedCoffeeBean: null
    });
  }

  handleEditClick = () => {
    this.setState({
      editing: true 
    });
  }

  handleEditingCoffeeBeanInList = (beanToEdit) => {
    const editedMainCoffeeBeanList = this.state.mainCoffeeBeanList
      .filter(bean => bean.id !== this.state.selectedCoffeeBean.id)
      .concat(beanToEdit);
    this.setState({
      mainCoffeeBeanList: editedMainCoffeeBeanList,
      editing: false,
      selectedCoffeeBean: null
    });
  }
}
