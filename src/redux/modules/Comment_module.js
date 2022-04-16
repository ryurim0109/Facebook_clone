import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import {instance} from '../../shared/api' 

//action
const ADD_COMMENT = 'ADD_COMMENT';
const GET_COMMENT = 'GET_COMMENT';

//action creators
 const addComment = createAction(ADD_COMMENT,(content) => ({content}));
 const putComment = createAction(GET_COMMENT,(content) => ({content}));

//initialState
const initialState = {
    comment : [{
        commentId : '',
        postId : '',
        content : '',
        userName : '',
        userId : '',
        createAt : '',
    }]
}

//댓글 추가요청 
const postComment = (Comment_info) => {
    return function (dispatch, getState,{history}){
        console.log('댓글요청 시작')
        console.log(Comment_info)

        instance.post('/api/comment',
        Comment_info
        ).then(function (response){
            console.log(response)
            dispatch(addComment(response.data));
        }).catch(function (error){
            console.log(error)
        })
    }
}

//댓글 가져오기
const getComment = (Comment_info) => {
    return function (dispatch, getState,{history}){
        console.log('댓글요청 시작')
        console.log(Comment_info)

        instance.get('/api/comment/' + Comment_info.postId
        ).then(function (response){
            console.log(response)
            dispatch(getComment(response.data));
        }).catch(function (error){
            console.log(error)
        })
    }
}


// reducer
export default handleActions(
    {
      [ADD_COMMENT]: (state, action) =>
        produce(state, (draft) => {
          draft.comment[action.payload.comment.commentId].unshift(action.payload.comment);
        }),
      [GET_COMMENT]: (state, action) =>
        produce(state, (draft) => {
          draft.comment = action.payload.comment;
        }),
    
    },
    initialState
  );


//action creator export
const actionCreators = {
    postComment,
    getComment,
  };
  
export { actionCreators };
