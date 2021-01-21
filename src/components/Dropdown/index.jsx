import React, { Component, createRef } from 'react';
import { Container, DropdownButton, BoxOptionList, OptionsList, Overlay } from './styles';
import { Events } from '../../util/Events';
import { KeyCodes } from '../../util/Utils';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.dropdown = createRef();
    this.state = {
      dropdownIsOpen: false,
      dropdownSelected: null,
      headerTitle: this.props.items[0].title,
      selectedItem: 0
    }
  }

  componentDidMount() {
    document.addEventListener(Events.keydown, this.handlerKey, false);    
  }

  componentWillUnmount() {
    document.removeEventListener(Events.keydown, this.handlerKey, false);
  }

  handlerKey = (e) => {
    const dropdownIsOpen = this.state.dropdownIsOpen;
    const selectedItem = this.state.selectedItem;
    const amountItems = this.props.items.length - 1;

    if (e.keyCode === KeyCodes.KEY_UP) {
      if (dropdownIsOpen && selectedItem > 0) {
        this.setState({selectedItem : selectedItem - 1})
      }
    }

    if (e.keyCode === KeyCodes.KEY_DOWN) {
      if (dropdownIsOpen && selectedItem < amountItems) {
        this.setState({selectedItem : selectedItem + 1})
      }
    }

    if (e.keyCode === KeyCodes.ENTER) {
      if (dropdownIsOpen) {
        console.log('Enter dropdown ')
        this.handleItemClick()
      }
    }
  }

  toggleDropdown = (bool, num) => {
    this.setState({dropdownIsOpen : bool})
    if (num) this.setState({ dropdownSelected : num});
  }

  activeItem = (e) => {
    const item = e.target;
    let parent = item.parentNode;
    [...parent.children].forEach(child => {
      child.classList.remove('active')
    });

    item.classList.add('active')

    this.handleItemClick();
  }

  handleItemClick = () => {    
    const itemSelected = this.dropdown.current.childNodes[1].getElementsByClassName('active');
    const value = itemSelected[0].getAttribute("data-id");
    const headerTitle = itemSelected[0].textContent;

    this.setState({headerTitle})

    // To do: Adicionar requisição
    
    this.toggleDropdown(false)

    setTimeout(()=> {
      this.props.callback(this.state.dropdownSelected);
    }, 500)
  }

  render() {
    const { width, items, align, icon1, icon2, active } = this.props;
    return (
      <>
      <Container 
        className="box-dropdown"
        size={width}                      
        onBlur={()=> this.toggleDropdown(false)}
        ref={this.dropdown}
        tabIndex={0}        
      >
        <DropdownButton 
          className={active ? 'active' : ''}
          onClick={()=> this.toggleDropdown(!this.state.dropdownIsOpen)}
          expanded={this.state.dropdownIsOpen}
        >
          {icon1 &&
            <i className={`sky_icon ${icon1}`}></i>        
          }  
          <span>{this.state.headerTitle}</span>
          {icon2 &&
            <i className={`sky_icon ${icon2}`}></i>        
          } 
        </DropdownButton>
        <BoxOptionList 
          expanded={this.state.dropdownIsOpen}
          align={align} 
        >
          <OptionsList>
            {items.map((item, index) => (
              <li key={item.id} className={`item ${this.state.selectedItem === index ? 'active' : ''}`} data-id={item.id} onClick={this.activeItem}> {item.title} </li>
            ))}        
          </OptionsList>    
        </BoxOptionList>  
      </Container>
      <Overlay expanded={this.state.dropdownIsOpen} />
      </>
    );
  }
}
