FROM node:12.14-alpine

#A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
WORKDIR '/ComponentRex'

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./

# Installs all node packages
RUN npm install


# Copies everything over to Docker environment
COPY . .


# Uses port which is used by the actual application
EXPOSE 9005

# Finally runs the application may need to change to "npm", "run", "start:server"
CMD [ "node", "server.js" ]
