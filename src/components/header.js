import React from 'react';
import styled from 'styled-components'

const Header = () => {
    return (
        <Container>
            <HomeLogo />
            <Nav>
                <NavItem>
                    Home
                </NavItem>
                <NavItem>
                    About
                </NavItem>
                <NavItem>
                    Contact
                </NavItem>
            </Nav>
            {/* replace with user logo */}
            <HomeLogo />
        </Container>
    )
}
export default Header

const Container = styled.header`    
    height: 10vh;
    background: #000;
    color: #fff;        
    display:flex;
    justify-content:space-between;
    align-item: center;    
`;

const HomeLogo = styled.div`
    width: 50px;
    height: 50px;
    margin: auto;
    border-radius: 25px;
    background: #fff;
    cursor: pointer;
`;

const Nav = styled.ul`    
    margin:auto;
`;

const NavItem = styled.li`
    list-style: none;
    display:inline-block;
    padding: 0 20px
`;