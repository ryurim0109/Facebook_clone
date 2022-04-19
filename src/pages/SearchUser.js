import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { MainGrid } from '../elements/index';
import PostWrite from '../components/PostWrite';
import PostList from '../components/PostList';
import CommentWrite from '../components/CommentWrite';
import { useSelector,useDispatch } from 'react-redux';
import {postCreators as postActions} from '../redux/modules/post';




const SearchUser =(props)=>{

  const dispatch =useDispatch()
  const [pageno,setPageno] = React.useState(1);

  console.log(props.location.search)
  const search = (props.location.search).split("=")[1];
  console.log(search,"나는 서치");

  const searchList = useSelector((store) => store.post.search_list);
  console.log(searchList)

  //const token = sessionStorage.getItem("user");


  React.useEffect(()=>{
    
     dispatch(postActions.getSearchDB(search,pageno));
     
  },[search]);

  

    return (
        <>
          <MainGrid bg="#F2F3F5">
            <Header />
              <MainGrid position="relative" top="56px" bg="#f2f3f5">
                <PostWrite/>
                {searchList && searchList?.map((c,idx)=>{
                  return <PostList key={idx} {...c} />
                })}
              </MainGrid>
          </MainGrid>
          
        </>
      );
};




export default SearchUser;