import React from "react";
import { MainGrid,Image } from "../elements";
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IoIosAdd } from "react-icons/io";
import defaultUserImage from '../img/기본프로필사진.png';


const Post =(props)=>{
    const user_info=useSelector((state)=>state.user.user);
  const userPro=user_info?.userImage;

    return(
        <Wrap>
            <MainGrid width="23%" height="100%" position="relative" borderRadius="8px" bg="#fff" overflow="hidden">
                <MainGrid width="100%" overflow="hidden">
                    <Image shape="rectan" src={userPro==='없음'?defaultUserImage:userPro} backgroundPosition="-70px center"/>
                    <MainGrid width="100%" position="absolute" bottom="0" bg="#fff" height="50px" textAlign="center" >
                        <Circle width="32px" height="32px" position="absolute" top="-20px" left="50%" borderRadius="16px" bg="#3578E5"><IoIosAdd/></Circle>
                        <P>스토리 만들기</P>
                    </MainGrid>
                </MainGrid>

            </MainGrid>
            <MainGrid width="23%" height="100%" borderRadius="8px"position="relative" bg="#fff"  overflow="hidden">
                <MainGrid width="100%" height="100%" position="relative"overflow="hidden">
                    <Pro  />
                    <Image shape="rectan"  backgroundPosition="-70px center"
                     src="https://velog.velcdn.com/images/ryurim0109/post/44ca8bf1-cc1e-4db2-8354-0dccc3db5358/image.jpeg"/>
                    
                </MainGrid>

            </MainGrid>
            <MainGrid width="23%" height="100%" borderRadius="8px"position="relative" bg="#fff"  overflow="hidden">
                <MainGrid width="100%" height="100%" position="relative"overflow="hidden">
                    <Pro  />
                    <Image shape="rectan" backgroundPosition="-70px center"
                    src="https://velog.velcdn.com/images/ryurim0109/post/2cf41af5-a810-4063-9198-b1392adbf2c3/image.jpg"/>
                    
                </MainGrid>

            </MainGrid>
            <MainGrid width="23%" height="100%" borderRadius="8px"position="relative" bg="#fff"  overflow="hidden">
                <MainGrid width="100%" height="100%" position="relative"overflow="hidden">
                    <Pro  />
                    <Image shape="rectan" backgroundPosition="center"
                    src="https://velog.velcdn.com/images/ryurim0109/post/8ee84f5a-7971-414a-9197-a3f7ddcfb507/image.jpg"/>
                    
                </MainGrid>

            </MainGrid>
        </Wrap>
    )
};
const Wrap=styled.div`
    width: 500px;
    height:214px;
    justify-content:space-between;
    display: flex;
    position:relative;
    margin: 10px auto;
    border-radius: 10px;
    padding:12px 0; 
    @media screen and (max-width: 500px) {
        width: 100%;
    }

`;
const P=styled.p`
    font-size:14px;
    font-weight:500;

`;
const Circle=styled.div`
    position:absolute;
    top:-25px;
    width:32px;
    height:32px;
    left:50%;
    border-radius:32px;
    background:#3578E5;
    border:2px solid #fff;
    transform:translateX(-50%);
    color:#fff;
    font-weight:800;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:24px;

`;
const Pro=styled.div`
 position:absolute;
 width:32px;
 height:32px;
 border-radius:32px;
 border:3px solid #3578E5;
 z-index:2;
 display:flex;
 top:5px;
 left:5px;
 background-image:url('https://velog.velcdn.com/images/ryurim0109/post/ece967a7-45f6-4479-b819-639a38063ca1/%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.png');
 background-size:cover;



`;

export default Post;