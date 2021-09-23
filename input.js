const {MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY, MESSAGES} = require('./constants');
// Stores the active TCP connection object.
let connection;
const msgKeys = Object.keys(MESSAGES);

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = (key) => {
  
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  } else if (key === '\u2386') {
    console.log("hello");
  } else if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  } else if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  } else if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  } else if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  } else if (msgKeys.includes(key)) {
    connection.write(`Say: ${MESSAGES[key]}`);
  }
  //process.stdout.write(key);

};

const stdin = setupInput();
stdin.on("data", handleUserInput);

module.exports = setupInput;