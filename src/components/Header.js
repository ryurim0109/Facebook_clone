import React from 'react';
import { MainGrid,MainInput,Image,MainBtn } from '../elements';
import {history} from "../redux/configStore";
import styled from 'styled-components';

const Header =(props)=>{
    return (
        <>
        
          <MainGrid width="100%" height="56px" bg="#fff"
           boxShadow='rgba(0, 0, 0, 0.1) 0px 2px 12px;'
          >
             <Logo>
                <Image src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbjBzaq%2FbtrzvAeUmaK%2FEIA81bfLPQyMlGVllzpkTK%2Fimg.png"
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
    width:112px;
    height:56px;
    display:flex;
    align-items:center;
    padding-left:16px;
    cursor:pointer;

`


export default Header;