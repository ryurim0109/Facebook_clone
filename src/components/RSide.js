import React from "react";
import { MainGrid,Image } from "../elements";
import {useSelector} from 'react-redux';
import defaultUserImage from '../img/기본프로필사진.png';
import styled from 'styled-components';

const RSide =(props)=>{
    const user_info=useSelector((state)=>state.user.user);
    const post_list =useSelector((state)=>state.post.post_list);
    const prof = post_list?.userImageUrl;
    const _user = post_list?.userName;

    
    return (
        <>
           <MainGrid  width="264px" position="fixed" right="0" >
                <P>광고</P>
                <MainGrid display="flex" flexDirection="column">
                    <MainGrid display="flex" height="120px">
                        <Image shape="radius" size="100"

                        src="https://scontent-gmp1-1.xx.fbcdn.net/v/t45.1600-4/277756974_23849986346530409_114547417263063543_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=101&ccb=1-5&_nc_sid=67cdda&_nc_ohc=kZ4BSWX48wYAX-UrCoF&_nc_ht=scontent-gmp1-1.xx&oh=00_AT9soRogmARNtpfWSjViYqdRrJnl2RU-3NTQN9QZ6M1Q7g&oe=6264D7E8"/>
                        <MainGrid width="60%" padding="0 5px">
                            <p>가장 합리적인 개발자 부트캠프</p> 
                            <Sp>hanghae99.sparta <br/>codingclub.kr</Sp> 
                        </MainGrid>
                    </MainGrid>
                    <MainGrid display="flex" height="120px" >
                        <Image shape="radius" size="100" 
                            src="https://t1.daumcdn.net/b2/creative/80897/2ac8f93bc16380427f85eec6a1620fde.png"/>
                            <MainGrid width="60%" padding="0 5px">
                                <p>부동산 금융(PF), 강의 하나로 끝</p> 
                                <Sp>fastcampus.co.kr</Sp> 
                                </MainGrid>
                    </MainGrid>
                    <MainGrid display="flex"  height="40px"margin ="10px 0" borderTop="1px solid #DADDE1">
                        <P>연락처</P>
                    </MainGrid>
                    {/* 유저연락처 부분 map돌리면 될것같슴돠~! */}
                    <MainGrid height="44px" display="flex" alignItems="center" hover="#e4e6eb" borderRadius="8px">
                        <Image src={defaultUserImage}  size="28"/>
                        <P>유저네임</P>
                    </MainGrid>
                     {/* 유저연락처 부분*/}
                </MainGrid>
                
           </MainGrid>
        </>
    )
};
const P=styled.p`
    font-size:17px;
    color:#65676b;
    font-weight: 600;

`;
const Sp=styled.p`
font-size:13px;
color:#65676b;
`;
export default RSide;