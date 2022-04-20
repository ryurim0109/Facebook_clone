import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { instance } from "../../shared/api";

//action
const GET_USER_LIST = 'GET_USER_LIST';

//action creators
const GETLIST = createAction(GET_USER_LIST,(list) => ({list}));

//initialState
const initialState = {
    userlist : [],
}

const getUserLIst = () => {
    return function (dispath,getState,{history}){
        instance.get('/api/user/loginlist'
        ).then(function (response){
            console.log(response);
        }).catch(function (error){
            console.log(error)
        })
    }
}

// reducer
export default handleActions(
    {
      [GET_USER_LIST]: (state, action) =>
        produce(state, (draft) => {
            console.log(state.Message);
            console.log(action.payload.message);
            const arrays = [...state.Message] //state를 배열로 복사 
            arrays.push(action.payload.message); //복사한 배열에 첫번쨰 요소에 신규 comment 추가 
            draft.Message = arrays 
        }),
    },
    initialState
  );

  
//action creator export
const actionCreators = {
    getUserLIst,
  };
  
export { actionCreators };
