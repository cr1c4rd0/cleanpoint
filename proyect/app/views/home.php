<body>
    <div class="container">
        <header>
            <img src="../img/logo.svg" alt="CleanPoint Logo" class="logo">
        </header>

        <main>
            <section class="left-section">
                <div class="text-box">
                    <h2>Sign in to</h2>
                    <h1>Clean Point</h1>
                    <p>Si aún no tiene una cuenta puede<br>
                        <a href="#">Crear una cuenta aquí</a>
                    </p>
                </div>
                <img src="../img/userlogin.svg" alt="Ilustración persona" class="illustration">
            </section>

            <section class="right-section">
                <h2>Iniciar sesión</h2>
                <form method="POST" action="../controllers/loginController.php">
                    <input type="text" name="usuario" placeholder="Ingrese correo o usuario" required>
                    <input type="password" name="password" placeholder="Contraseña" required>
                    <a href="#" class="forgot">¿Olvidaste tu contraseña?</a>
                    <button type="submit">Iniciar sesión</button>
                </form>
            </section>
        </main>
    </div>
</body>
</html>