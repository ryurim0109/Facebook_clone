import React from 'react';
import Header from '../components/Header';
import { MainGrid } from '../elements/index';
import PostWrite from '../components/PostWrite';
import PostList from '../components/PostList';
import CommentWrite from '../components/CommentWrite';

const Main =()=>{
    return (
        <>
          <MainGrid bg="#F2F3F5">
            <Header />
           <MainGrid position="relative" top="56px" bg="#f2f3f5">
              <PostWrite />
              <PostList />
            </MainGrid>
          </MainGrid>
        </>
      );
};




export default Main;