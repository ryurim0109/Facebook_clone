import React from 'react';
import Header from '../components/Header';
import { MainGrid } from '../elements/index';
import PostWrite from '../components/PostWrite';

const Main =()=>{
    return (
        <>
          <MainGrid bg="#F2F3F5">
            <Header />
            <PostWrite />
          </MainGrid>
        </>
      );
};




export default Main;