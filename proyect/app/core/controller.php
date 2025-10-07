<?php
class Controller {
    public function view($view) {
        require_once __DIR__ . '/../views/templates/header.php';
        require_once __DIR__ . '/../views/' . $view . '.php';
    }
}