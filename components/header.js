import { useState } from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';


export default (prop)=>{
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">nextJS</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">หน้าแรก</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/member/home">สมาชิก</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/home">home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">เข้าสู่ระบบ</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    )
}