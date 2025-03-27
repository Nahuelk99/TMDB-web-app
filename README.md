# 🎬 Frontend de Películas

Este es el frontend de una aplicación que utiliza la API de The Movie Database (TMDB) para mostrar información sobre películas populares, mejor calificadas, en cartelera y próximas a estrenarse. La aplicación ofrece una experiencia interactiva y fácil de usar para explorar películas y obtener detalles de cada una.

## 🚀 Características

- Listado de películas por categoría (Populares, Mejor calificadas, En cartelera y Próximos estrenos).
- Búsqueda de películas por título.
- Detalles de cada película, incluyendo sinopsis, puntuación y fecha de estreno.
- Diseño responsivo y atractivo.

## 🛠️ Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir la interfaz de usuario.
- **Tailwind CSS**: Framework para el diseño y estilizado de la aplicación.
- **TMDB API**: Proporciona la información de películas en tiempo real.

## 📌 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
- **Node.js** (versión recomendada: 16 o superior)
- **npm** o **yarn**

## 🔧 Instalación y Configuración

1. Clona el repositorio:
   ```sh
   git clone https://github.com/Nahuelk99/TMDB-web-app.git
   cd TMDB-web-app
   ```

2. Instala las dependencias:
   ```sh
   npm install
   # o
   yarn install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y agrega tu clave de API de TMDB:
   ```env
   TMDB_API_KEY=tu_api_key_aqui
   ```
   > Si no tienes una API Key, puedes obtenerla siguiendo estos pasos:
   > - Regístrate en [TMDB](https://www.themoviedb.org/)
   > - Ve a "Configuración de cuenta" > "API" > "Solicitar clave de API"
   > - Copia la clave y pégala en el archivo `.env`

4. Inicia el servidor de desarrollo:
   ```sh
   npm start
   # o
   yarn dev
   ```

## 🎥 Capturas de Pantalla

![image](https://github.com/user-attachments/assets/26c9ea4f-cada-4902-baca-316c06e2bbd3)


## 📌 Mejoras Futuras

- Implementación de autenticación para guardar películas favoritas.
- Integración de un sistema de comentarios y calificaciones.
- Soporte para múltiples idiomas.

## 🤝 Contribución

Si deseas contribuir a este proyecto, puedes:
1. Hacer un fork del repositorio.
2. Crear una nueva rama (`git checkout -b feature-nueva-funcionalidad`).
3. Realizar cambios y hacer commit (`git commit -m 'Agrega nueva funcionalidad'`).
4. Enviar un pull request.

## 📜 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.


