# Crud de Usuarios (codigo espagetti)

### Objetivo: Simular una entrevista tecnica, el estudiante debera corregir el codigo y agregar ciertos features

---- 

### Instrucciones
- Clonar el repositorio
```bash
    git clone https://github.com/SheykoWk/users-spaghetti
    cd users-spaghetti
```

- Instalar dependencias

```bash
    npm install
```
> Importante: Revisa el Package.json e instala las dependencias que creas que hagan falta

- Revisa el app.js, ya que existen unos errores ahi dentro que tendras que resolver

- Una vez que tu app ya funciona deberas crear una conexion a una base de datos desde sequelize en el archivo database.js dentro de la carpeta de utils

- Tendras que crear el modelo de Users con almenos los siguientes valores: 
```javascript
{
    id: 1,
    first_name: 'string',
    last_name: 'string',
    email: 'string',
    password: 'string',
    birthday: 'YYYY/MM/DD'
}
```
- Ya existen ciertos archivos dentro de la carpeta users, si crees que faltan archivos crealos
- En los archivos ya creados hay una pequeña ayuda con las funciones que deben existir ahi, lo que tendras que hacer es definir los parametros y el codigo interno que se ejecutara en tus funciones, asi como definir cuando se necesiten funciones asincronas
- Los controladores deberan ejecutar acciones sobre la base de datos real a la que te estas conectando con sequelize

- Deberas ejecutar todas las acciones de CRUD para los usuarios con sus respectivos verbos (get, post, patch y delete)

> las rutas permitidas que puedes manejar son las siguientes: 
    - localhost:9000/api/v1/users
    - localhost:9000/api/v1/users/:id

[ ! ] Una Vez que ya esta finalizado tu proyecto y ya recibe las acciones de crud a los usuarios tendras que conectarlo a tu propio repositorio
1. Deberas crear un repositorio para vincularlo
2. Tendras que abrir la terminal en tu proyecto y escribir lo siguiente:
    ```bash
    git remote set-url origin <el link de tu repositorio>
    ```
    ejemplo: 
    ```bash
    git remote set-url origin https://github.com/SheykoWk/users-spaghetti.git
    ```

3. Deberas hacer un add, un commit y un push a tu repositorio
4. Vas a mandar el link de tu repositorio con tu codigo al Class-center