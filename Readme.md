# Authenticacion Utilizando Mern

## Requisitos previos

Asegúrate de tener instalado lo siguiente en tu sistema:

- NPM >= 6.0.0
- Node.js >= 14.0.0: https://nodejs.org/
- MongoDB >= 6.0.0: https://www.mongodb.com/try/download/community

## Pasos para clonar y ejecutar el proyecto

Clonar el repositorio:

```
git clone https://github.com/alex2rive3/AutenticacionMern
cd AutenticacionMern
```

Instalar dependencias del servidor y cliente:

```

cd server
npm install
```

Volver al directorio principal e instalar dependencias del cliente

```
cd ..

cd client
npm install
```

## Configurar el archivo .env en el servidor:

En la carpeta server, crea un archivo llamado .env y define las siguientes variables de entorno:

```
MONGODB_URI=mongodb://localhost:27017 # URL de conexión a la base de datos MongoDB
LOCAL_HOST=http://localhost:5173
```

## Iniciar el servidor y el cliente:

```
# En la carpeta 'server', inicia el servidor

cd server
npm start

# En la carpeta 'client', inicia el cliente

cd client
npm run dev
```

Acceder a la aplicación en tu navegador:
Abre tu navegador y visita http://localhost:5173. Esto cargará la aplicación de React que se ejecuta en el cliente.
