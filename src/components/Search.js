import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { MainGrid,MainInput } from '../elements';
import styled from 'styled-components';
import { IoArrowBack } from "react-icons/io5";
import { postCreators as postActions } from '../redux/modules/post';
import { history } from '../redux/configStore';

const Search =(props)=>{

  const [userSearch,setUserSearch] = React.useState('');
    const dispatch = useDispatch();

    const search_user = (e) => {
      setUserSearch(e.target.value);
      console.log(e.target.value)
    }

    const Entercheck = (e) => {
      if(e.key === 'Enter')
      {
        console.log(userSearch);
        history.push(`discover?query=${userSearch}`);
       // dispatch(postActions.getSearchDB(userName))
        e.target.value = "";
      }
    }
  
    const {setSearchBox} =props;
    const closeSh =()=>{
      setSearchBox(false);
    }

    return(
        <>
        <MainGrid width="360px" position="absolute"top="0" left="0"height="160px">
          <SerB>
            <MainGrid display="flex" padding="5px" justifyContent='space-between'  alignItems='center'>
                <button onClick={closeSh}><IoArrowBack fontSize="24px"/></button>
                <input type="text"  maxLength='10'  placeholder="Facebook 검색" onChange={search_user} onKeyUp={Entercheck}/>
            </MainGrid>
          </SerB>
           
        </MainGrid>
        
        </>
    )
};
const SerB=styled.div`
  width: 100%;
  box-sizing:border-box;
  display: flex;
  flex-direction: column;
  position:relative;
  gap:5px;
  border-radius: 8px;
  background-color:#fff;
  padding:12px 0; 
  box-shadow:rgba(0, 0, 0, 0.1) 0px 2px 12px;

  & button{
    background:none;
    border:none;
  }

  & input{
    border:none;
    background-color:#f0f2f5;
    width:80%;
    padding:10px;
    outline:none;
    border-radius:10px;

  }
  `
 

export default Search;