<!DOCTYPE html>
<html>
<head>
<title>Table with database</title>
<style>
table {
border-collapse: collapse;
width: 100%;
color: #black;
font-family: monospace;
font-size: 25px;
text-align: left;
}
th {
background-color:GREY;
color: black;
}
tr:nth-child(even) {background-color:lightGREY;}
</style>
</head>
<body>
<table border="2">
<tr>
<th>Student_NAME</th>
<th>USN_NO</th>
<th>ADDRESS</th>
<th>PHONE_NO</th>
<th>GENDER</th>
<th>COURSE</th>
<th>Email</th>
</tr>
<?php
$conn = mysqli_connect("localhost", "mokshith", "iloveanchal", "reg");
// Check connection
if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT  Student_NAME, USN_NO,ADDRESS,PHONE_NO,GENDER,COURSE,Email FROM std_reg";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
echo "<tr><td>" .  $row["Student_NAME"] . "</td><td>"  . $row["USN_NO"]. "</td><td>" .$row["ADDRESS"]. "</td><td>" .$row["PHONE_NO"]. "</td><td>" .$row["GENDER"]. "</td><td>" .$row["COURSE"]. "</td><td>" .$row["Email"]. "</td></tr>";
}
echo "</table>";
} else { echo "0 results"; }
$conn->close();
?>
</table>
</body>
</html>