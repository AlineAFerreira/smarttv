import React, { Component } from 'react';
import Header from '../Header';
import Dropdown from '../Dropdown';
import tempData from '../../util/tempDataDropdown';
import { Events } from '../../util/Events';
import { KeyCodes } from '../../util/Utils';
import { DropdownRow } from './styles';

export default class Catalog extends Component {
  constructor(props) {
    super(props);
    this.dropdown1 = React.createRef();
    this.dropdown2 = React.createRef();
    this.dropdown3 = React.createRef();

    this.state = {
      dropdownEvents: false,
      dropdownSelected: null,
      dropdownInstances: 3
    }
  }

  componentDidMount() {
    document.addEventListener(Events.keydown, this.handlerKey, false);
  }

  componentWillUnmount() {
    document.removeEventListener(Events.keydown, this.handlerKey, false);
  }

  handlerKey = (e) => {
    const dropdownEvents = this.state.dropdownEvents;
    const dropdownSelected = this.state.dropdownSelected;
    const dropdownInstances = this.state.dropdownInstances - 1;

    if (e.keyCode === KeyCodes.KEY_RIGHT) {     
      if (dropdownEvents && dropdownSelected < dropdownInstances) {
        this.setState({dropdownSelected: dropdownSelected + 1})      
      }
    }
    
    if (e.keyCode === KeyCodes.KEY_LEFT) {
      if (dropdownEvents) {
        if (dropdownSelected > 0) {
          this.setState({dropdownSelected: dropdownSelected - 1})
        }
      }
    }

    if (e.keyCode === KeyCodes.KEY_UP) {
      if (dropdownEvents) {
        this.setState({dropdownEvents : false, dropdownSelected: null});
      } 
    }

    if (e.keyCode === KeyCodes.KEY_DOWN) {
      if (dropdownEvents) {
        this.setState({dropdownEvents : false, dropdownSelected: null});
      }
    }

    if (e.keyCode === KeyCodes.ENTER) {
      if (dropdownEvents) {
        const child = `dropdown${this.state.dropdownSelected + 1}`
        this[child].current.toggleDropdown(true);
        this.setState({dropdownEvents: false, dropdownSelected})
      }
    }

    // To do: Remover após inserir o grid de filmes
    // Evento temporário apenas para iniciar a navegação pelo dropdown 
    if (e.keyCode === KeyCodes.ESC) {
      this.activeDropdownEvents()
    }
  }

  activeDropdownEvents = () => {
    const dropdownSelected = this.state.dropdownSelected || 0;
    this.setState({dropdownEvents: true, dropdownSelected})
  }

  render() {
    return (
      <>
        <Header page="76 conteúdos" section="Lançamentos" />
        <DropdownRow>
          <Dropdown 
            width={18}
            items={tempData.items}
            icon2="sky-icon-line-arrow-down"
            active={this.state.dropdownSelected === 0 ? true : false}
            ref={this.dropdown1}
            callback={this.activeDropdownEvents}
          />

          <Dropdown 
            width={18}
            items={tempData.items1}
            icon2="sky-icon-line-arrow-down"
            active={this.state.dropdownSelected === 1 ? true : false}
            ref={this.dropdown2}
            callback={this.activeDropdownEvents}
          />
            
          <Dropdown 
            width={18}
            items={tempData.items2}
            icon1="sky-icon-line-filter"
            icon2="sky-icon-line-arrow-down" 
            align="right"      
            active={this.state.dropdownSelected === 2 ? true : false}
            ref={this.dropdown3}
            callback={this.activeDropdownEvents}
          />
        </DropdownRow>
      </>
    );
  }
}
