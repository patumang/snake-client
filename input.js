// Stores the active TCP connection object.
let connection;

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
  } else if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else {
    connection.write(`Say: ${key}`);
    process.stdout.write(key);
  }
  //process.stdout.write(key);

};

const stdin = setupInput();
stdin.on("data", handleUserInput);

module.exports = setupInput;