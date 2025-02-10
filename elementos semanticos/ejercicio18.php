<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ejercicio 18</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .team-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
        }

        .team-member {
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 10%;
            margin: 10px;
            padding: 20px;
            max-width: 300px;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .team-member figure {
            margin: 0;
        }

        .team-member img {
            border-radius: 50%;
            max-width: 500px;
        }

        .team-member h2 {
            margin: 10px 0 5px;
        }

        .team-member p {
            margin: 5px 0;
            color: #777;
        }
    </style>
</head>

<body>

    <section class="team-container">

        <div class="team-member">
            <figure>

                <img src="imagenes/foto.jpg " style="width: 200px;" style="height: 200px;" alt="foto de integrante de equipo">
            </figure>

            <h2>Pepe Perez (Desarrollador Back-End)</h2>
            <p>Estudiante universitario de 24 años a punto de graduarse de su carrera como Ingeniero informatico. </p>
            <h3> Funciones en el Equipo: </h3>
            <ul>
                <li>Manejar la lógica del servidor, bases de datos y autenticación de usuarios.</li>
                <li>Desarrollar y mantener la API y la lógica del servidor que interactúa con el front-end.</li>
                <li>Asegurar la seguridad y escalabilidad de la aplicación web.</li>
                <li>Integrar servicios y APIs de terceros si es necesario.</li>
            </ul>
        </div>


        <div class="team-member">
            <figure>
                <img src="imagenes/foto hombre perfil.jpg" style="width: 200px;" style="height: 200px," alt="Imagen de miembro de equipo">
            </figure>

            <h2>Mario Muñoz (Project Manager/Full-Stack Developer)</h2>
            <p>Lider del projecto, con más de 10 años de experiencia manejando siete lenguajes de programacion diferentes.</p>
            <h3>Funciones en el Equipo</h3>
            <ul>
                <li>Coordinar las tareas y gestionar el cronograma del proyecto.</li>
                <li>Actuar como enlace entre el cliente (si lo hay) y el equipo de desarrollo.</li>
                <li>Realizar tareas tanto de front-end como de back-end según sea necesario para avanzar en el proyecto.</li>
                <li>Supervisar las pruebas y la implementación de la página web.</li>
                <li>Asegurarse de que el proyecto se mantenga dentro del alcance, tiempo y presupuesto acordados.</li>
            </ul>
        </div>
        <div class="team-member">
            <figure>
                <img src="imagenes/foto femenina.jpg" style="width: 200px;" style="height: 200px," alt="Imagen de miembro de equipo">
            </figure>
            <h2>Flor Valencia (Desarrollador Front-End:)</h2>
            <p>Tiene experiencia en el Front-End desde hace mucho.
                Ha trabajado en diferentes projectos en lo que lleva ejerciendo en la carrera.
            </p>
            <h3>Funciones en el Equipo: </h3>
            <ul>
                <li>Diseñar y desarrollar la interfaz de usuario (UI) de la página web.</li>
                <li>Trabajar con HTML, CSS y JavaScript para crear una experiencia de usuario atractiva y funcional.</li>
                <li>Asegurarse de que la web sea responsiva y se vea bien en diferentes dispositivos y navegadores.</li>
                <li>Colaborar con el Diseñador UX/UI si es necesario.</li>
            </ul>
        </div>
    </section>


</body>

</html>