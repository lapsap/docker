FROM la_ubuntu
EXPOSE 80  
COPY package.json /package.json
ENTRYPOINT ["/usr/bin/npm", "start"]
