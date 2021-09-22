const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here,
    port: '50542' // PORT number here,
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server!");
  });

  return conn;
};

module.exports = connect;