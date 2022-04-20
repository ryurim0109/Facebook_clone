import React from "react";
import { MainGrid,Image } from "../elements";
import styled from 'styled-components';
import defaultUserImage from '../img/기본프로필사진.png';


const Rooms =()=>{

    return(
        <Wrap>
            <MainGrid display="flex"  padding="8px 16px" height="56px" alignItems="center"  >
                <MainGrid display="flex" width="128px" border="2px solid #E7F3FF" padding="8px 4px" borderRadius="20px" alignItems="center" hover="#EBEDF0">
                    <R/> 
                    룸스 만들기
                </MainGrid>
                <Image src={defaultUserImage} />
                <Image src={defaultUserImage} />
                <Image src={defaultUserImage} />
            </MainGrid>
            
        </Wrap>
    )
};
const Wrap=styled.div`
    width: 500px;
    height:72px;
    display: flex;
    box-sizing:border-box;
    position:relative;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 3px;
    background:#fff;
    margin: 10px auto;
    border-radius: 10px;
    justify-content:start;
    align-items:center;
    padding:12px 0; 
    @media screen and (max-width: 500px) {
        width: 100%;
    }

`;
const R=styled.div`
    background-image:url('https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/TBPobbTsXfe.png');
    background-position: 0 -219px;
    background-size: 501px 244px;
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    margin-right:10px;

`;

export default Rooms;