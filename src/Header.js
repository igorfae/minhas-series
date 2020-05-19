import React, {useState} from 'react';
import { 
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler
 } from 'reactstrap';
// usado para ter comportamento de SPA
import { Link } from 'react-router-dom'

const Header = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  return (
    <Navbar color='light' light expand='md'>
      <div className='container'>
        <NavbarBrand tag={Link} to='/'>Minhas Séries</NavbarBrand>
        <NavbarToggler onClick={toggle}></NavbarToggler>
        <Collapse isOpen={open} navbar>
          <Nav className='ml-auto' navbar>
          <NavItem>            
              <NavLink tag={Link} to='/series'>Séries</NavLink>
            </NavItem>
            <NavItem>            
              <NavLink tag={Link} to='/generos'>Genêros</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
  </Navbar>   
  )
}

export default Header