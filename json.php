// by Handle https://www.bysb.net/ 2016.02.25
<?php $source =  $_GET['source'];$url_long =  $_GET['url_long'];$url = "http://api.weibo.com/2/short_url/shorten.json?";$wtf = array('source'=> $source,'url_long' => $url_long,);echo file_get_contents($url.http_build_query($wtf)); ?>
