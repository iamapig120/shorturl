document.write('<form name="input_dwz" class="su_inp" >请输入长网址：<br><input style="width: 100%;" placeholder="例如https://www.bysb.net/" id="long" name="long" class="su_url" ><br><div id="link_dwz" class="su_link" ><p>生成的短网址：</p></div><br><a class="su_btn" href="javascript:shorturl_dwz()">点击这里生成</a><br><a class="su_edi" href="https://www.bysb.net/" target="_blank">作者：手柄君</a></form>');//生成整个表单
function shorturl_dwz() {
	var long = document.input_dwz.long.value;//获取长网址 
	var long=long.replace(/\&/g,'%26');//对神奇的&进行转义
	var long=long.replace(/\#/g,'%23');//对神奇的#进行转义
	var url = "/json-dwz.php";//填写基于根的json.php地址
//	var cmd2 = url + "?source=" + app_key + "&url_long=" + long; //生成请求地址
	var cmd2 = url + "?url_long=" + long; //生成请求地址
	xmlhttp=new XMLHttpRequest();//建立ajax对象
	xmlhttp.open("GET",cmd2,false);//同步，GET
	xmlhttp.send();//发送GET请求
//	var fuckjs = new Function("return" + xmlhttp.responseText)();//将返回数据视作对象
//	var fuckjson = fuckjs.urls[0].url_short;//提取短网址
//	document.getElementById("link").innerHTML="<p>生成的短网址："+fuckjson+"</p>";//输出短网址
	document.getElementById("link_dwz").innerHTML="<p>生成的短网址："+ xmlhttp.responseText +"</p>";//输出短网址
}; 
