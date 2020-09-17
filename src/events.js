const events = {
  setNickname: "setNickname",
};

export default events;

// 기존 방식과의 차이는 socketController.js 에서 이벤트를 "setNickname"으로 입력하는 것이 아니라 events.setNickname 으로 설정한다는 것
//
