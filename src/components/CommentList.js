import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import defaultUserImage from '../img/기본프로필사진.png';
import {actionCreators as CommentAction} from '../redux/modules/Comment_module'
import {useInView} from 'react-intersection-observer'

const CommentList = (props) => {
    const comment_list = useSelector((state) => state.Comment.comments);
    const postIds = props.postId;
    const dispatch = useDispatch();
    const [pages,setPage] = useState(1);
    console.log(comment_list)

    const [loading,setLoding] = useState(false);
    const [ref,inView] = useInView();

    console.log(postIds)

    React.useEffect(() => {
        dispatch(CommentAction.getComment({postId : postIds, page : pages}));
    },[pages])

    return (
      <div>
        <Box
        sx={{
          width: 400,
          display: 'flex',
          flexDirection : 'column-reverse',
          alignItems: 'center',
        }}>
          {comment_list.comments && comment_list.comments.map((el,idx) => {
            return (
              <Stack key={idx} direction="row" spacing={2} sx={{margin : '8px 0px 0px 75px' }} >
                <Avatar sx={{ width: 32, height: 32 }} src={defaultUserImage}/>
                  <Comment_p >
                    <Comment_title>{el.userName}</Comment_title>
                    <Comment_content>{el.content}</Comment_content>
                  </Comment_p>
              </Stack>
            );  
          })
          }
        </Box>
        <div>
        <button onClick={()=>setPage((prev)=> prev+1)}>댓글 더보기</button>
        <p>총 댓글 페이지</p>
        </div>
      </div>
    );
}

const Comment_p=styled.div`
    width:395px;
    height:auto;
    background-color:#eee;
    color:#67696d;
    padding:10px;
    box-sizing:border-box;
    border-radius:25px;
    cursor:pointer;
    text-align:left;
    border:none;
    &:visited{
      background-color:#e0e0e0;
      border:none;
    }
`;

const Comment_title=styled.p`
  font-weight: bolder;
  color: black;
  font-size: 16px;
`;
const Comment_content=styled.p`
  margin-top: 10px;
  font-size: 13px;
  font-weight: lighter;
`;

export default CommentList;