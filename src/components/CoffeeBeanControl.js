import React from 'react';
import NewCoffeeBeanForm from './NewCoffeeBeanForm';
import CoffeeBeanList from './CoffeeBeanList';
import CoffeeBeanDetail from './CoffeeBeanDetail';
import EditCoffeeBeanForm from './EditCoffeeBeanForm';
import { v4 } from 'uuid';

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
          availability: 130,
          id: v4()
        },
        {
          name: 'Blue Bottle Coffee Three Africas',
          origin: 'Ethiopia, Central Africa',
          roast: 'Medium Roast',
          price: 13.00,
          availability: 90,
          id: v4()
        },
        {
          name: 'Blue Bottle Coffee Bella Donovan',
          origin: 'Ethiopia',
          roast: 'Dark Roast',
          price: 13.00,
          availability: 75,
          id: v4()
        },
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

  handleCoffeeBeanSale = (id) => {
    this.setState((prevState) => {
      const { selectedCoffeeBean, mainCoffeeBeanList } = prevState;
  
      const newCoffeeBeanList = mainCoffeeBeanList.map((bean) =>
        bean.id === id && selectedCoffeeBean.availability > 0
          ? { ...bean, availability: bean.availability - 1 }
          : bean
      );
  
      return {
        mainCoffeeBeanList: newCoffeeBeanList,
        selectedCoffeeBean: {
          ...selectedCoffeeBean,
          availability:
            selectedCoffeeBean.availability > 0
              ? selectedCoffeeBean.availability - 1
              : 0,
        },
      };
    });
  };

  handleCoffeeBeanRestock = (id) => {
    this.setState((prevState) => {
      const { selectedCoffeeBean, mainCoffeeBeanList } = prevState;
  
      const newCoffeeBeanList = mainCoffeeBeanList.map((bean) =>
        bean.id === id && selectedCoffeeBean.availability < 130
          ? { ...bean, availability: bean.availability + 1 }
          : bean
      );
  
      return {
        mainCoffeeBeanList: newCoffeeBeanList,
        selectedCoffeeBean: {
          ...selectedCoffeeBean,
          availability:
            selectedCoffeeBean.availability < 130
              ? selectedCoffeeBean.availability + 1
              : 130,
        },
      };
    });
  };
  
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditCoffeeBeanForm bean = {this.state.selectedCoffeeBean} onEditCoffeeBean = {this.handleEditingCoffeeBeanInList} />
      buttonText = "Return to Coffee Bean List";
    } else if (this.state.selectedCoffeeBean != null) {
      currentlyVisibleState = <CoffeeBeanDetail bean = {this.state.selectedCoffeeBean} 
      onClickingDelete = {this.handleDeletingCoffeeBean}
      onClickingEdit = {this.handleEditClick} 
      onClickingSell = {this.handleCoffeeBeanSale}
      onClickingRestock = {this.handleCoffeeBeanRestock} />
      buttonText = "Return to Coffee Bean List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeBeanForm onNewCoffeeBeanCreation={this.handleAddNewCoffeeBeanToList}  />;
      buttonText = "Return to Coffee Bean List";
    } else {
      currentlyVisibleState = <CoffeeBeanList coffeeBeanList={this.state.mainCoffeeBeanList} onCoffeeBeanSelection={this.handleChangingSelectedCoffeeBean} />;
      buttonText = "Add Coffee Bean";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className='btn btn-success' onClick={this.handleAddButtonClick}>{buttonText}</button>
        <br />
      </React.Fragment>
    );
  }
}

export default CoffeeBeanControl;
