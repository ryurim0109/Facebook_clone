import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { MainGrid,Image } from '../elements';
import styled from 'styled-components';
import defaultUserImage from '../img/기본프로필사진.png';
import { AiTwotoneSetting } from "react-icons/ai";
import { IoHelpCircle,IoMoon,IoWarning,IoLogOut } from "react-icons/io5";

import { actionCreators as userActions } from '../redux/modules/Login_module';

const UserMenu =()=>{
    const dispatch =useDispatch();
    const [imageSrc, setImageSrc] = React.useState("");
    const [userImg, setUserImg] = React.useState("");
    const token =sessionStorage.getItem('user');

  //사진 미리보기
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };
  const addProfile=()=>{
    let maxSize = 10 * 1024 * 1024;
    let fileSize=userImg.size;
    if(fileSize > maxSize){
		window.alert("첨부파일 사이즈는 10MB 이내로 등록 가능합니다.");
        setUserImg("");
		return false;
    }
    dispatch(userActions.userImgDB(userImg,token));
  }
  const user_info=useSelector((state)=>state.user.user);
  const userPro=user_info?.userImage;
  const _user=user_info?.userName;

    return(
        <>
        <MainGrid width="340px" position="absolute"top="56px" right="40px"height="422px">
            <UserB>
                <MainGrid display="flex" height="80px" padding="5px" justifyContent='space-between'  alignItems='center'>
                    <MainGrid display="flex"  alignItems='center'>
                       {userPro ==='없음' ? ( <Image src={imageSrc? imageSrc :defaultUserImage} size="60"/>) :(
                           <Image src={imageSrc? imageSrc :userPro} size="60"/>
                       )}
                        <p>{_user}</p>
                    </MainGrid>
                        <label htmlFor="userP">
                            <EditBtn>수정</EditBtn>
                        </label>
                        <SaveBtn onClick={addProfile}>저장</SaveBtn>
                        <input type="file" id="userP" style={{display:"none"}} accept="image/jpeg, image/png, image/jpg"  onChange={(e)=>{
                        encodeFileToBase64(e.target.files[0]);
                        setUserImg(e.target.files[0])
                         }}  />
                          
                </MainGrid>
               
                <MainGrid display="flex"  padding="5px" flexDirection="column">
                    <MainGrid  borderTop="1px solid #ccc"/>
                    <MainGrid display="flex"  alignItems='center' >
                        <Btn>
                            <IoWarning fontSize="24px"/>
                        </Btn>
                        <MainGrid display="flex" padding="0 5px" justifyContent='space-evenly'  flexDirection="column">
                            <p style={{fontSize:"16px"}}>의견보내기 <br/> <span style={{fontSize:"12px",color:"#64676b"}}>Facebook을 개선할 수 있도록 도와주세요.</span></p>
                        </MainGrid>

                    </MainGrid>
                    <MainGrid  borderBottom="1px solid #ccc"/>
                </MainGrid>
                <MainGrid display="flex"  padding="5px" flexDirection="column">
                    <MainGrid display="flex"  alignItems='center' >
                        <Btn>
                            <AiTwotoneSetting fontSize="24px"/>
                        </Btn>
                        <MainGrid display="flex" padding="0 5px" justifyContent='space-evenly'  flexDirection="column">
                            <p style={{fontSize:"16px"}}>설정 및 개인정보 &gt;</p>
                        </MainGrid>

                    </MainGrid>
                </MainGrid>
                <MainGrid display="flex"  padding="5px" flexDirection="column">
                    <MainGrid display="flex"  alignItems='center' >
                        <Btn>
                            <IoHelpCircle fontSize="24px"/>
                        </Btn>
                        <MainGrid display="flex" padding="0 5px" justifyContent='space-evenly'  flexDirection="column">
                            <p style={{fontSize:"16px"}}>도움말 및 지원 &gt;</p>
                        </MainGrid>

                    </MainGrid>
                </MainGrid>
                <MainGrid display="flex"  padding="5px" flexDirection="column">
                    <MainGrid display="flex"  alignItems='center' >
                        <Btn>
                            <IoMoon fontSize="24px"/>
                        </Btn>
                        <MainGrid display="flex" padding="0 5px" justifyContent='space-evenly'  flexDirection="column">
                            <p style={{fontSize:"16px"}}>디스플레이 및 접근성 &gt;</p>
                        </MainGrid>

                    </MainGrid>
                </MainGrid>
                <MainGrid display="flex"  padding="5px" flexDirection="column">
                    <MainGrid display="flex"  alignItems='center' >
                        <Btn>
                            <IoLogOut fontSize="24px"/>
                        </Btn>
                        <MainGrid display="flex" padding="0 5px" justifyContent='space-evenly'  flexDirection="column">
                            <p style={{fontSize:"16px"}}>로그아웃 &gt;</p>
                        </MainGrid>

                    </MainGrid>
                </MainGrid>

            </UserB>
        </MainGrid>
        
        </>
    )
}
const UserB=styled.div`
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
  `
  const EditBtn=styled.div`
     width:40px;
     background:#F5F6F7;
     text-align:center;
     font-size:15px;
     cursor:pointer;
    
  `;
  const SaveBtn=styled.button`
    width:50px;
    border:none;
    font-size:15px;
    margin:0 10px;
    background:#F5F6F7;
    cursor:pointer;
  
  `;
  const Btn=styled.button`
  width:41px;
  height:41px;
  background:#F5F6F7;
  border-radius:25px;
  border:none;
  cursor:pointer;
  display:flex;
  align-items:center;
  justify-content:center;
  margin-left:5px;
  position:relative;

  &:hover{
      background:#e0e0e0;
  }
`;

export default UserMenu