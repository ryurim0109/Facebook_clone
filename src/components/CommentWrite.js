import React from 'react'
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import { borderRadius } from '@mui/system';
import Box from '@mui/material/Box';
import defaultUserImage from '../img/기본프로필사진.png';
import { useDispatch } from 'react-redux';
import {actionCreators as CommentAction} from '../redux/modules/Comment_module'

const CommentWrite = (props) => {
    const postId = props.postId;
    const [comments,setComment] = React.useState('');
    const dispatch = useDispatch();

    const change_comment = (e) => {
      setComment(e.target.value)
    }

    const Entercheck = (e) => {
      if(e.key === 'Enter')
      {
        console.log(comments);
        const comment_info = {
          postId : 1,
          comment : comments,
        }
        dispatch(CommentAction.postComment(comment_info))
        e.target.value = "";
      }
    }

    return (
        <Comment_design>
        <div className='comment_container'>
        <Box
        sx={{
          width: 500,
          display: 'flex',
          alignItems: 'center',
        }}>
          <Stack direction="row" spacing={2} sx={{margin : '0px 10px' }}>
            <Avatar  sx={{ width: 32, height: 32 }} src={defaultUserImage}/>
          </Stack>
          <PostDiv placeholder='댓글을 입력하세요...' onChange={change_comment} onKeyUp={Entercheck}/>
        </Box>
        </div>
        </Comment_design>
    );
}

const Comment_design = styled.div`
    .comment_container{
        background-color: white;
        display: flex;
        padding: 5px;
    }
    /* input{
        background-color: aliceblue;
        border-radius: 30px;
        height: 30px;
        width: 400px;
    } */
`
const PostDiv=styled.input`
    width:400px;
    height:40px;
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
export default CommentWrite;