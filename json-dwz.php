<?php
function do_post_request($url, $data, $optional_headers = null)
  {
     $params = array('http' => array(
                  'method' => 'POST',
                  'content' => $data
               ));
     if ($optional_headers !== null) {
        $params['http']['header'] = $optional_headers;
     }
     $ctx = stream_context_create($params);
     $fp = @fopen($url, 'rb', false, $ctx);
     if (!$fp) {
        throw new exception("Problem with $url, $php_errormsg");
     }
     $response = @stream_get_contents($fp);
     if ($response === false) {
        throw new exception("Problem reading data from $url, $php_errormsg");
     }
     return $response;
  }
$url_long =  $_GET['url_long'];
$url_long = htmlspecialchars($url_long);
$post_data = "url=".$url_long;
$post_url = "http://dwz.cn/create.php";
$dwz_response = do_post_request($post_url,$post_data);
//echo $response;
//服务器预处理
$short_url_json = json_decode($dwz_response,true);
if($short_url_json['status']==0)
{
/**错误处理*/
echo iconv('UTF-8','GBK',$short_url_json['err_msg']);
}
/** tinyurl */
echo $short_url_json['tinyurl'];
?>