import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
//함수형컴포넌트는 프롭스를 사용한다.

const Nav = () => {

  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  
    return () => {
      window.removeEventListener('scroll', () => {});
    }
  }, [])
  
  return (
    <NavWrapper show={show}>
      <Logo>
        <img 
          src="/images/logo.svg" 
          alt="disney Plus Logo" 
          onClick={() => (window.location.href = "/")}
        />
      </Logo>
    </NavWrapper>
  )
}

export default Nav

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70PX;
  background-color: ${props => props.show ? '#090613': 'transparent'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  letter-spacing: 16px
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 0;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;