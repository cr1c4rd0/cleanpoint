<?php
require_once '../app/core/controller.php';

class HomeController extends Controller {
    public function index() {
        $this->view('home');
    }
}