const connect = require('./client');
const setupInput = require('./input');

const printServerData = conn => {
  conn.on('data', (data) => {
    console.log("DATA CAME IN!!!!!");
    console.log(data);
  });
};

const setSnakeName = conn => {
  conn.write("Name: upp");
};

console.log("Connecting ...");
const conn = connect();

// interpret incoming data as text
conn.setEncoding("utf8");

setSnakeName(conn);

setupInput();

printServerData(conn);