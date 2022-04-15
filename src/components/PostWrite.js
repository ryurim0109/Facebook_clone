import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { history } from '../redux/configStore';

import styled from 'styled-components';
import { MainGrid, Image, MainBtn} from '../elements/index';
import WriteModal from './WriteModal';
import { FaVideo } from 'react-icons/fa';
import { MdPhotoLibrary } from 'react-icons/md';
import { BsFillEmojiLaughingFill } from 'react-icons/bs';
import defaultUserImage from '../img/기본프로필사진.png';
//import { postCreators } from '../redux/modules/post';

const PostWrite = () => {
//   const dispatch = useDispatch();
//   const userInfo = useSelector(state => state.user);

const [openModal, setModal] = useState(false);
const modalOpen = () => {
  // if (!userInfo.is_login) {
  //   window.alert('로그인이 필요합니다!');
  //   history.push('/');
  // }
  // dispatch(postCreators.setDetailPostId(null))
  setModal(true);
};

  

  return (
    <>
      <PostWriteWrapper>
        <MainGrid>
          <MainGrid display='flex' flexDirection='row' alignItems='center' justifyContent='space-around;' padding='12px 16px 10px 0'>
            {/* <Image src={userInfo.imageUrl ? userInfo.imageUrl : defaultUserImage} /> */}
            <Image src={defaultUserImage} />
            {/* <MainBtn width='520px' backgroundColor='#eee' color='#111' borderRadius='30px' _onClick={modalOpen}> */}
            <PostDiv onClick={modalOpen}>
              {/* <p>{userInfo.firstName ? userInfo.firstName + userInfo.lastName : 'GUEST'}님, 무슨 생각을 하고 계신가요?</p> */}
              김미미님, 무슨 생각을 하고 계신가요?
             </PostDiv>
          </MainGrid>
          <WriteModal openModal={openModal} setModal={setModal} />
        </MainGrid>
        <MainGrid width='100%' padding="0 20px"  >
          <MainGrid width='100%' height='40px' display='flex' justifyContent='center' 
          alignItems='center' borderTop="1px solid #e4e6eb">
            <LBtn >
              <Video color='#f0284a' />
              라이브방송
            </LBtn>
            <LBtn >
              <Library color='#45bd62' />
              사진/동영상
            </LBtn>
            <LBtn>
              <Smile color='#f7b928' />
              기분/활동
            </LBtn>
          </MainGrid>
        </MainGrid>
      </PostWriteWrapper>
    </>
  );
};

const PostWriteWrapper = styled.div`
  width: 500px;
  height: 123px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  overflow: hidden;
`;
const PostDiv=styled.button`
    width:420px;
    height:40px;
    background-color:#eee;
    color:#67696d;
    padding:10px;
    box-sizing:border-box;
    border-radius:25px;
    cursor:pointer;
    text-align:left;
    border:none;

    &:hover{
      background-color:#e0e0e0;
    }

`;
const LBtn=styled.div`
    width:156px;
    height:30px; 
    margin-top:13px;
    padding:8px;
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
const Video=styled(FaVideo)`
 margin-right:5px;
 

`
const Library=styled(MdPhotoLibrary)`
 margin-right:5px;
`
const Smile=styled(BsFillEmojiLaughingFill)`
 margin-right:5px;
`

export default PostWrite;