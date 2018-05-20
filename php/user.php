<?php
    header("Access-Control-Allow-Origin:*");

    $usr = $_POST["username"];
    $pwd = $_POST["password"];
    $type = $_POST["type"];  
    if($type !== "login_btn" && $type !== "register_btn"){
        $res = array("error"=>"i don't know what are u doing!");
        die(json_encode($res));
    }
    //和数据库建立连接
    require("./_connect.php");
    //把传过来的密码使用md5加密
    $pwd = md5($pwd);
    //根据不同情况进行不同判断;然后执行不同sql语句
    $sql_login = "SELECT username,pwd FROM user_list";
   
    $sql_register = "INSERT user_list(
        username,pwd
    )
        VALUES 
    ('{$usr}','{$pwd}')
    ";
    $result_login = $conn->query($sql_login);
    
    $hasuser = FALSE; //用户名是否存在;
    $select_res = FALSE;//储存用户信息;
    $haspwd = FALSE;//该用户名密码是否正确;
    
    while($row = $result_login->fetch_assoc()){
        if($row["username"] == $usr){
            $hasuser = TRUE;
            //如果是注册，没必要判断密码;
            if($type == "register_btn"){
                break;
            }
            if($row["pwd"] == $pwd){
                $select_res = json_encode($row);
                $haspwd = TRUE;
                break;
            }
        }
    }

    if($type == "login_btn" &&  $haspwd == TRUE){
        //用户名密码都对，登录成功
        die($select_res);
    }else if($type == "login_btn"){
        //登录失败
        die("0");
    }

    if($type == "register_btn" && $hasuser == TRUE){
        //用户名重名; => 2;
        echo 2;
    }else if($hasuser == FALSE){
        //注册成功成功;
        if($type == "register_btn"){
            $result_register = $conn->query($sql_register);
        }
        echo 1;
    }


?>