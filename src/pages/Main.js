import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { MainGrid } from '../elements/index';
import PostWrite from '../components/PostWrite';
import PostList from '../components/PostList';
import CommentWrite from '../components/CommentWrite';
import { useSelector,useDispatch } from 'react-redux';
import {postCreators as postActions} from '../redux/modules/post';
import Spinner from '../components/Spinner';
import Chatroom from '../components/Chatroom';



const Main =()=>{

  const dispatch =useDispatch()

  const post_list =useSelector((state)=>state.post.post_list);

  //const token = sessionStorage.getItem("user");
  const [pageno,setPageno] = React.useState(1);
  const [bottom,setBottom] =React.useState(''); //바텀이 어디인지 인식하는 타겟

  const [isLoading, setIsLoading] = React.useState(false);


  React.useEffect(()=>{
    
      dispatch(postActions.getPostDB(pageno));
      console.log(pageno)
  },[]);

  // React.useEffect(() => {
  //   let observer;
  //   if (bottom) {
  //     observer = new IntersectionObserver(getPost, {
  //       threshold: 1,
  //     });
  //     observer.observe(bottom);
  //     return () => observer && observer.disconnect();
  //   }
  // }, [bottom]);

    return (
        <>
          <MainGrid bg="#F2F3F5">
            <Header />
              <MainGrid position="relative" top="56px" bg="#f2f3f5">
                <PostWrite/>
                {post_list && post_list?.map((c,idx)=>{
                  return <PostList key={idx} {...c} />
                })}
                {isLoading ? (
                  <Spinner />
                ): null }
                <div ref={setBottom}> </div>
              </MainGrid>
              <Chatroom />
          </MainGrid>
          
        </>
      );
};




export default Main;