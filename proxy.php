<?php
// Récupère l'URL de la ressource demandée depuis la requête AJAX
$url = $_GET['url'];

// Crée une nouvelle requête CURL pour récupérer la ressource
$ch = curl_init($url);

// Configure la requête CURL
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

// Récupère la réponse de la ressource
$response = curl_exec($ch);

// Renvoie la réponse au client
echo $response;
