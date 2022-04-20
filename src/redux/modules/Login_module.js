import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs'

//action
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const SET_USER = "SET_USER";
const USER_IMG ="USER_IMG";

//action creators
 const setLogin = createAction(LOGIN,(Login) => ({Login}));
 const setUser = createAction(SET_USER, (user) => ({ user }));
 const user_img =createAction(USER_IMG,(userImage)=>(userImage));

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
        axios.post('http://52.79.228.83:8080/user/login',
        Login_info
        ).then(function (response){
            alert('로그인 성공')
            console.log(response)
            console.log(response.headers.authorization)
            sessionStorage.setItem('user',response.headers.authorization);
            let sockjs = SockJS("http://52.79.228.83/stomp")
            let stompClient = Stomp.over(sockjs);
            console.log(response.data)
            console.log (`/sub/chat/room/${response.data}`)
            stompClient.connect( {}, function (){
              console.log('connect 성공');
              console.log (`/sub/chat/room/${response.data}`)
              stompClient.subscribe(`/sub/chat/room/${response.data}`, (message) => {
                console.log(JSON.parse(message.body))
              });
            })
            stompClient.debug = (str) => {
              console.log(str)
            }

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
        axios.post('http://52.79.228.83:8080/user/signup',
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
        "http://52.79.228.83:8080/api/user/islogin",{
  
        },{
          headers: { Authorization:token, },
        }
        ).then((res)=>{
          console.log(res)
          dispatch(
            setUser(
             { 
              userName:res.data.userName,
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
  //유저 프로필
  const userImgDB = (image,token) => {
    const file = new FormData();

    file.append("image", image);
    return function (dispatch, getState, { history }) {
      
      axios.post(
        "http://52.79.228.83:8080/api/user/image",file,{
          headers: { Authorization:token,
            "Content-Type":"multipart/form-data", },
        }
        ).then((res)=>{
          console.log(res.data,"이미지 데이터")
          window.alert('이미지 등록이 완료되었습니다.');
          dispatch(user_img(res.data));
          
        }).catch((err) => {
          console.log("프로필 업로드 에러다!!!!", err.response);
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
      [USER_IMG]: (state, action) =>
      produce(state, (draft) => {
          console.log(action.payload)
          draft.user.userImage = action.payload.userImageUrl;

    }),
    },
    initialState
  );


//action creator export
const actionCreators = {
    postLogin,
    postSignup,
    checkUserDB,
    userImgDB,
  };
  
export { actionCreators };