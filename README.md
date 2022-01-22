# Descripción del Proyecto

### Tecnologias utilizadas

Para la construcción de esta aplicación se utilizo Angular en su versión 13. Adicionalmente se utilizaron herramientas como Sweet Alert, Bootstrap, Servicios, Interfaces, Interceptores, Routing, entre otros.

### Ejecución de la app

Para ejecutar la aplicación en modo desarrollo primero se debe hacer la instalación de los paquetes por medio del comando _npm install_, Una vez hecho esto se debe configurar la url de la api en el archivo _proxy.conf.json_. Una vez se tenga configurada la url, se debe ejecutar el comando _npm start_.

### Funcionamiento de la Aplicación

Para hacer la revisiópn de la aplicación, debe ingresar a la url http://localhost:<puerto>. Una vez ahi, se desplegara el login en el cual podra ingresar con un usuario previamente creado. Si no se ha creado ningun usuario, puede hacerlo a traves de la opción de registro que se encuentra en la misma pantalla.

Una vez haya ingresado a la aplicación, se mostrara una pantalla de bienvenida la cual tendra un menu en la parte superior y un titulo de bienvenida. El menu tiene las siguientes opciones:

- Clientes: Esta opción mostrara el listado de los cientes que se encuentran creados en la aplicación. Dentro de este listado usted podra ver los telefonos que tiene registrado el cliente o crear un nuevo telefono. En el listado de telefonos del cliente, usted podra crearle una nueva reparación al telefono que seleccione.
- Reparaciones: Esta opción mostrara un listado con las reparaciones realizadas ordenandolas desde la fecha mas reciente a la mas antigua.
- Cerrar Sesión: Esta opción nos permitira cerrar la sesión y redirigirnos al login
