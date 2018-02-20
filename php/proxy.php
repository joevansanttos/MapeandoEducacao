<?php

// header('Content-type: application/json');
// $c = $_GET['a'];
// $content = file_get_contents($c);
// echo "<pre>$content</pre>"


$content = file_get_contents($_SERVER["QUERY_STRING"]); 

echo $content; 


?>
