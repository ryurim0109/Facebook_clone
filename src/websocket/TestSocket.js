import React, { useRef } from 'react'
import SocketClient from 'react-stomp'
import SockJS from 'sockjs-client';
import {Client,Message, Stomp} from '@stomp/stompjs'
import { instance } from '../shared/api';
import axios from 'axios';

//roomId 
//채팅입장, roomid, 누른사람 퍼블리셔 받는 사람이 scbsciber 퍼블리셔 to scbsc
const TestSocket = () => {
    const webSocket = useRef(null);
    
    let sockjs = SockJS("http://52.79.228.83/stomp")
    let stompClient = Stomp.client = Stomp.over(sockjs);
    

    stompClient.connect({ 
    }, function (){
      console.log('connect');
      room_create();
    })
    stompClient.debug = (str) => {
      console.log(str)
    }


    const room_create = () => {
      const Token = sessionStorage.getItem('user');
      const config = {
        Headers : {
          Authorization: `${Token}`,
        }
      }
      axios.post('http://52.79.228.83:8080/chat/room',{
        "publisher":"2", 
        "subscriber":"1",
      },{
        headers : {
          Authorization: `${Token}`,
        }
      }).then(function (response){
        console.log(response)
        const datas = { 
          "type": "ENTER",
          "roomId": response.data.roomId,
          "sender":"2", 
          "message":"test"
        }
        console.log(datas)

        stompClient.subscribe(`/sub/chat/room/${response.data.roomId}`, (message) => {
          console.log(message)
        });

        stompClient.send('/pub/chat/message',{},JSON.stringify(datas))
        
        // axios.get(`http://52.79.228.83:8080/api/chat/rooms`,
        // {
        //   headers : {
        //     Authorization: `${Token}`,
        //   }
        // }
        // ).then(function (response1){
        //     console.log(response1)
        // }).catch(function (error1){

        // })

        console.log('public')
        
      }).catch(function (error){
        console.log(error)
      })
    }

    // const subscription = stompClient.subscribe('/queue/test', callback);

    // const cl = new Client({
    //   brokerURL: 'ws://52.79.228.83:8080/ws',
    //   connectHeaders: {
    //     login: 'user',
    //     passcode: 'password',
    //   },
    //   debug: function (str) {
    //     console.log(str);
    //   },
    //   reconnectDelay: 5000, //자동 재 연결
    //   heartbeatIncoming: 4000,
    //   heartbeatOutgoing: 4000,
    // });

    // cl.onConnect = function (frame) {
    //     console.log('연결 성공')
    // };
    
    // cl.onStompError = function (frame) {
    //   console.log('Broker reported error: ' + frame.headers['message']);
    //   console.log('Additional details: ' + frame.body);
    // };

    // cl.activate();


    const handleClickSendTo = () => { 
      webSocket.current.sendMessage ('/sendTo'); 
    }; 
    const handleClickSendTemplate = () => { 
      webSocket.current.sendMessage ('/Template'); 
    };

    return (
        <div>
            <h2>채팅 테스트</h2>
            {/* <SocketClient url='http://52.79.228.83/ws-stomp' topics={['/sub']}
            onMessage={(msg) => { console.log(msg); }}
            ref={webSocket} /> */}
            <input type='text' /> 
            <button>SendTo</button> 
            <button>SendTemplate</button>
        </div>
    );
}

export default TestSocket