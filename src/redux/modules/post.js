import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import {instance} from '../../shared/api' 
import axios from 'axios';

const GET_POST = 'GET_POST'; //게시물 가져오기
const ADD_POST = 'ADD_POST'; //게시물 추가하기
const UPDATE_POST = 'UPDATE_POST'; //게시물 수정하기
const DELETE_POST = 'DELETE_POST'; //게시물 삭제하기
const CLICK_LIKE = 'CLICK_LIKE'; //좋아요
const SEARCH = "SEARCH";
const LOADING = "LOADING";


const getPost = createAction(GET_POST, (post_list,page) => ({ post_list,page }));
const addPost = createAction(ADD_POST, (post_list) => ({ post_list }));
const updatePost = createAction(UPDATE_POST, (post,postId) => ({
  post,
  postId,
  
}));
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }));
const clickLike = createAction(CLICK_LIKE, (postId) => ({ postId }));
const search = createAction(SEARCH, (search_list,page) => ({ search_list,page }));

const initialState = {
  post_list:[{
    postId:1,
    content:"ㅋ키키키키키",
    likeCnt:11,
    commentCnt:11,
    createAt:'2022-04-16 10:00:00',
    userImageUrl:"https://i.pinimg.com/474x/19/08/a7/1908a7eae6903f9d5861b62b1e025788.jpg",
    postImageUrl:"https://i.pinimg.com/474x/19/08/a7/1908a7eae6903f9d5861b62b1e025788.jpg",
    userName:"키키키",
    userId:1,
    like:"false"
  },],
  totalPage:1,
};

const getPostDB = (pageno) => {
  //console.log(pageno);
  return (dispatch) => {
    instance.get(`/api/post/${pageno}`)
      .then((res) => {
      
        console.log(res.data.postList,"응답 포스트리스트");
        console.log(res.data.totalPage)
        console.log(res.data)
        //console.log(res.data.currentPage)
        dispatch(getPost(res.data.postList,res.data.totalPage));
      })
      .catch((err) => {
        console.log(err.response,"게시글 가져오기 오류");
        console.log(err,"게시글 가져오기 오류");
      });
  };
};
export const getSearchDB = (username,pageno) => {
 // console.log(username)
  return function (dispatch, getState, { history }) {
      
      instance
      .get(`/api/post/${username}/${pageno}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const postList = res.data.postList;
        const totalPage = res.data.totalPage;
       
        dispatch(search(postList, totalPage));
      }).catch((err)=>{
        console.log(err, "검색에러다!!!");
        console.log(err.response, "검색에러다!!!");
      })
      
  };
};

const addPostDB = (token,content,imageFile) => {
  //console.log(token,content,imageFile);
  const file = new FormData();

  file.append("content", content);
  file.append("image", imageFile);
  // for (let value of file.values()) {
  //   console.log(value);
  // }
  return (dispatch, getState, { history }) => {
    //15.164.96.141:8080
    //52.79.228.83:8080
    axios.post(`http://15.164.96.141:8080/api/post`,

    file,{
      headers: {
        Authorization: token,
        "Content-Type":"multipart/form-data",
      },
    }).then((res) =>{
      console.log(res.data)
      dispatch(addPost(res.data));
      window.alert('업로드 성공!!');
      //   console.log(res)
      //  dispatch(getPostDB(pageno))
      history.push('/main');
    }).catch((err)=>{
        console.log('업로드 실패!',err.response)
    })
}
    
};

const updatePostDB = (token,content,imageFile,postId) => {
  //console.log(content,imageFile)
  
  
    const file = new FormData();

    file.append("content", content);
    file.append("image", imageFile);

    return (dispatch, getState, { history }) => {
      axios.put(`http://15.164.96.141/api/post/${postId}`,
      file,{
        headers: {
          Authorization: token,
          "Content-Type":"multipart/form-data",
        },
      }).then((res) =>{
       
    
          console.log(res.data)
          window.alert('수정 성공!!');
          dispatch(updatePost(res.data,res.data.postId))
          history.replace('/main');
        
          
      }).catch((err)=>{
          console.log('수정 실패!',err.response)
      })
  }
  };
const deletePostDB= (postId) => {
  return (dispatch, getState, { history }) => {
      console.log(postId)
      
      instance.delete(`/api/post/${postId}`)
      .then((res) =>{
          window.alert('삭제성공')
          console.log(res)
          dispatch(deletePost(postId))
         
      }).catch((err)=>{
          console.log('삭제 실패!',err.response)
      })
  }
  };


const clickLikeDB = (postId) => {
  return (dispatch) => {
    instance
      .post(`/api/post/like/${postId}`)
      .then((res) => {

        if(res.data===true){
          window.alert('좋아요를 누르셨습니다.')
        }else{
          window.alert('좋아요를 취소했습니다.')
        }
        dispatch(clickLike(postId))
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        //console.log(action.payload.post_list);
        draft.post_list = action.payload.post_list;
        draft.page = action.payload.page;
      }),
      [SEARCH]: (state, action) =>
      produce(state, (draft) => {
       // console.log(action.payload.search_list);
        draft.search_list = action.payload.search_list;
        draft.page = action.payload.page;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post_list.unshift(action.payload.post_list);
      }),
    [UPDATE_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.post_list.findIndex(
          (p) => p.postId === action.payload.postId
        );
        draft.post_list[idx] = {...draft.post_list[idx],...action.payload.post}
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        let de_list = draft.post_list.filter((val)  => 
        val.postId !== action.payload.postId
        );
        draft.post_list=de_list;
      }),
    [CLICK_LIKE]: (state, action) =>
      produce(state, (draft) => {
        let numArr = [];
        draft.post_list.filter((val, idx) => {
          if (val.postId === action.payload.postId) {
            return numArr.push(idx);
          }
        });
        console.log(numArr[0]);
        if (draft.post_list[numArr[0]].like === true) {
          draft.post_list[numArr[0]].likeCnt -= 1;
          draft.post_list[numArr[0]].like = false;
        } else {
          draft.post_list[numArr[0]].likeCnt += 1;
          draft.post_list[numArr[0]].like = true;
        }
      }),
  },
  initialState
);

const postCreators = {
  getPostDB,
  addPostDB,
  updatePostDB,
  deletePostDB,
  clickLikeDB,
  getSearchDB,
};

export { postCreators };