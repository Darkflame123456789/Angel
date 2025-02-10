<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ejericicio 9</title>
    <style>
        .contenedor {
            margin: 25px;
            padding: 25px;
            border: 1px solid black;
        }

        .seccion {

            margin: 25px;
            padding: 25px;
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <div class="contenedor">
        <h1>¡Desarrolladores de Fantasía Anuncia el Lanzamiento de su Nuevo Juego!</h1>

        <p>Desarrolladores de Fantasía, una empresa líder en la creación de experiencias de juego inolvidables, se complace en anunciar el lanzamiento de su nuevo y esperado juego: <strong>"El Mas Allá Sin Ley "</strong> .</p>

        <p>El Mas Allá Sin Ley, es una aventura épica que transportará a los jugadores a un mundo lleno de maravillas, criaturas fantásticas y desafíos emocionantes. Con gráficos impresionantes, una historia cautivadora y una jugabilidad innovadora, este juego promete ser una experiencia única para todos los amantes de los juegos de rol y fantasía.</p>


        <h2>Caracteristicas Principales:</h2>
        <ul>
            <li>Mundo Abierto: Explora vastos paisajes llenos de secretos y aventuras.</li>
            <li>Historia Épica: Embárcate en una trama llena de giros inesperados y personajes memorables.</li>
            <li>Personalización de Personajes: Crea y personaliza tu héroe con habilidades y equipos únicos.</li>
            <li>Multijugador en Línea: Únete a amigos y jugadores de todo el mundo para enfrentar desafíos juntos.</li>

        </ul>

        <p> <strong>¡No te pierdas el estreno de "El Mas Allá Sin Ley"!</strong></p>

        <p>Mantente al tanto de las últimas noticias y actualizaciones siguiéndonos en nuestras redes sociales y visitando nuestro sitio web oficial en www.desarrolladoresdefantasia.com.</p>

    </div>
    <hr>
    <div class="seccion">

        <section id="comentarios">
            <h2>Sección de Comentarios</h2>
            <p>Nos gustaria saber tu opinion sobre este anuncio.</p>
            <form action="/submit_comment" method="post">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required><br><br>

                <label for="comentario">Comentario:</label><br>
                <textarea id="comentario" name="comentario" rows="4" cols="50" required></textarea><br><br>

                <input type="submit" value="Enviar Comentario">
            </form>
        </section>
    </div>
</body>

</html>
</body>

</html>