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
    comments : []
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


            dispatch(addComment(Comment_info));
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
        instance.get('/api/comment/' + 1 +'/'+ 1
        ).then(function (response){
            console.log(response)
            dispatch(putComment(response.data));
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
            console.log(action.payload.content)
            // draft.comments.unshift(action.payload.content);
        }),
      [GET_COMMENT]: (state, action) =>
        produce(state, (draft) => {
          console.log(action.payload.content)
          draft.comments = action.payload.content;
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
