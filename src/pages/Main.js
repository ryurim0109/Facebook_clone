import React, { useEffect } from 'react';
import Header from '../components/Header';
import { MainGrid } from '../elements/index';
import PostWrite from '../components/PostWrite';
import PostList from '../components/PostList';
import CommentWrite from '../components/CommentWrite';
import { useSelector,useDispatch } from 'react-redux';
import {postCreators as postActions} from '../redux/modules/post'


const Main =()=>{

  const dispatch =useDispatch()

  const post_list =useSelector((state)=>state.post.post_list);
  const token = sessionStorage.getItem("user");
  console.log(token)
  const [pageno,setPageno] = React.useState(1);


  React.useEffect(()=>{
    
      dispatch(postActions.getPostDB(pageno,token));
    
    
  },[])

    return (
        <>
          <MainGrid bg="#F2F3F5">
            <Header />
           <MainGrid position="relative" top="56px" bg="#f2f3f5">
              <PostWrite/>
              {post_list && post_list?.map((c,idx)=>{
                return <PostList key={idx} {...c} />
              })}
              
            </MainGrid>
          </MainGrid>
        </>
      );
};




export default Main;