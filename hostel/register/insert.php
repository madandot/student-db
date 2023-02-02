<?php
if (isset($_POST['submit'])) {
    if (isset($_POST['Student_NAME']) && isset($_POST['USN_NO']) && isset($_POST['ADDRESS']) && isset($_POST['PHONE_NO']) &&
        isset($_POST['GENDER']) && isset($_POST['COURSE']) &&
        isset($_POST['Email'])) {
        $Student_NAME = $_POST['Student_NAME'];
        $USN_NO = $_POST['USN_NO'];
        $ADDRESS = $_POST['ADDRESS'];
        $PHONE_NO = $_POST['PHONE_NO'];
        $GENDER = $_POST['GENDER'];
        $COURSE = $_POST['COURSE'];
        $Email = $_POST['Email'];
        $host = "localhost";
        $dbUsername = "mokshith";
        $dbPassword = "iloveanchal";
        $dbName = "reg";
$conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
 if ($conn->connect_error) {
            die('Could not connect to the database.');
        }
        else {
       $Select = "SELECT USN_NO FROM std_reg WHERE USN_NO = ? LIMIT 1";
            $Insert = "INSERT INTO std_reg(Student_NAME, USN_NO, ADDRESS, PHONE_NO, GENDER, COURSE, Email) values(?, ?, ?, ?, ?, ?, ?)";
  $stmt = $conn->prepare($Select);
            $stmt->bind_param("s",$USN_NO);
            $stmt->execute();
            $stmt->bind_result($resultUSN_NO);
            $stmt->store_result();
            $stmt->fetch();
            $rnum = $stmt->num_rows;
 if ($rnum == 0) {
                $stmt->close();
  $stmt = $conn->prepare($Insert);
                $stmt->bind_param("ssssiii",$Student_NAME, $USN_NO, $ADDRESS, $PHONE_NO, $GENDER, $COURSE, $Email);
                if ($stmt->execute()) {
                    echo "New record inserted sucessfully.";
 }
                else {
                    echo $stmt->error;
                } }
            else {
                echo "Someone already registers using this USN_NO.";
                 }
            $stmt->close();
            $conn->close();
        } }
    else {
        echo "All field are required.";
        die();
    }}
else {
    echo "Submit button is not set";
}
?>
<form><input type="button" value="back" onclick="history.back();return true;"></form>