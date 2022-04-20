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
    return function (dispatch,getState,{history}){
        instance.get('/api/user/loginlist'
        ).then(function (response){
            console.log(response);
            dispatch(GETLIST(response.data));
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
            console.log(action.payload.list);
            draft.userlist = action.payload.list 
        }),
    },
    initialState
  );

  
//action creator export
const actionCreators = {
    getUserLIst,
  };
  
export { actionCreators };
