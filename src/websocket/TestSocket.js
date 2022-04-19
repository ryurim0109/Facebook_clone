import React, { useRef, useState } from 'react'
import SocketClient from 'react-stomp'
import SockJS from 'sockjs-client';
import {Client,Message, Stomp} from '@stomp/stompjs'
import { instance } from '../shared/api';
import axios from 'axios';
import styled from 'styled-components';

//roomId 
//채팅입장, roomid, 누른사람 퍼블리셔 받는 사람이 scbsciber 퍼블리셔 to scbsc
const TestSocket = () => {
    const webSocket = useRef(null);
    const [publisher_name, setPublisher_name] = useState('');
    const [subscriber_name, setSubscriber_name] = useState('');
    const [messages, setMessage] = useState('');

    let sockjs = SockJS("http://52.79.228.83/stomp")
    let stompClient = Stomp.client = Stomp.over(sockjs);

    const roomCreate = () => {
      stompClient.connect({}, function (){
        console.log('connect 성공');
        if(publisher_name !== '' && subscriber_name !== '')
          room_create();
      })
      stompClient.debug = (str) => {
        console.log(str)
      }
    }

    const room_create = () => {
      const Token = sessionStorage.getItem('user');
      axios.post('http://52.79.228.83:8080/chat/room',{
        "publisher": publisher_name, 
        "subscriber":subscriber_name,
      },{
        headers : {
          Authorization: `${Token}`,
        }
      }).then(function (response){
        console.log(response)
        const datas = { 
          "type": "ENTER",
          "roomId": response.data.roomId,
          "sender":publisher_name, 
          "message":"test"
        }
        console.log(datas)

        stompClient.subscribe(`/sub/chat/room/${response.data.roomId}`, (message) => {
          console.log(message)
          console.log(JSON.parse(message.body));
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

    return (
        <Divstyle>
            <h2>채팅 테스트</h2>
            <div>
              <input type='text' 
                onChange={(event) => {
                  setPublisher_name(event.target.value)
                }}
                placeholder = '유저ID 써주세요'
                />
              <input type='text' 
                onChange={(event) => {
                  setSubscriber_name(event.target.value)
                }}
                placeholder = '상대방유저ID 써주세요'
                />  
                <button onClick={roomCreate}>방만들기</button> 
            </div>
            <div className='message_area' value={'hi'}>

            </div>
            <div>
              <input type='text' />  <button>메세지 전송</button>
            </div>
            {/* <SocketClient url='http://52.79.228.83/ws-stomp' topics={['/sub']}
            onMessage={(msg) => { console.log(msg); }}
            ref={webSocket} /> */}
            
            
        </Divstyle>
    );
}

const Divstyle = styled.div`
  .message_area{
    width: 300px;
    height: 500px;
    background-color: #eee;
  }
`;

export default TestSocket