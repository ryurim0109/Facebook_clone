import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../shared/api';
import axios from 'axios';
import {instance} from '../../shared/api' 

const GET_POST = 'GET_POST';
const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';
//const CLICK_LIKE = 'CLICK_LIKE';
const SET_DETAILPOSTID = 'SET_DETAILPOSTID';


const getPost = createAction(GET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const updatePost = createAction(UPDATE_POST, (postId, post) => ({
  postId,
  post,
}));
const deletePost = createAction(DELETE_POST, (postId) => ({ postId }));
//const clickLike = createAction(CLICK_LIKE, (postId) => ({ postId }));

const setDetailPostId = createAction(SET_DETAILPOSTID, (postId) => ({
  postId,
}));
const initialState = {

};

const getPostDB = (pageno,token) => {
  console.log(pageno);
  return (dispatch) => {
    axios.get(`http://52.79.228.83:8080/api/post/${pageno}`,
    {
      headers: {
        Authorization: token
      },
    })
      .then((res) => {
        console.log(res.data.postList,"응답 포스트리스트");
        dispatch(getPost(res.data.postList));
      })
      .catch((err) => {
        console.log(err.response,"게시글 가져오기 오류");
      });
  };
};

const addPostDB = (token,content,imageFile) => {
  console.log(token,content,imageFile);
  

  const file = new FormData();

  file.append("content", content);
  file.append("image", imageFile);
  // for (let value of file.values()) {
  //   console.log(value);
  // }
  return (dispatch, getState, { history }) => {
    axios.post(`http://52.79.228.83:8080/api/post`,
    file,{
      headers: {
        Authorization: token,
        "Content-Type":"multipart/form-data",
      },
    }).then( (res) =>{
        alert(res.msg)
        console.log(res.data.post,"난 포스팅추가 res.data.post");
        console.log(res.data,"난 포스팅추가 res.data");
        console.log(res,"게시글 추가 res")
       
        dispatch(addPost(res.data.posts));
        history.replace('/main');
    }).catch((err)=>{
        console.log('업로드 실패!',err.response)
    })
}
    
};

const updatePostDB = (postId, postInfo) => {
  return (dispatch) => {
    apis
      .updatePost(postId, postInfo)
      .then((res) => {
        console.log(res);
        dispatch(updatePost(postId, res.data.posts));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const deletePostDB= (postId) => {
  return (dispatch) => {
    apis
      .deletePost(postId)
      .then((res) => {
        console.log(res);
        if (res === undefined) {
          return;
        }
        dispatch(deletePost(postId));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// const clickLikeMiddleware = (postId) => {
//   return (dispatch) => {
//     apis
//       .clickLike(postId)
//       .then((res) => {
//         console.log(res);
//         if (res.status !== 200) {
//           return;
//         }
//         dispatch(clickLike(postId));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.post_list);
        draft.post_list = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        console.log(draft);
        draft.post_list.unshift(action.payload.post_list);
      }),
    [UPDATE_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.post_list.indexOf(
          (p) => p.postId === action.payload.postId
        );
        draft.post_list[idx + 1] = action.payload.post;
      }),
    [SET_DETAILPOSTID]: (state, action) =>
      produce(state, (draft) => {
        draft.detailPostId = action.payload.postId;
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
    // [CLICK_LIKE]: (state, action) =>
    //   produce(state, (draft) => {
    //     let numArr = [];
    //     draft.postList.filter((val, idx) => {
    //       if (val.postId === action.payload.postId) {
    //         return numArr.push(idx);
    //       }
    //     });
    //     console.log(numArr[0]);
    //     if (draft.postList[numArr[0]].liked === true) {
    //       draft.postList[numArr[0]].likeCount -= 1;
    //       draft.postList[numArr[0]].liked = false;
    //     } else {
    //       draft.postList[numArr[0]].likeCount += 1;
    //       draft.postList[numArr[0]].liked = true;
    //     }
    //   }),
  },
  initialState
);

const postCreators = {
  getPostDB,
  addPostDB,
  updatePostDB,
  deletePostDB,
  setDetailPostId,
};

export { postCreators };