import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import {instance} from '../../shared/api' 


//action
const ADD_COMMENT = 'ADD_COMMENT';
const GET_COMMENT = 'GET_COMMENT';
const DEL_COMMENT = 'DEL_COMMENT';
const UPDATE_COMMENT = 'UPDATE_COMMENT';

//action creators
 const addComment = createAction(ADD_COMMENT,(content) => ({content}));
 const putComment = createAction(GET_COMMENT,(content) => ({content}));
 const deleteComment = createAction(DEL_COMMENT,(content) => ({content}));
 const updateComment = createAction(UPDATE_COMMENT,(content) => ({content}));

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
const getComment = (Comment_info, type) => {
    return function (dispatch, getState,{history}){
        console.log('댓글요청 시작')
        console.log(Comment_info)
        instance.get(`/api/comment/${Comment_info.postId}/${Comment_info.page}`
        ).then(function (response){
            console.log(response)
            
            dispatch(putComment({
                comment : response.data,
                type : type
            }));
        }).catch(function (error){
            console.log(error)
        })
    }
}

const DelComment = (Comment_info) => {
    return function(dispatch,getState,{history}){
        console.log(Comment_info)
        instance.delete(`/api/comment/${Comment_info.commentid}`,{
            commentId : Comment_info.commentId
        }).then(function (response){
            console.log(response)
            dispatch(deleteComment(Comment_info.commentid))
        }).catch(function (error){
            console.log(error)
        })
    }
}

const Put_Comment = (Comment_info) => {
    return function (dispatch, getState, {history}){
        console.log(Comment_info);
        instance.put(`/api/comment/${Comment_info.commentId}`,Comment_info
        ).then(function (response){
            console.log(response)
            dispatch(updateComment(Comment_info))
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
            const arrays = [...state.comments] //state를 배열로 복사 
            arrays.unshift(action.payload.content); //복사한 배열에 첫번쨰 요소에 신규 comment 추가 
            draft.comments = arrays 
        }),
      [GET_COMMENT]: (state, action) =>
        produce(state, (draft) => {
            console.log(action.payload.content.comment.comments)
            console.log(action.payload.content.type);
            console.log(state.comments)
            if(action.payload.content.type)
            {
                if(state.comments)
                    action.payload.content.comment.comments =  action.payload.content.comment.comments.concat(state.comments)
            }
          draft.comments = action.payload.content.comment.comments;
        }),
      [DEL_COMMENT]: (state, action) =>
        produce(state, (draft) => {
            console.log(action.payload.content)
            const indexs = state.comments.findIndex(el => el.commentId === action.payload.content)
            console.log(indexs)
            const arrays = [...state.comments];
            arrays.splice(indexs,1);
            draft.comments = arrays;
        }),
        [UPDATE_COMMENT]: (state, action) =>
        produce(state, (draft) => {
            console.log(action.payload.content)
            const idxs = action.payload.content
            const indexs = state.comments.findIndex(el => (el.commentId === idxs.commentId && el.postId === idxs.postId ))
            console.log(indexs)
            const arrays = [...state.comments];
            console.log(arrays[indexs])
            console.log(arrays[indexs].content)
            const updt =  action.payload.content.comment
            
            arrays[indexs].content = updt;
            console.log(arrays[indexs])
            draft.comments = arrays;
        }),
    },
    initialState
  );


//action creator export
const actionCreators = {
    postComment,
    getComment,
    DelComment,
    Put_Comment,
  };
  
export { actionCreators };
