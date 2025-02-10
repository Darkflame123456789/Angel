<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ejercicio 15</title>

    <style>
        h1 {
            text-align: center;
            background-color: black;
            color: white;
            padding: 20px;
 
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;

        }

        .contenido {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .blog {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;

        }


        img {
            width: 100%;
            height: auto;
        }

        .contenido {
            padding: 15px;
        }

        .project-title {
            font-size: 1.5em;
            margin: 0 0 10px;
        }

        .project-description {
            margin: 0 0 15px;
        }
    </style>
</head>

<body>
    <h1>Blog Viajes</h1>
        
    <div class="blog">
        <div class="contenido">
            <h2 class="project-title">Cultura y Modernidad en Tokio </h2>

            <time datetime="2022-03-05"> 5 de Marzo de 2022 </time>
            <br>
            <br>
            <img src="imagenes/tokyo 2.avif" style="height: 200px;" style="width: 200px;" alt="Imagen de Tokyo">
            <br>
            <br>
            <p class="project-description">Tokio es una ciudad que nunca duerme y siempre tiene algo nuevo que ofrecer. Desde el bullicio de Shibuya Crossing hasta la tranquilidad del Parque Ueno, Tokio es una mezcla fascinante de lo moderno y lo tradicional. Visité la Torre de Tokio para una vista panorámica de la ciudad y disfruté de una comida deliciosa en un restaurante de sushi local.</p>

        </div>

        <div class="contenido">
            <h2 class="project-title">Descubriendo la Historia en Kioto </h2>

            <time datetime="2021-11-20"> 11 de Noviembre de 2021 </time>
            <br>
            <br>
            <img src="imagenes/kioto.jpg" style="height: 200px;" style="width: 200px;" alt="Imagenes de Kioto">
            <br>
            <br>
            <p class="project-description">Kioto es una ciudad que combina lo antiguo y lo nuevo de manera perfecta. Visité el Templo Kinkaku-ji, también conocido como el Pabellón Dorado, y me maravillé con su belleza. Los jardines japoneses alrededor del templo son tranquilizantes y reflejan la serenidad de la cultura japonesa. También exploré el Bosque de Bambú de Arashiyama, una experiencia mágica que no olvidaré.</p>

        </div>

        <div class="contenido">
            <h2 class="project-title">Relajación en las Aguas Termales de Hakone </h2>


            <time datetime="2023-01-10"> 1 de Octubre de 2023 </time>
            <br>
            <br>
            <img src="imagenes/hanoke.jpg" style="height: 200px;" style="width: 200px;" alt="imagen de las aguas termales de Hanoke">
            <br>
            <br>
            <p class="project-description">Hakone es conocida por sus onsens, aguas termales que ofrecen una experiencia relajante y rejuvenecedora. Me alojé en un ryokan tradicional, donde pude disfrutar de un baño al aire libre con vistas al monte Fuji. También tomé un paseo en barco por el lago Ashi y visité el santuario Hakone-jinja, escondido entre árboles centenarios.</p>
        </div>
    </div>
</body>