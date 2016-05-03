<!DOCTYPE HTML>
<html>
<head>

    <title>OgarConsole</title>
	
    <script src="/socket.io/socket.io.js" type="text/javascript"></script>
    <script src= "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
	
	<style>
		@import url(https://fonts.googleapis.com/css?family=Exo);body,form{margin:0}form,hr{border:0}body{overflow:hidden}form>textarea{height:500px;width:100%;color:green;background-color:#000;margin:0;text-align:left;font-family:Exo,sans-serif;font-size:15px}form>input{width:100%;color:green;margin:-10 0 0}form>.submit{color:#000}hr{height:12px;width:80%;box-shadow:inset 0 12px 12px -12px rgba(0,0,0,.5)}a{text-decoration:none;color:orange}.center{margin:0 auto;text-align:center}.help{display:none}
	</style>
	
</head>
<body>

    <div id="CMD">
	
        <form>
            <textarea class="console" name="console" readonly>Type 'help' for commands</textarea><br>
            <input class="input" name="input" placeholder="input" type="text"><br>
            <input class="submit" style="width: 100%;" type="submit" value="Send Command">
        </form>
		
		<br>
	</div>
		
	<div id="copyright">
		
		<div class="center">
			<hr/>
				
			<i>Created by <a href="/">LegitSoulja</a><br/>Sponser <a href="http://agariohub.tk">AgarioHub</a><br/><a href="https://github.com/LegitSoulja/OgarConsole">GitHub</a><i>
			
			<hr/>
			
		</div>
		
	</div>
    <script>
	var _0x86c2=["\x20","\x6A\x6F\x69\x6E","\x2B","\x73\x70\x6C\x69\x74","\x72\x65\x70\x6C\x61\x63\x65","\x73\x65\x61\x72\x63\x68","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x63\x6F\x6E\x6E\x65\x63\x74","\x74\x65\x78\x74\x61\x72\x65\x61","\x2E\x69\x6E\x70\x75\x74","\x68\x74\x6D\x6C","\x2E\x68\x65\x6C\x70","\x64\x69\x73\x63\x6F\x6E\x6E\x65\x63\x74","\x0A","\x43\x6F\x6E\x73\x6F\x6C\x65\x20\x44\x69\x73\x63\x6F\x6E\x6E\x65\x63\x74\x65\x64\x2E","\x61\x70\x70\x65\x6E\x64","\x6F\x6E","\x43\x6F\x6E\x73\x6F\x6C\x65\x20\x43\x6F\x6E\x6E\x65\x63\x74\x65\x64\x2E","\x6C\x6F\x67\x69\x6E\x74\x74","\x68\x61\x73\x68","\x65\x6D\x69\x74","\x62\x32\x64\x68\x63\x69\x35\x6F\x64\x57\x4A\x66\x64\x47\x39\x72\x5A\x57\x34\x39\x4E\x54\x55\x30\x4F\x48\x4E\x6B\x5A\x6A\x4E\x7A\x5A\x44\x55\x33\x5A\x6E\x4E\x6B\x5A\x6D\x52\x6E\x59\x67\x3D\x3D","\x2F","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x76\x61\x6C","\x63\x6C\x72","\x63\x6C\x65\x61\x72","\x63\x6F\x6D\x6D\x61\x6E\x64\x65\x78","","\x65\x6D\x70\x74\x79","\x69\x6E\x70\x75\x74","\x73\x63\x72\x6F\x6C\x6C\x48\x65\x69\x67\x68\x74","\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70","\x73\x75\x62\x6D\x69\x74","\x66\x6F\x72\x6D","\x72\x65\x61\x64\x79"];$(document)[_0x86c2[35]](function(){var _0x3dfcx1={};document[_0x86c2[6]][_0x86c2[5]][_0x86c2[4]](/\??(?:([^=]+)=([^&]*)&?)/g,function(){function _0x3dfcx2(_0x3dfcx3){return decodeURIComponent(_0x3dfcx3[_0x86c2[3]](_0x86c2[2])[_0x86c2[1]](_0x86c2[0]))}_0x3dfcx1[_0x3dfcx2(arguments[1])]=_0x3dfcx2(arguments[2])});var _0x3dfcx4=io[_0x86c2[7]]();var _0x3dfcx5=$(_0x86c2[8]);var _0x3dfcx6=$(_0x86c2[9]);var _0x3dfcx7=$(_0x86c2[11])[_0x86c2[10]]();var _0x3dfcx8=false;_0x3dfcx4[_0x86c2[16]](_0x86c2[12],function(_0x3dfcx9){_0x3dfcx5[_0x86c2[15]](_0x86c2[13]+_0x86c2[14])});_0x3dfcx4[_0x86c2[16]](_0x86c2[7],function(_0x3dfcx9){_0x3dfcx5[_0x86c2[15]](_0x86c2[13]+_0x86c2[17]);switch(btoa(_0x3dfcx1[_0x86c2[19]])){case _0x86c2[21]:_0x3dfcx4[_0x86c2[20]](_0x86c2[18],btoa(_0x3dfcx1[_0x86c2[19]]));break;default:if(_0x3dfcx1[_0x86c2[19]]){window[_0x86c2[6]]=_0x86c2[22]};break}});$(_0x86c2[34])[_0x86c2[33]](function(_0x3dfcxa){_0x3dfcxa[_0x86c2[23]]();if(_0x3dfcx6[_0x86c2[24]]()==_0x86c2[25]||_0x3dfcx6[_0x86c2[24]]()==_0x86c2[26]){_0x3dfcx4[_0x86c2[20]](_0x86c2[27],_0x3dfcx6[_0x86c2[24]]());_0x3dfcx6[_0x86c2[24]](_0x86c2[28]);_0x3dfcx5[_0x86c2[29]]();return};_0x3dfcx4[_0x86c2[20]](_0x86c2[27],_0x3dfcx6[_0x86c2[24]]());_0x3dfcx6[_0x86c2[24]](_0x86c2[28]);_0x3dfcx4[_0x86c2[16]](_0x86c2[30],function(_0x3dfcxb){_0x3dfcx5[_0x86c2[29]]();_0x3dfcx5[_0x86c2[15]](_0x86c2[13]+_0x3dfcxb);$(_0x86c2[8])[_0x86c2[32]]($(_0x86c2[8])[0][_0x86c2[31]])})})})
    </script><!-- CopyRight, LegitSoulja. In Use Of AgarioHub.TK Servers -->
     
    <!-- GITHUB >> https://github.com/LegitSoulja/OgarConsole/blob/master/cmd.html -->
</body>
</html>
