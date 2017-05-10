import React from 'react';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


class Header extends React.Component {
    render(){
        const beforeLogin= (
            <Nav pullRight>
                <NavItem eventKey={1} href="#"><NavLink to="/signin">로그인</NavLink></NavItem>
                <NavItem eventKey={2} href="#"><NavLink to="/signup">회원가입</NavLink></NavItem>
            </Nav>
        );

        const afterLogin= (
            <Nav pullRight>
                <NavDropdown eventKey={3} title="유저네임" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>회원정보</MenuItem>
                    <MenuItem eventKey={3.2}>내 강좌보기</MenuItem>
                    <MenuItem eventKey={3.3}>수정하기</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.3}>로그아웃</MenuItem>
                </NavDropdown>
            </Nav>
        );

        return(
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink to="/"><img src="/static/img/logo_white.png"/></NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1}><NavLink to="/ai">Ai코스</NavLink></NavItem>
                        <NavItem eventKey={2}><NavLink to="/si">실무코스</NavLink></NavItem>
                        <NavItem eventKey={3}><NavLink to="/st">스타코스</NavLink></NavItem>
                    </Nav>
                    { this.props.isLogged ? afterLogin : beforeLogin }
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
Header.defaultProps = {
    isLogged: true
}

export default Header;

