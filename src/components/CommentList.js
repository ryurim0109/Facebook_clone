import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import defaultUserImage from '../img/기본프로필사진.png';
import {actionCreators as CommentAction} from '../redux/modules/Comment_module'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const CommentList = (props) => {
    const comment_list = useSelector((state) => state.Comment);
    const postIds = props.postId;
    const dispatch = useDispatch();
    const [pages,setPage] = useState(1);
    console.log(comment_list)
    console.log(comment_list)

    const [loading,setLoding] = useState(false);

    console.log(postIds)

    React.useEffect(() => {
        console.log('기동')
        dispatch(CommentAction.getComment({postId : postIds, page : pages}));
    },[])

    return (
      <div>
        <Box
        sx={{
          width: 400,
          display: 'flex',
          flexDirection : 'column',
          alignItems: 'center',
        }}>
          {comment_list?.comments && comment_list?.comments?.map((el,idx) => {
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
        <Footer_div>
        <div className='footer_container'>
          <div role="presentation" onClick={()=>setPage((prev)=> prev+1)}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit">
                댓글 더보기
              </Link>
            </Breadcrumbs>
          </div>
          {comment_list?.totalPage &&
          <Typography variant="overline" display="block" gutterBottom>총 {comment_list?.totalPage}페이지 중 {pages}페이지 </Typography> }
        </div>
        </Footer_div>
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

const Footer_div = styled.div`
  .footer_container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default CommentList;
