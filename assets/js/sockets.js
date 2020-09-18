import { handleNewUser } from "./notifications";

let socket = null;

export const getSocket = () => socket;

// null socket에 initSocket에서 받은 인자 socket에 들어있는 실질적인 값을 입력해주게 됨
export const updateSocket = (aSocket) => (socket = aSocket);

// 이 함수에서 event 들을 전부 제어한다
export const initSockets = (aSocket) => {
  const { events } = window;
  updateSocket(aSocket);
  aSocket.on(events.newUser, handleNewUser);
};
