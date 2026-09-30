# Express Jandtocode - Portal de Transporte

Frontend del portal de transporte, desarrollado con Angular. La aplicación permite
registrar usuarios, iniciar sesión, consultar el saldo de la tarjeta y realizar
recargas con cálculo de bonos.

Este frontend consume la API del backend del proyecto. **Para que funcione, es
obligatorio descargar y ejecutar primero el backend:**

[https://github.com/jandtocode/express-backend-web](https://github.com/jandtocode/express-backend-web)

## Requisitos previos

- **Node.js** y **npm**
- **Angular CLI**
- El backend de Express Jandtocode ejecutándose en `http://localhost:8080`

Puedes instalar Angular CLI de forma global con:

```bash
npm install -g @angular/cli
```

## Instalación

### 1. Descargar el backend

Sigue las instrucciones del README del backend para levantar la API y su base de
datos. La API debe quedar disponible en `http://localhost:8080`.

### 2. Descargar este proyecto

Clona el repositorio y entra en su carpeta:

```bash
git clone https://github.com/jandtocode/project-express-frontend.git
cd project-express-frontend
```

### 3. Instalar las dependencias

Desde la raíz de este proyecto, ejecuta:

```bash
npm install
```

## Ejecutar la aplicación

Con el backend ejecutándose, inicia el servidor de desarrollo:

```bash
npm start
```

Después, abre [http://localhost:4200](http://localhost:4200) en el navegador.

La aplicación se recarga automáticamente al modificar los archivos del proyecto.

## Funcionalidades

- Registro de usuarios en `/auth/register`
- Inicio de sesión en `/auth/login`
- Dashboard principal en `/dashboard`
- Consulta del saldo en `/dashboard/user`
- Cálculo y confirmación de recargas en `/dashboard/recharge`

Las rutas del dashboard requieren una sesión iniciada en el backend.

## Comandos útiles

Compilar el proyecto:

```bash
npm run build
```

## Configuración de la API

Por defecto, el frontend utiliza la API ubicada en:

```text
http://localhost:8080/api
```

Si el backend se ejecuta en otra dirección o puerto, actualiza `baseUrl` en los
archivos de entorno dentro de `src/environments/`.

## Recursos

- [Repositorio del backend](https://github.com/jandtocode/express-backend-web)
- [Angular CLI](https://angular.dev/tools/cli)
