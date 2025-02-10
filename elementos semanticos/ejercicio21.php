<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ejercicio 21</title>

    <style>
        header {
            background-color: #333;
            color: #fff;
            padding: 10px 0;
            text-align: center;
        }

        nav {
            background-color: #444;
            padding: 10px;
            text-align: center;
        }

        nav a {
            color: #fff;
            margin: 0 15px;
            text-decoration: none;
            font-weight: bold;
        }

        .contenedor {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
        }

        .producto {
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 10%;
            margin: 10px;
            padding: 20px;
            max-width: 300px;
            text-align: center;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .product img {
            max-width: 100%;
            height: auto;
            margin-bottom: 10px;
        }

        .product h2 {
            font-size: 1.5em;
            margin: 10px 0;
        }

        .buy-btn {
            display: inline-block;
            background-color: #27ae60;
            color: #fff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 10px;
        }

        footer {
            background: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;

            bottom: 0;
            width: 100%;
        }
    </style>

</head>

<body>

    <header>
        <h1>Tienda Ficticia</h1>
    </header>

    <nav>
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Ofertas</a>
        <a href="#">Contacto</a>
    </nav>

    <main class="contenedor">
        <article class="producto">
            <img src="imagenes/gojo.jpg" style="width: 200px;" style="height: 200px;" alt="Figura de Sautoro Gojo">
            <h2>Figura de Sautoro Gojo</h2>
            <p>Mini figura de Satouro Gojo del anime jujutsu kaisen en tres modelos diferentes.</p>
            <a href="#" class="buy-btn">Añadir al Carrito</a>
        </article>

        <article class="producto">
            <img src="imagenes/zero- shopping.jpg" style="width: 250px;" style="height: 200px;" alt="Figura de Zero Two">
            <h2>Figura de Zero Two</h2>
            <p>Mini figura de Zero Two delanime Darling in the Franxx</p>
            <a href="#" class="buy-btn">Añadir al Carrito</a>
        </article>

        <article class="producto">
            <img src="imagenes/luffy-shoppy.jpg" style="width: 200px;" style="height: 200px;" alt="FIgura de Luffy">
            <h2>Figura de Luffy</h2>
            <p>FIgura de Luffy del anime One Piece</p>
            <a href="#" class="buy-btn">Añadir al Carrito</a>
        </article>
    </main>

    <footer>
        <p>&copy; 2024 Tienda Ficticia. Todos los derechos reservados.</p>
    </footer>

</body>

</html>