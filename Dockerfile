FROM ubuntu
RUN apt-get update
RUN apt-get install -y libpq-dev
RUN apt-get install -y nodejs npm
RUN apt-get install -y wget vim 
RUN ln -s /usr/bin/nodejs /usr/bin/node
RUN npm install pg
COPY main.js /main.js
COPY package.json /package.json
COPY files/db_read.js /files/db_read.js
RUN apt-get clean
EXPOSE 80
ENTRYPOINT ["/usr/bin/npm", "start"]
