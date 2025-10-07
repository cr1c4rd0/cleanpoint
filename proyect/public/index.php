<?php
require_once '../app/core/Controller.php';

$page = isset($_GET['page']) ? $_GET['page'] : 'home';

switch ($page) {
    case 'home':
        require_once '../app/controllers/homeController.php';
        $controller = new HomeController();
        break;
    default:
        echo "Página no encontrada.";
        exit;
}

$controller->index();