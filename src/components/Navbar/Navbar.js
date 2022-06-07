import React, { Component } from 'react'
import MenuItems from './MenuItem'
import './Navbar.css'

export class Navbar extends Component {
  state ={ clicked: false}

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render() {
    return (
      <nav className='NavbarItems'>
        <h1 className='Navbar-Logo'>ขี้เกียจทำ Navbar อยู่</h1>
        <div className='menu-icon' onClick={this.handleClick}>
          <i className={this.state.clicked}></i>
        </div>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
            <li key={index}>
              <a className={item.cName} href={item.url}>{item.title}</a>
            </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navbar