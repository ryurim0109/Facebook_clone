import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import {instance} from '../../shared/api' 

//action
const ADD_COMMENT = 'ADD_COMMENT';
// const GET_COMMENT = 'GET_COMMENT';

//action creators
 const addComment = createAction(ADD_COMMENT,(content) => ({content}));

//initialState
const initialState = {
    user : {
        id : '',
        passward : ''
    }
}

//댓글 추가요청 
const postComment = (Comment_info) => {
    return function (dispatch, getState,{history}){
        console.log('댓글요청 시작')
        console.log(Comment_info)
        instance.get('/api/comment',
        Comment_info
        ).then(function (response){
            console.log(response)
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
          draft.user = action.payload.user;
        }),
    //   [LOGOUT]: (state, action) =>
    //     produce(state, (draft) => {
    //         sessionStorage.clear();
    //     }),
    },
    initialState
  );


//action creator export
const actionCreators = {
    postComment,
  };
  
export { actionCreators };
