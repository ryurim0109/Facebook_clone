import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {MainGrid,Image,MainBtn,MainInput} from "../elements/index";
import { Dialog } from '@material-ui/core';
import Button from '@mui/material/Button';
import defaultUserImage from '../img/기본프로필사진.png';



const WriteModal = (props) => {
    const is_edit=false;
    const { openModal, setModal } = props;
  const modalClose = () => {
    // console.log(detailPost)
    setModal(false);
  };
   
  
    return (
      <>
      <Dialog maxWidth={'lg'} scroll='body' open={openModal}>
        <Outter>
        <MainGrid alignItems='center' display="flex" flexDirection="column" position='relative'>
            <Div>
                {is_edit? "게시글 수정하기" :"게시물 만들기"}
            </Div>
                <MainGrid
                position='absolute'
                top='-10px'
                right='40px'
                color='black'
                width='20px'
                padding='10px'
                >
                <MainBtn is_close _onClick={modalClose} />
                </MainGrid>
            <MainGrid display='flex' width="100%" flexDirection='row' alignItems='center'>
           
                <Image src={defaultUserImage} />
                <p>김미미님</p>
            </MainGrid>
            <MainGrid height="40%">
                <TextArea  placeholder="무슨 생각을 하고 계신가요?" />
            </MainGrid>
            
            <MainBtn  width="100%" borderRadius="20px" color="#fff" _onClick={modalClose} hover="#3578E5">
            {is_edit? "수정" :"게시"}
            </MainBtn>
            </MainGrid>
           
            
          
        </Outter>
      </Dialog>
  
      </>
    );
};

const Outter=styled.div`
    width:500px;
    overflow:scroll;
    padding:10px;
    background:#fff;

    & p {
        font-weight:bold;
        color:#050505;
    }
    @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Div=styled.p`
    width:100%;
    text-align:center;
    border-bottom:1px solid #BEC3C9;
    font-size:24px;
    color:#050505;
    margin:0;
    padding:10px 0;
    font-weight:bold;
`;
const TextArea = styled.textarea`
  height: 140px;
  margin: 10px;
  width: 450px;
  border: none;
  outline: none;
  word-spacing: -0.4em;
  resize: none;
  overflow: auto;
  place ::-webkit-scrollbar {
    display: none;
  }
`;

export default WriteModal;