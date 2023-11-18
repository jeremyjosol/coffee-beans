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
          brand: 'Blue Bottle Coffee',
          name: 'Bolivia Samaipata El Fuerte SL-28 Natural',
          origin: 'Bolivia',
          roast: 'Light Roast',
          price: 25.99,
          availability: 130,
          description: 'While Bolivia is known for its balanced profiles, this is brighter than you’d ever expect from the region. The Rodriguez family chose to naturally process the SL-28 cultivar, turning a brilliantly vivid Kenyan variety into an even brighter and fruitier expression of itself. Intense flavors of dark red berries mingle with a tactile jamminess for a complex, sweet, and subtly floral profile.',
          id: v4()
        },
        {
          brand: 'Blue Bottle Coffee',
          name: 'Three Africas',
          origin: 'Ethiopia, Central Africa',
          roast: 'Medium Roast',
          price: 28.99,
          availability: 0,
          description: 'Sparkling yet grounded, Three Africas is roasted dark enough to be rounded and full, yet light enough to let flecks of berries and citrus shine. It’s an organic coffee that gives more than what the drinker is asking for: fruit, nuance, radiance, and a deep sweetness that wins over just about everyone.',
          id: v4()
        },
        {
          brand: 'Blue Bottle Coffee',
          name: 'Bella Donovan',
          origin: 'Ethiopia',
          roast: 'Dark Roast',
          price: 30.00,
          availability: 75,
          description: 'A natural Ethiopian coffee with jammy berry notes brings a glimmer of fruit to the otherwise chocolate-heavy foundation. To add nuance, we roast these two coffees four different ways. The result is a blend that straddles the worlds of complexity and comfort with uncommon poise.',
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
  
  render() {
    let arrowBackIcon = (
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 512 512'
        height='1em'
        width='1em'
        xmlns='http://www.w3.org/2000/svg'>
        <path 
          d='M216.4 163.7c5.1 5 5.1 13.3.1 18.4L155.8 243h231.3c7.1 0 12.9 5.8 12.9 13s-5.8 13-12.9 13H155.8l60.8 60.9c5 5.1 4.9 13.3-.1 18.4-5.1 5-13.2 5-18.3-.1l-82.4-83c-1.1-1.2-2-2.5-2.7-4.1-.7-1.6-1-3.3-1-5 0-3.4 1.3-6.6 3.7-9.1l82.4-83c4.9-5.2 13.1-5.3 18.2-.3z'>
        </path>
      </svg>
    )

    let addIcon = (
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 24 24'
        height='0.6em'
        width='0.7em'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          fill='none'
          stroke='#61dafb'
          strokeWidth='2'
          d='M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,18 L12,6 M6,12 L18,12'>
        </path>
      </svg> 
    )

    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditCoffeeBeanForm 
      bean = {this.state.selectedCoffeeBean} 
      onEditCoffeeBean = {this.handleEditingCoffeeBeanInList} />
      buttonText = (
        <div className='go-back'>
          {arrowBackIcon} GO BACK
        </div>
      )
    } else if (this.state.selectedCoffeeBean != null) {
      currentlyVisibleState = <CoffeeBeanDetail 
      bean = {this.state.selectedCoffeeBean} 
      onClickingDelete = {this.handleDeletingCoffeeBean}
      onClickingEdit = {this.handleEditClick} 
      onClickingSell = {this.handleCoffeeBeanSale}
      onClickingRestock = {this.handleCoffeeBeanRestock} />
      buttonText = (
        <div className='go-back'>
          {arrowBackIcon} GO BACK
        </div>
      )
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeBeanForm 
      onNewCoffeeBeanCreation={this.handleAddNewCoffeeBeanToList} />;
      buttonText = (
        <div className='go-back'>
          {arrowBackIcon} GO BACK
        </div>
      )
    } else {
      currentlyVisibleState = <CoffeeBeanList 
      coffeeBeanList={this.state.mainCoffeeBeanList} 
      onCoffeeBeanSelection={this.handleChangingSelectedCoffeeBean} />;
      buttonText = (
        <React.Fragment>
          ADD NEW {addIcon} 
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button 
          className='btn btn-secondary' 
          onClick={this.handleAddButtonClick}>
          {buttonText}
        </button>
        <br />
      </React.Fragment>
    );
  }
}

export default CoffeeBeanControl;
