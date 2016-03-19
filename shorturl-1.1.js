document.write('<form name="input" class="su_inp" >请输入长网址：<br><input style="width: 100%;" value="http://" id="long" name="long" class="su_url" ><br><div id="link" class="su_link" ><p>生成的短网址：</p></div><br><a class="su_btn" href="javascript:shorturl()">点击这里生成</a><br><a class="su_edi" href="https://www.bysb.net/" target="_blank">作者：手柄君</a></form>');//生成整个表单
function shorturl() {
    var long = document.input.long.value;//获取长网址 
	var long=long.replace(/\&/g,'%26');//对神奇的&进行转义
    var url = "/json.php";//填写基于根的json.php地址
	var app_key = "2849184197";//app key来自倒霉的渣浪
	var cmd2 = url + "?source=" + app_key + "&url_long=" + long; //生成请求地址
	xmlhttp=new XMLHttpRequest();//建立ajax对象
	xmlhttp.open("GET",cmd2,false);//同步，GET
	xmlhttp.send();//发送GET请求
	var fuckjs = new Function("return" + xmlhttp.responseText)();//将返回数据视作对象
	var fuckjson = fuckjs.urls[0].url_short;//提取短网址
	document.getElementById("link").innerHTML="<p>生成的短网址："+fuckjson+"</p>";//输出短网址
}; 
