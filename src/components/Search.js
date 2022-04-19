import React from 'react';
import { useSelector } from 'react-redux';
import { MainGrid,MainInput } from '../elements';
import styled from 'styled-components';
import { IoArrowBack } from "react-icons/io5";







const Search =(props)=>{
  
    const {searchBox,setSearchBox} =props;
    const closeSh =()=>{
      setSearchBox(false);
    }

    return(
        <>
        <MainGrid width="360px" position="absolute"top="0" left="0"height="160px">
          <SerB>
            <MainGrid display="flex" padding="5px" justifyContent='space-between'  alignItems='center'>
                <button onClick={closeSh}><IoArrowBack fontSize="24px"/></button>
                <input type="text" placeholder="Facebook 검색"/>
            </MainGrid>
          </SerB>
           
        </MainGrid>
        
        </>
    )
};
const SerB=styled.div`
  width: 100%;
  box-sizing:border-box;
  display: flex;
  flex-direction: column;
  position:relative;
  gap:5px;
  border-radius: 8px;
  background-color:#fff;
  padding:12px 0; 
  box-shadow:rgba(0, 0, 0, 0.1) 0px 2px 12px;

  & button{
    background:none;
    border:none;
  }

  & input{
    border:none;
    background-color:#f0f2f5;
    width:80%;
    padding:10px;
    outline:none;
    border-radius:10px;

  }
  `
 

export default Search;