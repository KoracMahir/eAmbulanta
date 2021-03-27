<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "narudzba";

$conn = new mysqli($servername, $username, $password, $dbname);
if($conn->connect_error){
    die("connection problem: ". $conn->connect_error);

}
if (isset($_POST['submit'])){
    $firstname = mysqli_real_escape_string($conn,$_POST['firstname']);
    $lastname = mysqli_real_escape_string($conn,$_POST['lastname']);
    $email = mysqli_real_escape_string($conn,$_POST['email']);
    $bolovi = mysqli_real_escape_string($conn,$_POST['bolovi']);
    $sameproblems = mysqli_real_escape_string($conn,$_POST['sameproblems']);
    $doktor = mysqli_real_escape_string($conn,$_POST['doktor']);
    
    $sql = "INSERT INTO korisnici (ime, Prezime, Opis bolesti, Slicni problemi, Doktorica, email) VALUES ('$firstname','$lastname', '$bolovi','$sameproblems','$doktor')";
   if($conn->query($sql) === true){
       $message = "Uspješno poslano";
       echo "<script type='text/javascript'>alert('$message');</script>";
    
   }
   else echo "greska";
}

$conn->close();




?>