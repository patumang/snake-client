const connect = require('./client');

console.log("Connecting ...");
const conn = connect();

// interpret incoming data as text
conn.setEncoding("utf8");

conn.write("Name: upp");

conn.on('data', (data) => {
  console.log("DATA CAME IN!!!!!");
  console.log(data);
});