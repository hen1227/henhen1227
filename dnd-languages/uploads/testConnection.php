<?php
$json = json_decode(file_get_contents('uploads/versions.json'));
echo json_encode([
"Draconic" => $json->Draconic,
"Dwarvish" => $json->Dwarvish,
"Elvish" => $json->Elvish
]);
?>
