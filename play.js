const connect = require('./client');

console.log("Connecting ...");
const conn = connect();

// interpret incoming data as text
conn.setEncoding("utf8");

conn.write("Name: upp");

/* conn.write("Move: up");

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

conn.on('data', (data) => {
  console.log("DATA CAME IN!!!!!");
  console.log(data);
});