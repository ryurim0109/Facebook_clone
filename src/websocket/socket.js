//소켓 구현 소스 
import SockJs from "sockjs-client";
import StompJs from "stompjs";
import React from 'react'

export const Sockets = () => {
  const socket = new SockJs('서버주소');
  const client = StompJs.over(socket)
}




//client 객체 생성 
const client = new StompJs.Client({
  brokerURL: 'ws://localhost:15674/ws', //서버주소
  connectHeaders: {
    login: 'user',
    passcode: 'password',
  },
  debug: function (str) {
    console.log(str);
  },
  reconnectDelay: 5000,
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
});

//클라이언트 연결시 실행 함수 
client.onConnect = function (frame) {
   // Do something, all subscribes must be done is this callback
  // This is needed because this will be executed after a (re)connect
}

client.onStompError = function (frame) {
  // Will be invoked in case of error encountered at Broker
  // Bad login/passcode typically will cause an error
  // Complaint brokers will set `message` header with a brief message. Body may contain details.
  // Compliant brokers will terminate the connection after any error
  console.log('Broker reported error: ' + frame.headers['message']);
  console.log('Additional details: ' + frame.body);
};

client.activate();

client.publish({ destination: '/topic/general', body: 'Hello world' });

// There is an option to skip content length header
client.publish({
  destination: '/topic/general',
  body: 'Hello world',
  skipContentLengthHeader: true,
});

// Additional headers
client.publish({
  destination: '/topic/general',
  body: 'Hello world',
  headers: { priority: '9' },
});

// const sock = new SockJs("http://서버주소");
// //client 객체 생성 및 서버주소 입력

// const stomp = StompJs.over(sock);
// //stomp로 감싸기

// const stompConnect = () => {
//     try {
//       stomp.debug = null;
//       //웹소켓 연결시 stomp에서 자동으로 connect이 되었다는것을 
//       //console에 보여주는데 그것을 감추기 위한 debug
      
//       stomp.connect(token, () => {
//         stomp.subscribe(
//           `서버주소`,
//           (data) => {
//             const newMessage = JSON.parse(data.body);
//             //데이터 파싱
//           },
//           token
//         );
//       });
//     } catch (err) {
      
//     }
//   };

// //웹소켓 connect-subscribe 부분

// const stompDisConnect = () => {
//     try {
//       stomp.debug = null;
//       stomp.disconnect(() => {
//         stomp.unsubscribe("sub-0");
//       }, token);
//     } catch (err) {
      
//     }
//   };
// //웹소켓 disconnect-unsubscribe 부분
// // 웹소켓을 disconnect을 따로 해주지 않으면 계속 연결되어 있어서 사용하지 않을때는 꼭 연결을 끊어주어야한다. 

// const SendMessage = () => {
//     stomp.debug = null;
//     const data = {
//       type: "TALK",
//       roomId: roomId,
//       sender: sender_nick,
//       message: message,
//       createdAt: now,
//     };
//   //예시 - 데이터 보낼때 json형식을 맞추어 보낸다.
//     stomp.send("/pub/chat/message", token, JSON.stringify(data));
//   };