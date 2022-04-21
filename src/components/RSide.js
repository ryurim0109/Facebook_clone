import React, { useState } from "react";
import { MainGrid,Image } from "../elements";
import {useDispatch, useSelector} from 'react-redux';
import defaultUserImage from '../img/기본프로필사진.png';
import styled from 'styled-components';
import {actionCreators as UserListActions} from '../redux/modules/CurrentUserList_module'
import Chatroom from "./Chatroom";
import { Link } from 'react-router-dom';

const RSide =(props)=>{
    const dispatch = useDispatch();
    const user_info=useSelector((state)=>state.user.user);
    const post_list =useSelector((state)=>state.post.post_list);
    const user_list =useSelector((state)=>state.curinput.userlist);
    const prof = post_list?.userImageUrl;
    const _user = post_list?.userName;
    const [isOpens,setIsopens] = useState(false);
    const [subscribes,setSubscribers] = useState('');
    const [subscribe_name,setSubscriber_name] = useState('');
    console.log(user_info)
    console.log(user_list)
    React.useEffect(() => {
        dispatch(UserListActions.getUserLIst());
    },[])
    
    const Call_Charroom = (user) => {
        setIsopens((prev)=> !prev)
        setSubscribers(user.userId);
        setSubscriber_name(user.userName)
    }

    return (
        <>
           <MainGrid  width="264px" minHeight="700px" overflowY="scroll" position="fixed" right="0" >
                <P>광고</P>
                <MainGrid display="flex" flexDirection="column" alignItems="center">
                    <MainGrid display="flex" height="90px" _onClick={() => window.open('https://github.com/bigtyno931128', '_blank')}>
                        <Image shape="radius" size="70"

                        src="https://avatars.githubusercontent.com/u/99080911?v=4"/>
                        <MainGrid width="60%" padding="0 5px">
                            <p>최강 팀장 문현상</p> 
                            <Sp>https://github.com <br/>/bigtyno931128</Sp> 
                        </MainGrid>
                    </MainGrid>
                    <MainGrid display="flex" height="90px" _onClick={() => window.open('https://github.com/jsjune', '_blank')}>
                        <Image shape="radius" size="70"

                        src="https://avatars.githubusercontent.com/u/94538575?v=4"/>
                        <MainGrid width="60%" padding="0 5px">
                            <p>매운 깍두기 정상준</p> 
                            <Sp>https://github.com <br/>/jsjune</Sp> 
                        </MainGrid>
                    </MainGrid>
                    <MainGrid display="flex" height="90px" _onClick={() => window.open('https://github.com/GyuwonY', '_blank')}>
                        <Image shape="radius" size="70"

                        src="https://avatars.githubusercontent.com/u/93954839?v=4"/>
                        <MainGrid width="60%" padding="0 5px">
                            <p>비선실세 유규원</p> 
                            <Sp>https://github.com <br/>/GyuwonY</Sp> 
                        </MainGrid>
                    </MainGrid>
                    <MainGrid display="flex" height="90px" _onClick={() => window.open('https://github.com/suns2131', '_blank')}>
                        <Image shape="radius" size="70"

                        src="https://avatars.githubusercontent.com/u/42165194?v=4"/>
                        <MainGrid width="60%" padding="0 5px">
                            <p>프론트 에이스 윤선식</p> 
                            <Sp>https://github.com <br/>/suns2131</Sp> 
                        </MainGrid>
                    </MainGrid>
                    <MainGrid display="flex"  height="90px"  _onClick={() => window.open('https://github.com/ryurim0109', '_blank')}>
                        <Image shape="radius" size="70"

                        src="https://avatars.githubusercontent.com/u/96809979?v=4"/>
                        <MainGrid width="60%" padding="0 5px">
                            <p>유부초밥녀 김유림</p> 
                            <Sp>https://github.com <br/>/ryurim0109</Sp> 
                        </MainGrid>
                    </MainGrid>
                    
                    <MainGrid display="flex"  height="40px"margin ="10px 0" borderTop="1px solid #DADDE1">
                        <P>연락처</P>
                    </MainGrid>
                    {/* 유저연락처 부분 map돌리면 될것같슴돠~! */}
                    {user_list && user_list.map((el, idx) => {
                        return (
                        <MainGrid minHeight="700px" key={idx}  overflowY="scroll">
                            <MainGrid height="44px" display="flex" alignItems="center" hover="#e4e6eb" borderRadius="8px" _onClick ={()=> Call_Charroom(el)}>
                                <Image src={prof==='없음'?defaultUserImage:prof}  size="28" />
                                <P>{el.userName}</P>
                            </MainGrid>
                        </MainGrid>
                        );
                    })}
                    
                    {isOpens &&  <Chatroom publishers = {user_info.userId} subscribes={subscribes} name = {subscribe_name} />}
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