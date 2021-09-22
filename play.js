const connect = require('./client');

// setup interface to handle user input from stdin
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const printServerData = conn => {
  conn.on('data', (data) => {
    console.log("DATA CAME IN!!!!!");
    console.log(data);
  });
};

const setSnakeName = conn => {
  conn.write("Name: upp");

  /* //experiment with moves right after server connection is established
  conn.write("Move: up");

  const snakeMoveUp = setInterval(() => {
    conn.write("Move: up");
  }, 300);

  for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
      if (i === 5)
        clearInterval(snakeMoveUp);
    }, 300 * i);
  } */
};

const handleUserInput = (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }

  process.stdout.write('.');
};

console.log("Connecting ...");
const conn = connect();

// interpret incoming data as text
conn.setEncoding("utf8");

setSnakeName(conn);

const stdin = setupInput();
stdin.on("data", handleUserInput);

printServerData(conn);