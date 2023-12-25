<?php
// Datos de conexión a la base de datos
$servername = "localhost"; // Cambia esto por la dirección de tu servidor MySQL
$username = "usuario";
$password = "";
$dbname = "cafeitsch1";

// Datos recibidos del cliente (desde JavaScript)
$data = json_decode(file_get_contents('php://input'), true);

// Crear una conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Preparar la consulta SQL para insertar los datos en la tabla 'usuarios'
$sql = "INSERT INTO usuarios (nombre, ncontrol, correo, num_tel, genero, contraseña)
        VALUES ('".$data['nombre']."', '".$data['ncontrol']."', '".$data['correo']."', '".$data['num_tel']."', '".$data['genero']."', '".$data['contraseña']."')";

// Ejecutar la consulta y verificar si se realizó con éxito
if ($conn->query($sql) === TRUE) {
    http_response_code(200); // Indicar que la solicitud se realizó con éxito
} else {
    http_response_code(500); // Indicar un error en el servidor
}

$conn->close();
?>