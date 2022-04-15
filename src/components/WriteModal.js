import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {MainGrid,Image,MainBtn,MainInput} from "../elements/index";
import { Dialog } from '@material-ui/core';
import defaultUserImage from '../img/기본프로필사진.png';




const WriteModal = (props) => {
    const is_edit=false;
    const { openModal, setModal } = props;
  const modalClose = () => {
    // console.log(detailPost)
    setModal(false);
  };
  

  const selectFile = (e) => {
    const fileName = e.target.files[0].name.split('.')[0];
    const fileType = e.target.files[0].name.split('.')[1];
    const fileFullName = e.target.files[0].name;
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
    //   dispatch(
    //     imageActions.setPostPreview({
    //       preview: reader.result,
    //       fileName,
    //       fileType,
    //       fileFullName,
    //       file,
    //     })
    //   );
    };
}
  
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
                <MainGrid
                  height='auto'
                  position='relative'
                //   display={previewDisplay}
                  id='postPreviewBox'
                >
                  <Image
                    // src={postPreview ? postPreview.preview : detailPost?.imageUrl}
                    shape='square'
                    margin='0 0 5px 0'
                    backgroundPosition='center'
                  />
                  <label htmlFor='postFileInput' id='inputLabelButton'>
                    <MainGrid
                      display='flex'
                      alignItems='center'
                      justifyContent='center'
                      hover='#e1e2e7'
                      bg='white'
                      borderRadius='5px'
                      width='auto'
                      padding='5px 10px'
                    >
                    </MainGrid>
                  </label>
                <input type='file' id='postFileInput' onChange={selectFile} />
               
                </MainGrid>

           
                  <MainGrid
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    width="100%"
                    padding="0 10px"
                    border="1px solid #BEC3C9"
                    margin="16px 0"
                    borderRadius="20px"
                  >
                        
                        <p>게시물에 추가</p>
                        <MainBtn is_up />

                        
                  </MainGrid>
            
                <MainBtn  width="100%" borderRadius="20px" color="#fff" _onClick={modalClose} hover="#3578E5">
                {is_edit? "수정" :"게시"}
                </MainBtn>
            </MainGrid>
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
    gap:10px;

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