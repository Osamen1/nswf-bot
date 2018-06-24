const fs = require("fs")

    var app = require('express')();

    app.get("ip", (req, res) => {
      console.log(req.ip) // "::ffff:127.0.0.1" ::ffff: is a subnet prefix for IPv4 (32 bit) 
      let ip = req.ip.split(':');
      console.log(ip[3]);
       res.json(ip[3]);  // ==> 127.0.0.1 You can Get Your Ip address only 
    });
app.listen(3003);
