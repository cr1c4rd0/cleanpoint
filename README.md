# cleanpoint
MVP en JavaScript + Bootstrap 5 que usa archivos JSON (sin base de datos) para cubrir los módulos de los mockups: login, dashboard, gestión de usuarios/roles, registro de pesos y sistema de puntos.

# Lista de RF que incluyen
## Login (index.html)
- Usa data.js para validar credenciales.
- Guarda sesión en localStorage (sin backend).

## Dashboard (dashboard.html)
- Muestra clientes programados y sus recolecciones.
- Cada tarjeta incluye nombre, tipo de residuo, localidad, peso y badge Gold/Silver/Diamond.
- Tarjetas estilizadas con bordes redondeados, sombras y degradados.
- Estadísticas resumidas (Collection, Deficit, Active Users, New Customers).
- Gráfico de línea de ejemplo con Chart.js (“Claims Over the Years”).

## Gestión de Usuarios (users.html)
- Lista interactiva con nombre, rol y estado (Online/Offline) usando badges verdes o amarillos.
- Imágenes de avatar dinámicas (pravatar).
- Permite visualizar la jerarquía de roles: Administrador, Seller, Support.

## Registro de Pesos (weight-record.html)
- Selector de tipo de residuo (orgánico, inorgánico, peligroso).
- Registro de peso con fecha y tipo.
- Al guardar, se almacena localmente (localStorage) y se actualiza:
    - Lista de transacciones recientes.
    - Gráfico de evolución del peso recolectado (línea).

## Sistema de Puntos (points.html)
- Calcula puntos acumulados, redimidos y “perdidos”.
- Tres gráficos tipo doughnut con Chart.js (Total, Perdidos, Recolección).
- Muestra métricas numéricas y botón simulado de “Redeem Points”.

# Usuarios de prueba
- Danielle Campbell | Rol: Administrador | User: danielle@cleanpoint.co | Pass: admin123
- Nicholas Patrick | Rol: Administrador | User: nicholas@cleanpoint.co" | Pass: admin123
- Cordell Edwards| Rol: Seller | User: cordell@cleanpoint.co"| Pass: seller123
- Derrick Spencer | Rol: Support | User: derrick@cleanpoint.co | Pass: support123
- Larissa Burton | Rol: Seller | User: larissa@cleanpoint.co | Pass: admin123
- Pedro Picapiedra| Rol: Seller | User: pedro@cleanpoint.co | Pass: admin123

# Look & Feel
- Paleta morada con degradado (#5A33D6 → #6A49E4).
- Tipografía: Poppins (Google Fonts)
- Badges personalizados:
    - Oro → degradado amarillo/naranja.
    - Plata → gris metalizado.
    - Diamante → celeste brillante.
- Diamante → celeste brillante.
    - Dashboard → bi-speedometer2
    - Usuarios → bi-people
    - Pesos → bi-graph-up
    - Puntos → bi-gem
- Tarjetas con sombras suaves y bordes de 24 px redondeados.

# Datos simulados (data.js)
- CP_USERS → 6 usuarios con roles, emails y contraseñas.
- CP_COMPANIES → Empresas recolectoras.
- CP_TYPES → Tipos de residuos con puntos por kg.
- CP_COLLECTIONS → Programación de recolecciones (usuario, empresa, fecha).
- CP_WEIGHTS → Pesos históricos (para gráficos).
- CP_POINTS → Sistema de puntos con historial de movimientos.

# Cómo ejecuarlo
1. Abre index.html con doble clic (no requiere servidor).
2. Ingresa con un usuario de prueba.
3. Navega entre las secciones desde el sidebar.