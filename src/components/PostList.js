import React,{useState} from 'react';
import { BsHandThumbsUp,BsChatSquare,BsFillHandThumbsUpFill } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { history } from '../redux/configStore';
import WriteModal from './WriteModal';

import styled from 'styled-components';
import { MainGrid, Image, MainBtn} from '../elements/index';
// import PostWriteModal from './PostWriteModal';
import defaultUserImage from '../img/기본프로필사진.png';
import CommentWrite from './CommentWrite';
import likeBtn from '../img/like.svg';
import { postCreators as postActions } from '../redux/modules/post';

const PostList = (props) => {

  const [fcstate,setFcstate] = React.useState(false);
  const dispatch = useDispatch();
  const {postId,content, likeCnt,commentCnt,createAt,postImageUrl,userName,userImageUrl,userId,like } =props;
  const user_info=useSelector((state)=>state.user.user);
  const userPro=user_info?.userImage;
  
  //console.log(pageno)
  
  const is_me = userName === user_info?.userName;


  const [openModal, setModal] = useState(false);
  const modalOpen = () => {
    setModal(true);
  };

  return (
    <>
      <PostL>
        <MainGrid width="100%"display="flex" justifyContent="start-end" padding="0 16px">
          <MainGrid width="10%" position="relative">
            {is_me ? (<Image src={userPro? userPro:defaultUserImage} size="36"/>):
            (<Image src={userImageUrl==='없음' ? defaultUserImage:userImageUrl} size="36"/>)}
          
          </MainGrid>
          <MainGrid width="70%" position="relative" >
            <p style={{fontSize:"15px",color:"#050505"}}> {userName}</p>
            <p style={{fontSize:"13px",color:"#65676b"}}>{createAt}</p>
          </MainGrid>
          {is_me &&  
          <MainGrid  display="flex" justifyContent="space-between" width="20%" position="relative">
            <MainBtn is_edit  _onClick={()=>{
             modalOpen(postId)
            }}/>
            <MainBtn is_del _onClick={()=>{
               window.confirm("게시물을 삭제하시겠습니까?")
               ? dispatch(postActions.deletePostDB(postId))
               : window.alert("삭제가 취소되었습니다");
              
            }}/>
          
          </MainGrid>}
          <WriteModal openModal={openModal} userName={userName} postId={postId} postImageUrl={postImageUrl} content={content} setModal={setModal} />
        </MainGrid>
        {/* 게시글 */}
        <MainGrid display="flex" height="auto" padding="0 16px">
        <PT>{content}</PT>
        </MainGrid>
        <img src={postImageUrl} alt="이미지"/>
       
        <MainGrid display="flex" alignItems="center" justifyContent="space-between" padding="0 16px">
          <MainGrid display="flex" alignItems="center" width="85%">
           <Image src={likeBtn} size="20"/> <p style={{color:"#65676b"}}>{likeCnt}</p>
          </MainGrid>
          <p  width="15%" style={{color:"#65676b"}}>
            댓글 {commentCnt}개
          </p>
        </MainGrid>
        <MainGrid  padding="0 16px">
        <MainGrid display="flex" borderTop="1px solid #e4e6eb" borderBottom="1px solid #e4e6eb" margin="5px 0">
          {like===true ?(<BBtn onClick={()=>{
            dispatch(postActions.clickLikeDB(postId))
          }}>
             <BsFillHandThumbsUpFill/>좋아요
          </BBtn>) : (
            <LBtn onClick={()=>{
            dispatch(postActions.clickLikeDB(postId))
          }}>
             <Like/>좋아요
          </LBtn>
          )}
          
          <LBtn onClick={() => {setFcstate((prev) => !prev)}}>
            <Chat/>댓글달기
          </LBtn>
        </MainGrid>
        {fcstate && <CommentWrite {...props} />}
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
  position:relative;
  gap:5px;
  margin: 20px auto;
  border-radius: 10px;
  background-color:#fff;
  height:auto;
  padding:12px 0; 
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
  font-size:16px;

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
const BBtn=styled.div`
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
    color:#1877F2;
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