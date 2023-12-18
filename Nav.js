import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate, useLocation } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

//함수형컴포넌트는 프롭스를 사용한다.




const Nav = () => {

  const [show, setShow] = useState(false);
  const {pathname} = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  //console.log('pathname', pathname)
  
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
  
 
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`)
    //console.log('e.target.value',e.target.value);

  }

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
      })
      .catch((error) => {
        alert(error.message);
      });
  };  

  //console.log('search', useLocation().search)
  return (
    <NavWrapper show={show}>
      <Logo>
        <img 
          src="/images/logo.svg" 
          alt="disney Plus Logo" 
          onClick={() => (window.location.href = "/")}
        />
      </Logo>
      {pathname === "/" ? (
        <Login onClick = {handleAuth}>Login</Login>) : 
            <Input 
            value = {searchValue}
            onChange={handleChange}
            className='nav__input'
            type='text'
            placeholder='검색어를 입력해주세요.'
           />}
    </NavWrapper>
  )
}

export default Nav

const Login = styled.a`
background: rgba(0, 0, 0, 0.5);
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
padding:8px 15px;
transition: all .2s ease 0s;
 
&:hover {
  background: #f9f9f9;
  color: #333;
  font-weight: 600;
  border-color: transparent;
}
`;

const Input = styled.input`
  position: fixed;
  left: 50%;
  transform: translateX(-50%, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 5px;
  border: none;
`;

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