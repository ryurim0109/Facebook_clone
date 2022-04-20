import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {MainGrid,Image,MainBtn,MainInput} from "../elements/index";
import { Dialog } from '@material-ui/core';
import defaultUserImage from '../img/기본프로필사진.png';
import PreImage from '../img/preview.png';
import { postCreators as postActions } from '../redux/modules/post';




const WriteModal = (props) => {
    const dispatch=useDispatch();
  // const detailPost = postList.find(post => post.postId === postId);

    const user_info=useSelector((state)=>state.user.user);
    //console.log(pageno)
    const userPro=user_info?.userImage;
    const _user=user_info?.userName;
    const {postId,postImageUrl,content, openModal, setModal} =props;
  

  const modalClose = () => {
    // console.log(detailPost)
    setModal(false);
  };

  const [imageSrc, setImageSrc] = useState("");
  const [imageFile, setImageFile] = useState("");
  const [_content, setContent] = useState(postId?content:"");
  
  //사진 미리보기
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  const token = sessionStorage.getItem("user");
  //console.log(token)
  

  const addPost =()=>{
    //글자수 100자 제한
    if(_content.length>100){
      window.alert('글자수는 100자 이내로 입력해주세요!');
      return;
    }
    if(imageFile === ''){
      window.alert('사진이 빠졌군요?')
      return;
    }
    //이미지 10mb제한
    let maxSize = 10 * 1024 * 1024;
    let fileSize=imageFile.size;
    if(fileSize > maxSize){
			window.alert("첨부파일 사이즈는 10MB 이내로 등록 가능합니다.");
      setImageSrc("");
			return false;
    }
    dispatch(postActions.addPostDB(token,_content,imageFile));
    setImageSrc("");
    setContent('');
    setModal(false);
  }

  const editPost=()=>{
    if(_content.length>100){
      window.alert('글자수는 100자 이내로 입력해주세요!');
      return;
    }
    let maxSize = 10 * 1024 * 1024;
    let fileSize=imageFile.size;
    if(fileSize > maxSize){
			window.alert("첨부파일 사이즈는 10MB 이내로 등록 가능합니다.");
      setImageSrc("");
			return false;
    }

    dispatch(postActions.updatePostDB(token,_content,imageFile,postId));
    
    setImageSrc("");
    setModal(false);
  }

  
    return (
      <>
      <Dialog maxWidth={'lg'} scroll='body' open={openModal}>
        <Outter>
        <MainGrid alignItems='center' display="flex" flexDirection="column" position='relative'>
            <Div>
                {postId? "게시글 수정하기" :"게시물 만들기"}
            </Div>
                <MainGrid
                position='absolute'
                top='-10px'
                right='40px'
                color='black'
                width='20px'
                padding='10px'
                >
                <MainBtn is_close _onClick={modalClose} />
                </MainGrid>

            <MainGrid display='flex' width="100%" flexDirection='row' alignItems='center'>
           
                <Image src={userPro==='없음'? defaultUserImage:userPro } />
                <p>{_user}님</p>
            </MainGrid>
            <MainGrid height="30%" overflowY="auto">
                <TextArea  placeholder="무슨 생각을 하고 계신가요?" defaultValue={content} maxlength="200" onChange={(e)=>{
                  // console.log(e.target.value);
                  setContent(e.target.value);
                }}/>
                <MainGrid
                  height="200px"
                  position='relative'
                  overflowY="scroll"
                >
                 <input type='file' id='postFileInput'  style={{display:"none"}} name="postFileInput" accept="image/jpeg, image/png, image/jpg"  onChange={(e)=>{
                  encodeFileToBase64(e.target.files[0]);
                  setImageFile(e.target.files[0]);
                  }} />
                  
                  <label htmlFor='postFileInput' id='inputLabelButton'>
                    {postId? 
                    ( <ImageBox>
                    <img src={imageSrc? imageSrc:postImageUrl}  alt="이미지미리보기"/>) 
                      
                    </ImageBox>):(<ImageBox>
                      {imageSrc ? (<img src={imageSrc} alt="이미지미리보기"/>) : (<img src={PreImage}  alt="이미지미리보기"/>) }
                      </ImageBox>)}
                  </label>
                
               
                </MainGrid>
                </MainGrid>
                  <MainGrid
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                    width="100%"
                    padding="0 10px"
                    border="1px solid #BEC3C9"
                    margin="16px 0"
                    borderRadius="20px"
                  >
                        
                        <p>게시물에 추가</p>
                        <MainBtn is_up />

                   
                  </MainGrid>
                  {postId?
                  (<MainBtn  width="100%" borderRadius="20px" color="#fff" _onClick={editPost} hover="#3578E5"
                  >
                 수정 </MainBtn>):(<MainBtn  width="100%" borderRadius="20px" color="#fff" _onClick={addPost} hover="#3578E5"
                  // _disabled={(_content === "" || !PreImage )? true : false}
                 >
                 게시
                </MainBtn>)
                  }
                
           
            </MainGrid>
           
            
          
        </Outter>
      </Dialog>
  
      </>
    );
};

const Outter=styled.div`
    width:500px;
    overflow:scroll;
    padding:10px;
    background:#fff;
    gap:10px;

    & p {
        font-weight:bold;
        color:#050505;
    }
    @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Div=styled.p`
    width:100%;
    text-align:center;
    border-bottom:1px solid #BEC3C9;
    font-size:24px;
    color:#050505;
    margin:0;
    padding:10px 0;
    font-weight:bold;
`;
const TextArea = styled.textarea`
  height: 140px;
  margin: 10px;
  width: 450px;
  border: none;
  outline: none;
  word-spacing: -0.4em;
  resize: none;
  overflow: auto;
  place ::-webkit-scrollbar {
    display: none;
  }
`;
const ImageBox =styled.div`

display:flex;
align-items:center;
justify-content:center;
background-size:cover;
border-radius:5px;
height:auto;
padding:5px 10px;

&:hover{background-color:#e1e2e7}

& img{
  width:100%;
  object-fit: cover;
}
`;


export default WriteModal;