<?php

session_start();

$user = $_SESSION['user'];

if($user == 'admin') {
    echo '{
        "message": "You are currently logged in as Admin",
        "success": true
    }';
} else {
    echo'{
        "message": "Who the f are you",
        "success": false
    }';
}
?>