<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 2/21/19
 * Time: 18:33 PM
 */
header('Content-Type:text/html; charset=utf-8');
$db = new mysqli('localhost', 'id8805465_horizont', 'joncoHorizontFTP', 'id8805465_horizontjobs');

if ($db->connect_error) {
    exit("cannot connect to db");
}

if (!empty($_POST['submit'])) {
    $_POST['first_name'] = addslashes($_POST['first_name']);
    $_POST['middle_name'] = addslashes($_POST['middle_name']);
    $_POST['last_name'] = addslashes($_POST['last_name']);
    $_POST['email'] = addslashes($_POST['email']);
//    $_POST['password'] = addslashes($_POST['password']);
    $_POST['phone'] = addslashes($_POST['phone']);
    $_POST['profession'] = addslashes($_POST['profession']);
    $_POST['location'] = addslashes($_POST['location']);
    $_POST['birthday'] = addslashes($_POST['birthday']);
    $_POST['doc'] = $_POST['doc'] == "true" ? 1 : 0;
    $_POST['soft_skills'] = addslashes($_POST['soft_skills']);

    if (!empty($_POST['password'])) {
        $passwordHash = password_hash($_POST['password'], PASSWORD_DEFAULT);
    }


    $sql = "INSERT INTO `users` SET `first_name`='{$_POST['first_name']}'
  ,`middle_name`='{$_POST['middle_name']}',`last_name`='{$_POST['last_name']}'
  ,`email`='{$_POST['email']}',`phone`='{$_POST['phone']}',`profession`='{$_POST['profession']}'
  ,`location`='{$_POST['location']}',`birthday`='{$_POST['birthday']}'
  ,`doc`='{$_POST['doc']}',`soft_skills`='{$_POST['soft_skills']}'";

    $db->query($sql);
    if ($db->error) {
        echo $db->error;
    } else {
        echo 'submitted!';
    }
    $db->close();
}

