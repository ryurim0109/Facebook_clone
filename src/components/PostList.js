import React from 'react';
import { BsHandThumbsUp,BsChatSquare } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { history } from '../redux/configStore';

import styled from 'styled-components';
import { MainGrid, Image, MainBtn} from '../elements/index';
// import PostWriteModal from './PostWriteModal';
import defaultUserImage from '../img/기본프로필사진.png';
//import { postCreators } from '../redux/modules/post';

const PostList = (props) => {


  return (
    <>
      <PostL>
        <MainGrid width="100%"display="flex" justifyContent="start-end">
          <MainGrid width="10%">
          <Image src={defaultUserImage} size="36"/>
          </MainGrid>
          <MainGrid width="70%">
            <p style={{fontSize:"15px",color:"#050505"}}> 김미미</p>
            <p style={{fontSize:"13px",color:"#65676b"}}>1시간전</p>
          </MainGrid>
          <MainGrid display="flex" justifyContent="space-between" width="20%">
            <MainBtn is_edit _onClick={()=>{
              console.log('게시물수정해요~')
            }}/>
            <MainBtn is_del _onClick={()=>{
              console.log('게시물 삭제해요')
            }}/>
          </MainGrid>
        </MainGrid>
        {/* 게시글 */}
        <PT>불러뷸랄룰</PT>
        <MainGrid display="flex" borderTop="1px solid #e4e6eb" borderBottom="1px solid #e4e6eb">
          <LBtn>
             <Like/>좋아요
          </LBtn>
          <LBtn>
            <Chat/>댓글달기
          </LBtn>
        </MainGrid>

      </PostL>
     
    </>
  );
};

const PostL=styled.div`
  width: 500px;
  box-sizing:border-box;
  display: flex;
  flex-direction: column;
  gap:5px;
  margin: 20px auto;
  border-radius: 10px;
  background-color:#fff;
  padding:12px 16px 0; 
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  
  & p {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;
const PT=styled.p`
  font-size:24px;

`;

const LBtn=styled.div`
    width:50%;
    height:20px; 
    padding:8px;
    margin:5px;
    font-size:15px;
    text-align:center;
    cursor:pointer;
    display:flex;
    border-radius:8px;
    justify-content:center;
    align-items:center;
    color:#67696d;
    &:hover{
        background:#e0e0e0;
    }
`;
const Like=styled(BsHandThumbsUp)`
  font-size:16px;
  margin-right:5px;

`
const Chat=styled(BsChatSquare)`
  font-size:16px;
  margin-right:5px;
`;

export default PostList;