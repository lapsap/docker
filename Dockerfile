FROM ubuntu
RUN apt-get update
RUN apt-get install -y libpq-dev
RUN apt-get install -y nodejs npm
RUN apt-get install -y wget vim 
RUN npm install pg
RUN ln -s /usr/bin/nodejs /usr/bin/node
COPY main.js /main.js
COPY package.json /package.json
EXPOSE 8000
RUN apt-get clean 
ENTRYPOINT ["/usr/bin/npm", "start"]
