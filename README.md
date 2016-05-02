# OgarConsole v1.0.2
![Image of OgarConsole] (http://i.imgur.com/iM539GC.png)

[![Gitter](https://badges.gitter.im/LegitSoulja/OgarConsole.svg)](https://gitter.im/LegitSoulja/OgarConsole?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge) [![Build Status](https://travis-ci.org/LegitSoulja/OgarConsole.svg?branch=master)](https://travis-ci.org/LegitSoulja/OgarConsole) [![GitHub issues](https://img.shields.io/github/issues/LegitSoulja/OgarConsole.svg)](https://github.com/LegitSoulja/OgarConsole/issues) [![GitHub stars](https://img.shields.io/github/stars/LegitSoulja/OgarConsole.svg)](https://github.com/LegitSoulja/OgarConsole/stargazers)

> OgarConsole Supports
- [x] Ogar
- [x] Ogar Unlimited 11.9.0 or older
- [x] Ogar Unlimited latest
- [x] Ogar Plus

## Installation
1. Install Ogar and run Ogar and make sure the server starts without OgarConsole support
2. Upload OgarConsole files to Ogar **./src** game directory.
3. Run command 'npm install' in your Ogar file directory where OgarConsole was placed.
4. Start **OgarConsole** by running the **startconsole.bat** file

## You now have Ogar Console Running. How to use?
> Open your browser to the location **http://localhost:1000**

## Commands
> **Refer to Configuration on how to setup OgarConsole login auth approval**
- -password [password] = Enter password on OgarConsole connecting. Needed for OgarConsole use.
- -login = Logout of OgarConsole when not using.

## Configuration
> Open **cmd.js**

- serverport = OgarConsole connection port.
- advanced = Abilities to execute cmd commands (NOT RECOMMENDED TO ENABLE!).
- log = Your console log file. This is needed to get access to the console log itself. Enable ServerLogging in game configuration **gameserver.ini**.
- ogar = Ogar start file. The main file that runs Ogar.
- json = Should require OgarConsole **package.json** file. Please make sure that it is included in the directory.
- requirePassword = Require password for OgarConsole use.
- consolePassword = OgarConsole password that will be used to login into OgarConsole if requirePassword = true
- allowOriginPasswordBypass = Allow OgarConsole origins bypass logins. Localhost and Ogar.ml connections will ignore passwords

> More information [![GitHub issues](https://img.shields.io/github/issues/LegitSoulja/OgarConsole.svg)](https://github.com/LegitSoulja/OgarConsole/issues/7#issuecomment-216086983)

## Help / Commands / Ogar Functionalites
When OgarConsole is running and you have connected to **http://localhost:1000** type **help** in cmd to read help & commands of Ogar. By default OgarConsole requires a password on connecting. enter **'-password OgarConsole123'** to login into Ogar Console

## Purchased OgarConsole?
> You have been ripped off of buying OgarConsole and you should get a refund. OgarConsole is a free to use plugin.

## Donate
> Not even necassary. This is free to use. Free for you
