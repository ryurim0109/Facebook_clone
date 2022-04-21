import React, {  useState,useCallback,useRef } from 'react';
import Header from '../components/Header';
import { MainGrid } from '../elements/index';
import PostWrite from '../components/PostWrite';
import PostList from '../components/PostList';
import CommentWrite from '../components/CommentWrite';
import { useSelector,useDispatch } from 'react-redux';
import {postCreators as postActions} from '../redux/modules/post';
import Spinner from '../components/Spinner';
import LSide from '../components/LSide';
import RSide from '../components/RSide';
import styled from 'styled-components';
import Post from '../components/Post';
import Rooms from '../components/Rooms'
import Chatroom from '../components/Chatroom';
import ContactUs from '../components/ContactUs';

const Main =()=>{

  const dispatch =useDispatch();
  const post_list =useSelector((state)=>state.post.post_list);
  const totalPage = useSelector((state)=>state?.post?.page?.totalPage);
  //console.log(crrPage)

  //const token = sessionStorage.getItem("user");
  const [pageno,setPageno] = useState(1);
  const [target, setTarget] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const callback = async ([entry], observer) => {
   // console.log(entry);
    if (entry.isIntersecting && !isLoading) {
      observer.unobserve(entry.target);
      setIsLoading(true);
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      if(post_list?.length === 7  ){
        if(totalPage>pageno){
          setPageno((pre) => pre + 1);
        }
      }

      
      setIsLoading(false);
      observer.observe(entry.target);
    }
  };

  React.useEffect(() => {
    let observer;
    if (target) {
      observer = new IntersectionObserver(callback, { threshold: 1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  React.useEffect(()=>{
    
      dispatch(postActions.getPostDB(pageno));
      console.log(pageno)
  },[pageno]);

 

    return (
        <>
          <MainGrid bg="#F2F3F5">
            <Header />
            <MainGrid display="flex" padding="16px 0 0 8px" position="relative" top="56px" bg="#F2F3F5" height="100vh-56px">
              <DisplayNone  >
                  <LSide />
              </DisplayNone>
                <MainGrid position="relative" >
                  <Post />
                  <PostWrite/>
                  <Rooms/>
                  {post_list && post_list?.map((c,idx)=>{
                    return <PostList key={idx} {...c} />
                  })}
                 
                  
                </MainGrid>
                <ConBox >
                  <RSide/>
                </ConBox>
              </MainGrid >
              {isLoading ? (
                    <Spinner />
                  ): null }

              { post_list?.length === 7 && totalPage>pageno ?<div ref={setTarget}> </div>:
              null}
                 
              </MainGrid>
        </>
      );
};

const DisplayNone=styled.div`
  width:100%;
  background:#F2F3F5;
  height:100vh;

  @media screen and (max-width: 900px) {
    display:none;
  }
`;
const ConBox=styled.div`
  width:100%;
  background:#F2F3F5;
  height:100vh;
  @media screen and (max-width: 783px) {
    display:none;
  }

`;



export default Main;