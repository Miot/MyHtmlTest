<?php
    $hash = $_GET['hash'];
    switch ($hash) {
        case 'index':
            echo '<div class="content">Index Page</div>';
            break;
        case 'introduce':
            echo '<div class="content">Introduce Page</div>';
            break;
        case 'contact':
            echo '<div class="content">Contact Us Page</div>';
            break;
        default:
            break;
    }
 
?>