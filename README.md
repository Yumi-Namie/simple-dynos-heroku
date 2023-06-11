# git init sin -y para poder configurar como queremos
$ git init

{
  "name": "heroku-example",
  "version": "1.0.0",
  "description": "Factoriaf5 - docker compose and heroku example",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Yumi",
  "license": "ISC"
}

# instalar express -> node-modules
$ npm install express --save

# Test para app.js
$ node app.js
# Abrimos en navegado localhost:
3000

# In app.js, we set the port to be listened from an enviroment variable. If the variable is not defined, 3000 is used: 
``` app.listen(process.env.PORT || 3000, ... ```

# Creamos un img c dockerfile pero antes, descobrir version denode
$node --version

#Dockerfile
FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "dist/app.js"]

# Antes de crear img, abrir docker desktop
$ docker build -t <nombre>:tag .
( $ docker build -t docker-test:1.0.0 . )

# Comprobar si esta criado img (sin usar extension de docker)
$ docker images
( $ docker images docker-test )

# Ahora que tenemos img podemos crear el contenedor
$ docker run -p 3001:3000 docker-test:1.0.0

# en el navegador, funciona ahora con port 3001 o con el numero que colocaste antes de los dos puntos del port contenedor

# ver los contenedores
$ docker ps

#Para para el contenedor
$ docker stop <nombre o id>

# Para cualquier alteracion se debe hacer el build de novo*

# para hacer pull / push en dockerhub c usuario e a repo
#crear un repo en dockerhub
$ docker login
$ docker tag docker-test:1.0.0 rnyumi/docker-test1
$ docker push -a rnyumi/docker-test1

#Add the Procfile in your project root dir.

#Check if everything is correctly configured for Heroku, by running: heroku local web --port xxxx

