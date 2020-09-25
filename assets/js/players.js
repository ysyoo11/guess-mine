import {
  disableCanvas,
  hideControls,
  showControls,
  enableCanvas,
  resetCanvas,
} from "./paint";
import { disableChat, enableChat } from "./chat";
import { startTimer, stopTimer } from "./timer";
// import { disableTimer } from "./timer";

const board = document.getElementById("jsPlayerBoard");
const notifs = document.getElementById("jsNotifs");

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.point}`;
    board.appendChild(playerElement);
  });
};

const setNotifs = (text) => {
  notifs.innerText = "";
  notifs.innerText = text;
};

export const handleGameStarting = () => {
  setNotifs("Game will start soon.");
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);

export const handleGameStarted = () => {
  setNotifs("");
  startTimer();
  disableCanvas();
  hideControls();
  enableChat();
};

export const handleLeaderNotif = ({ word }) => {
  enableCanvas();
  showControls();
  disableChat();
  notifs.innerText = `You are the painter! Draw ${word}!`;
};

export const handleGameEnded = () => {
  setNotifs("Game ended.");
  stopTimer();
  disableCanvas();
  hideControls();
  resetCanvas();
};
