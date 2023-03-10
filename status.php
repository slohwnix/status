<?php
$status = array(
  "wiki-bot" => "",
  "koyoweb" => ""
);

$wiki_bot_status = file_get_contents("https://wiki-bot.slohweb.ml/");
if(strpos($wiki_bot_status, "Wiki-bot") !== false) {
  $status["wiki-bot"] = "OK";
} else {
  $status["wiki-bot"] = "ERROR";
}

$koyoweb_status = file_get_contents("https://koyoweb.slohweb.ml/");
if(strpos($koyoweb_status, "Koyoweb") !== false) {
  $status["koyoweb"] = "OK";
} else {
  $status["koyoweb"] = "ERROR";
}

header('Content-Type: application/json');
echo json_encode($status);
?>
