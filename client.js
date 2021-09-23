const net = require("net");
const {IP, PORT} = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server!");
  });

  return conn;
};

module.exports = connect;