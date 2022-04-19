import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//action
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SET_USER = "SET_USER";

//action creators
 const setLogin = createAction(LOGIN,(Login) => ({Login}));
 const setUser = createAction(SET_USER, (user) => ({ user }));

//initialState
const initialState = {
    user : {
        id : '',
        passward : '',
        userImage:"https://i.pinimg.com/474x/19/08/a7/1908a7eae6903f9d5861b62b1e025788.jpg",
        userName:"키키키"
    }
}

//로그인 요청 
const postLogin = (Login_info) => {
    return function (dispatch, getState,{history}){
        console.log('로그인 시작')
        console.log(Login_info)

        //15.164.96.141:8080
        //52.79.228.83:8080

        axios.post('http://15.164.96.141:8080/user/login',
        Login_info
        ).then(function (response){
            alert('로그인 성공')
            console.log(response)
            console.log(response.headers.authorization)
            sessionStorage.setItem('user',response.headers.authorization);
            dispatch(setLogin(Login_info))
            history.push('/main');
        }).catch(function (error){
            console.log(error.response.data)
            console.log(error.response)
        })
    }
}

//회원가입 요청 
const postSignup = (Signup_info) => {
    return function (dispatch, getState, {history}){
        console.log(Signup_info)
        axios.post('http://15.164.96.141:8080/user/signup',
        Signup_info
        ).then(function (response){
            console.log(response)
            alert(response.data)
            window.location.reload();
        }).catch(function (error){
            console.log(error.response)
        })
    }
}

//유저 정보
const checkUserDB = (token) => {
    return function (dispatch, getState, { history }) {
      
      axios.post(
        "http://15.164.96.141:8080/api/user/islogin",{
  
        },{
          headers: { Authorization:token, },
        }
        ).then((res)=>{
          //console.log(res,"체크")
          dispatch(
            setUser(
             { userName:res.data.userName,
                userImage:res.data.userImage,
                is_login:res.data.is_login,
                userId:res.data.userId,
                userEmail:res.data.userEmail
            }
            )
          );
        }).catch((err) => {
          console.log("체크에러다!!!!", err.response);
        }); 
    };
  };
// reducer
export default handleActions(
    {
      [LOGIN]: (state, action) =>
        produce(state, (draft) => {
          draft.user = action.payload.user;
        }),
      [LOGOUT]: (state, action) =>
        produce(state, (draft) => {
            sessionStorage.clear();
        }),
        [SET_USER]: (state, action) =>
        produce(state, (draft) => {
            draft.user = action.payload.user;

      }),
    },
    initialState
  );


//action creator export
const actionCreators = {
    postLogin,
    postSignup,
    checkUserDB,
  };
  
export { actionCreators };