<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ejercicio 12</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .portfolio {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }
        .project {
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .project img {
            width: 100%;
            height: auto;
        }
        .project-content {
            padding: 15px;
        }
        .project-title {
            font-size: 1.5em;
            margin: 0 0 10px;
        }
        .project-description {
            margin: 0 0 15px;
        }
        .project-link {
            text-decoration: none;
            color: #3498db;
        }
    </style>
</head>

<body>
   
    <h1>Portafolio de Proyectos</h1>
    <div class="portfolio">
        <div class="project">
            <img src="imagenes/blog.webp" style="height: 300px;" style="width: 100px;" alt="Imagen de Arcadia">
            <div class="project-content">
                <h2 class="project-title">Un Blog</h2>
                <p class="project-description">Desarrolar un blog que hable sobre los principales problemas de los animales domesticos callegeros.</p>

                <a href="http://localhost/aprendiendo%20php/Angel/elementos%20semanticos/ejercicio11.php#" class="project-link">Más detalles</a>
            </div>
        </div>

        <div class="project">
            <img src="imagenes/lista.jpg" style="height: 300px;" style="width: 100px;" alt="imagen de guardianes del bosque">
            <div class="project-content">
                <h2 class="project-title">Receta de Cocina </h2>
                <p class="project-description">Desarrolar una pagina que contenga una receta de cocina, con una descripcion, lista de ingredientes y pasos a seguir para poder prepararla.</p>
                <a href="http://localhost/aprendiendo%20php/Angel/elementos%20semanticos/ejercicio10.php" class="project-link">Más detalles</a>
            </div>
        </div>


        <div class="project">
            <img src="imagenes/anuncio.webp" style="height: 300px;" style="width: 100px;" alt="imagen de El Legado del Dragon">
            <div class="project-content">
                <h2 class="project-title">Anuncio</h2>
                <p class="project-description">Desarrolla un anuncio de cualquier tema, dejando una seccion de comentario donde los usuarios puedan escribir.</p>
                <a href="http://localhost/aprendiendo%20php/Angel/elementos%20semanticos/ejercicio9.php" class="project-link">Más detalles</a>
            </div>
        </div>


</body>

</html>