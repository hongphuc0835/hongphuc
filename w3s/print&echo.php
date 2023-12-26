<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>print/echo</title>
</head>
<body>
    <?php
    //echo có thể sử  dụng dấu ngoặc đoen hoặc không
    //cách xuất văn bản của echo
    $txt1 = "Learb PHP";
    $txt2 = "W3schools. com";
    $x=5;
    $y=4;
    echo"<h2>".$txt1."</h2>";
    echo"Study PHP at ".$txt2."<br>";
    echo $x + $y;
    //print có thể sử dụng dấu ngoặc đơn hoặc không
    //cách xuất văn ả của print
    $txt3 = "PHP W3Sschool.com";
    $a =6;
    $b =4;
    print"<h2>".$txt3."</h2>";
    print $a * $b;
    ?>
</body>
</html>