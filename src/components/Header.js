import React from 'react';
import { MainGrid,MainInput,Image,MainBtn } from '../elements';
import {history} from "../redux/configStore";
import styled from 'styled-components';
import defaultUserImage from '../img/logo.png';

const Header =(props)=>{
    return (
        <>
        
          <MainGrid width="100%" height="56px" bg="#fff"
           boxShadow='rgba(0, 0, 0, 0.1) 0px 2px 12px;'
          >
             <Logo>
                <Image src={defaultUserImage}
                  size="40" _onClick={()=>{
                      history.push('/main')
                  }}
                />
                <MainBtn is_S />
            </Logo>
          
              
          </MainGrid>
        </>
      );
};

const Logo=styled.div`
    width:90px;
    height:56px;
    display:flex;
    align-items:center;
    padding-left:16px;
    cursor:pointer;
    justify-content: space-between;

`


export default Header;