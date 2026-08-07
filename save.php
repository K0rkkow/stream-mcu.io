<?php
session_start();
header('Content-Type: application/json; charset=utf-8');

// Seul l'admin connecté peut enregistrer
if (empty($_SESSION['admin'])) {
    http_response_code(403);
    echo json_encode(["ok" => false, "error" => "Non autorisé"]);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input) || !isset($input['items']) || !is_array($input['items'])) {
    http_response_code(400);
    echo json_encode(["ok" => false, "error" => "Données invalides"]);
    exit;
}

$ecrit = file_put_contents(
    __DIR__ . '/data.json',
    json_encode($input['items'], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES)
);

if ($ecrit === false) {
    http_response_code(500);
    echo json_encode(["ok" => false, "error" => "Impossible d'écrire data.json — vérifie les permissions du fichier"]);
    exit;
}

echo json_encode(["ok" => true, "count" => count($input['items'])]);