import React from 'react';
import { MainGrid,MainInput,Image,MainBtn } from '../elements/index';
import {history} from "../redux/configStore";
import styled from 'styled-components';
import defaultUserImage from '../img/logo.png';
import {AiFillHome} from 'react-icons/ai';
import { CgMenuGridO } from "react-icons/cg";


const Header =(props)=>{
    return (
        <>
        
          <HeaderBox>
             <Logo>
                <Image src={defaultUserImage}
                  size="40" _onClick={()=>{
                      history.push('/main')
                  }}
                />
                <MainBtn is_S />
            </Logo>
            <Middle>
              <div className="s">
              <AiFillHome style={{fontSize:"28px", color:"#1B74E4"}}/>
              </div>
              <div >
                <svg style={{ fill:"rgb(102 102 102)", height: '26', width: '26' }}>
                  <path d="M8.75 25.25C8.336 25.25 8 24.914 8 24.5 8 24.086 8.336 23.75 8.75 23.75L19.25 23.75C19.664 23.75 20 24.086 20 24.5 20 24.914 19.664 25.25 19.25 25.25L8.75 25.25ZM17.163 12.846 12.055 15.923C11.591 16.202 11 15.869 11 15.327L11 9.172C11 8.631 11.591 8.297 12.055 8.576L17.163 11.654C17.612 11.924 17.612 12.575 17.163 12.846ZM21.75 20.25C22.992 20.25 24 19.242 24 18L24 6.5C24 5.258 22.992 4.25 21.75 4.25L6.25 4.25C5.008 4.25 4 5.258 4 6.5L4 18C4 19.242 5.008 20.25 6.25 20.25L21.75 20.25ZM21.75 21.75 6.25 21.75C4.179 21.75 2.5 20.071 2.5 18L2.5 6.5C2.5 4.429 4.179 2.75 6.25 2.75L21.75 2.75C23.821 2.75 25.5 4.429 25.5 6.5L25.5 18C25.5 20.071 23.821 21.75 21.75 21.75Z"></path>
                </svg>
              </div>
              <div>
                <svg style={{ fill:"rgb(102 102 102)",height: '28', width: '28' }}>
                <path d="M25.5 14C25.5 7.649 20.351 2.5 14 2.5 7.649 2.5 2.5 7.649 2.5 14 2.5 20.351 7.649 25.5 14 25.5 20.351 25.5 25.5 20.351 25.5 14ZM27 14C27 21.18 21.18 27 14 27 6.82 27 1 21.18 1 14 1 6.82 6.82 1 14 1 21.18 1 27 6.82 27 14ZM7.479 14 7.631 14C7.933 14 8.102 14.338 7.934 14.591 7.334 15.491 6.983 16.568 6.983 17.724L6.983 18.221C6.983 18.342 6.99 18.461 7.004 18.578 7.03 18.802 6.862 19 6.637 19L6.123 19C5.228 19 4.5 18.25 4.5 17.327 4.5 15.492 5.727 14 7.479 14ZM20.521 14C22.274 14 23.5 15.492 23.5 17.327 23.5 18.25 22.772 19 21.878 19L21.364 19C21.139 19 20.97 18.802 20.997 18.578 21.01 18.461 21.017 18.342 21.017 18.221L21.017 17.724C21.017 16.568 20.667 15.491 20.067 14.591 19.899 14.338 20.067 14 20.369 14L20.521 14ZM8.25 13C7.147 13 6.25 11.991 6.25 10.75 6.25 9.384 7.035 8.5 8.25 8.5 9.465 8.5 10.25 9.384 10.25 10.75 10.25 11.991 9.353 13 8.25 13ZM19.75 13C18.647 13 17.75 11.991 17.75 10.75 17.75 9.384 18.535 8.5 19.75 8.5 20.965 8.5 21.75 9.384 21.75 10.75 21.75 11.991 20.853 13 19.75 13ZM15.172 13.5C17.558 13.5 19.5 15.395 19.5 17.724L19.5 18.221C19.5 19.202 18.683 20 17.677 20L10.323 20C9.317 20 8.5 19.202 8.5 18.221L8.5 17.724C8.5 15.395 10.441 13.5 12.828 13.5L15.172 13.5ZM16.75 9C16.75 10.655 15.517 12 14 12 12.484 12 11.25 10.655 11.25 9 11.25 7.15 12.304 6 14 6 15.697 6 16.75 7.15 16.75 9Z"></path>
                </svg>
              </div>
              <div>
                <svg style={{ fill:"rgb(102 102 102)",height: '26', width: '26' }}>
                <path d="M23.5 9.5H10.25a.75.75 0 00-.75.75v7c0 .414.336.75.75.75H17v5.5H4.5v-19h19v5zm0 14h-5v-6.25a.75.75 0 00-.75-.75H11V11h12.5v12.5zm1.5.25V4.25C25 3.561 24.439 3 23.75 3H4.25C3.561 3 3 3.561 3 4.25v19.5c0 .689.561 1.25 1.25 1.25h19.5c.689 0 1.25-.561 1.25-1.25z"></path>
                </svg>
              </div>
            </Middle>
            <MainGrid display="flex"alignItems="center" width="240px" padding="0 36px 0 0">
            <Btn>
              <CgMenuGridO  style={{fontSize:"28px"}}/>
              </Btn>
              <Btn>
              <svg style={{ height: '26', width: '26' }}>
                <path d='M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z'></path>
              </svg>
              </Btn>
              <Btn>
                <svg style={{ height: '26', width: '26' }}>
                  <path d='M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z'></path>
                </svg>
              </Btn>
              <Btn>
              <svg style={{height: '20', width: '20' }}>
              <path d="M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z"></path>
              </svg>
              </Btn>
            </MainGrid>
          </HeaderBox>
        </>
      );
};
const HeaderBox = styled.header`
  width:100%; 
  height:56px; 
  background:#fff;
  box-shadow:rgba(0, 0, 0, 0.1) 0px 2px 12px;
  position:fixed;
  top:0px;
  z-index:99;
  padding:0 16px;
  display:flex;
  align-items:center;
  justify-content: space-between;
`;
const Logo=styled.div`
    width:100px;
    height:56px;
    display:flex;
    align-items:center;
    cursor:pointer;
    justify-content: space-between;

`
const Middle= styled.div`
  margin:0 0 0 9%;
  width:500px;
  height:100%;
  display:flex;
  justify-content: space-between;

  & div{
    width:25%;
    height:100%;
    display:flex;
    align-items:center;
    border-radius:10px;
    justify-content:center;
    &:hover{
      background:#e0e0e0
    }
    
  }
  & div.s{
    width:25%;
    height:100%;
    border-radius:0px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-bottom:2px solid #1B74E4;
    
  }
  @media screen and (max-width: 500px) {
    display:none;
  }

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

    &:hover{
        background:#e0e0e0;
    }
`;


export default Header;