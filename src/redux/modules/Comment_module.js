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
    comments : [],
    totaLPage : 1,
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
        instance.get(`/api/comment/${Comment_info.postId}/${Comment_info.page}`
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
       //댓글 가져오기 테스트 추가 진행 필요함
      [ADD_COMMENT]: (state, action) =>
        produce(state, (draft) => {
            const arrays = [...state.comments.comments] //state를 배열로 복사 
            arrays.unshift(action.payload.content); //복사한 배열에 첫번쨰 요소에 신규 comment 추가 
            draft.comments.comments = arrays 
        }),
      [GET_COMMENT]: (state, action) =>
        produce(state, (draft) => {
          if(state.comments.comments)
            action.payload.content.comments =  state.comments.comments.concat(action.payload.content.comments)
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
