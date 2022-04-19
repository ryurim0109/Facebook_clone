import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import {instance} from '../../shared/api' 
import axios from 'axios';

const GET_POST = 'GET_POST';
const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';
const CLICK_LIKE = 'CLICK_LIKE';
const SET_DETAILPOSTID = 'SET_DETAILPOSTID';


const getPost = createAction(GET_POST, (post_list,page) => ({ post_list,page }));
const addPost = createAction(ADD_POST, (post_list) => ({ post_list }));
const updatePost = createAction(UPDATE_POST, (postId, post) => ({
  postId,
  post,
}));
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }));
const clickLike = createAction(CLICK_LIKE, (postId) => ({ postId }));

const setDetailPostId = createAction(SET_DETAILPOSTID, (postId) => ({
  postId,
}));
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
  totalPage:{start :null,next:null,size:7}
};

const getPostDB = (pageno) => {
  //console.log(token);
  return (dispatch) => {
    instance.get(`/api/post/${pageno}`)
      .then((res) => {
        console.log(res.data.postList,"응답 포스트리스트");
        console.log(res.data.totalPage)
        dispatch(getPost(res.data.postList,res.data.totalPage));
      })
      .catch((err) => {
        console.log(err.response,"게시글 가져오기 오류");
        console.log(err,"게시글 가져오기 오류");
      });
  };
};

const addPostDB = (token,content,imageFile,pageno) => {
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
      //   window.alert('업로드 성공!!');
      //   console.log(res)
      //  dispatch(getPostDB(pageno))
      history.push('/main');
    }).catch((err)=>{
        console.log('업로드 실패!',err.response)
    })
}
    
};

const updatePostDB = (token,content,imageFile,postId,pageno) => {
  //console.log(content,imageFile)
  
  
    const file = new FormData();

    file.append("content", content);
    file.append("image", imageFile);

    return (dispatch, getState, { history }) => {
      axios.put(`http://52.79.228.83:8080/api/post/${postId}`,
      file,{
        headers: {
          Authorization: token,
          "Content-Type":"multipart/form-data",
        },
      }).then((res) =>{
          console.log(res.image);
          console.log(postId);
          console.log(content);

          window.alert('수정 성공!!');
          
          dispatch(getPostDB(pageno))
          history.replace('/main');
      }).catch((err)=>{
          console.log('수정 실패!',err.response)
      })
  }
  };

const deletePostDB= (postId,pageno) => {
  
    return (dispatch, getState, { history }) => {
      console.log(postId)
      instance.delete(`/api/post/${postId}`)
      .then((res) =>{
          window.alert('삭제성공')
          console.log(res)
          dispatch(getPostDB(pageno))
         history.push('/main');
      }).catch((err)=>{
          console.log('삭제 실패!',err.response)
      })
  }
  };


const clickLikeDB = (postId,pageno) => {
  return (dispatch) => {
    instance
      .post(`/api/post/like/${postId}`)
      .then((res) => {

        if(res.data===true){
          window.alert('좋아요를 누르셨습니다.')
        }else{
          window.alert('좋아요를 취소했습니다.')
        }
        
        // if (res.status !== 200) {
        //   return;
        // }
        dispatch(getPostDB(pageno))
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
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post_list.unshift(action.payload.post_list);
      }),
    [UPDATE_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.post_list.indexOf(
          (p) => p.postId === action.payload.postId
        );
        draft.post_list[idx + 1] = action.payload.post;
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        const editArr = [];
        draft.post_list.filter((val, idx) => {
          if (val.postId !== action.payload.postId) {
            editArr.push(val);
          }
        });
        draft.postList = editArr;
      }),
    [CLICK_LIKE]: (state, action) =>
      produce(state, (draft) => {
        let numArr = [];
        draft.post_List.filter((val, idx) => {
          if (val.postId === action.payload.postId) {
            return numArr.push(idx);
          }
        });
        console.log(numArr[0]);
        if (draft.post_List[numArr[0]].liked === true) {
          draft.post_List[numArr[0]].likeCount -= 1;
          draft.post_List[numArr[0]].liked = false;
        } else {
          draft.post_List[numArr[0]].likeCount += 1;
          draft.post_List[numArr[0]].liked = true;
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
  setDetailPostId,
  clickLikeDB,
};

export { postCreators };