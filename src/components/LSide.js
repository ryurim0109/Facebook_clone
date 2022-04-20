import React from "react";
import { MainGrid,Image } from "../elements";
import {useSelector} from 'react-redux';
import defaultUserImage from '../img/기본프로필사진.png';
import styled from 'styled-components';
import { IoIosArrowDown } from "react-icons/io";

const LSide =(props)=>{
    const user_info=useSelector((state)=>state.user.user);
    const userPro=user_info?.userImage;
    const _user=user_info?.userName;

    
    return (
        <>
           <MainGrid  width="264px" position="fixed">
                <MainGrid height="44px" display="flex" alignItems="center" hover="#e4e6eb" borderRadius="8px">
                    
                <Image src={userPro==='없음'?defaultUserImage:userPro} size="28"/>
                <P>{_user}</P>
                </MainGrid>
                <MainGrid height="44px" display="flex" alignItems="center" hover="#e4e6eb"  borderRadius="8px">
                    <Image  src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png" size="28"/>
                    <P>친구</P>
                </MainGrid>
                <MainGrid height="44px" display="flex" alignItems="center" hover="#e4e6eb" borderRadius="8px">
                    <Image  src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/Im_0d7HFH4n.png" size="28"/>
                    <P>그룹</P>
                </MainGrid>
                <MainGrid height="44px" display="flex" alignItems="center" hover="#e4e6eb" borderRadius="8px">
                    <Image src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/FhOLTyUFKwf.png" size="28"/>
                    <P>Watch</P>
                </MainGrid>
                <MainGrid height="44px" display="flex" alignItems="center" hover="#e4e6eb" borderRadius="8px">
                    <Image src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/tYxGXJRPH5q.png" size="28"/>
                    <P>과거의 오늘</P>
                </MainGrid>
                <MainGrid height="44px" display="flex" alignItems="center" hover="#e4e6eb" borderRadius="8px">
                    <Image src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/KlDlsO3UxDM.png" size="28"/>
                    <P>저장됨</P>
                </MainGrid>
                <MainGrid height="44px" display="flex" alignItems="center" hover="#e4e6eb" borderRadius="8px">
                    <Image src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/0gH3vbvr8Ee.png" size="28"/>
                    <P>페이지</P>
                </MainGrid>
                <MainGrid height="44px" display="flex" alignItems="center" hover="#e4e6eb" borderRadius="8px">
                    <Image src="https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/_ieo6WvmKuc.png" size="28"/>
                    <P>이벤트</P>
                </MainGrid>
                <MainGrid height="44px" display="flex" alignItems="center" hover="#e4e6eb" borderRadius="8px">
                    <Image src="https://static.xx.fbcdn.net/rsrc.php/v3/yM/r/kY1UFd6n2_O.png"  size="28"/>
                    <P>최신</P>
                </MainGrid>
                <MainGrid height="44px" display="flex" alignItems="center" hover="#e4e6eb" borderRadius="8px">
                    <Image src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/nbUcQfHcgBv.png"  size="28"/>
                    <P>즐겨찾기</P>
                </MainGrid>
                <MainGrid height="44px" padding="0 0 0 5px" display="flex" alignItems="center" hover="#e4e6eb" borderRadius="8px">
                    <Btn>
                        <IoIosArrowDown />
                    </Btn>
                    <P>더 보기</P>    
                </MainGrid>
                <MainGrid height="44px" padding="0 0 0 5px" display="flex" alignItems="center" borderTop="1px solid #DADDE1" color="#65676b">
                      내 바로가기
                </MainGrid>

                <MainGrid height="44px" display="flex" alignItems="center" hover="#e4e6eb" borderRadius="8px">
                    <Image src="https://scontent-gmp1-1.xx.fbcdn.net/v/t39.2081-6/21977618_925845317553683_1627680811480252416_n.png?stp=c1.1.72.72a_dst-png_p72x72&_nc_cat=1&ccb=1-5&_nc_sid=eaa83b&_nc_ohc=7n-TyuM0U4AAX9UxqeO&_nc_ht=scontent-gmp1-1.xx&oh=00_AT_xjRvLdvhQA4tk7SGl-G6t9iLZqATNYJgSh65mt3uUUQ&oe=6264D345"  size="28"/>
                    <P>Candy Crush Soda Saga</P>
                </MainGrid>
                <FP>
                    개인정보처리방침 · 약관 · 광고 · AdChoices <br/>
                    쿠키 · 더 보기 · Meta © 2022
                </FP>

           </MainGrid>
        </>
    )
};
const P=styled.p`

    font-size:15px;
    color:#050505;
    font-weight:500;
    padding-left:5px;

`
const Btn=styled.div`
    width:24px;
    height:24px;
    background:#DADDE1;
    border-radius:12px;
    border:none;
    display:flex;
    justify-content:center;
    align-items:center;

`;
const FP=styled.p`
    font-size:13px;
    color:#65675b;

`;
export default LSide;