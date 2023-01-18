/*eslint-disable */
import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { FaShoppingCart} from 'react-icons/fa';
import { Container, HeaderContainer, Cart } from "./styles";  

function Header() {
    return(
        <><Container>
        <HeaderContainer>
          <Link to="/home">
            <img src={logo} alt="logo" />
          </Link>
          <Link to="/cart">
            <Cart>
              <div>
                <span>0</span>
              </div>
              <FaShoppingCart size={36} color="#fff" />
            </Cart>
          </Link>
        </HeaderContainer>
      </Container></>
        )
   } 


export default Header;