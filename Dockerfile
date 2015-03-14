FROM node:0.10
MAINTAINER Nick Collings <nick@collingo.com>

RUN apt-get update -qyy \
	&& apt-get install -qyy redis-server

RUN mkdir -p /home/app
WORKDIR /home/app
ENV TERM=xterm-256color

COPY package.json /home/app/package.json
COPY src /home/app/src
COPY server /home/app/server

RUN npm install && npm run-script compile

# Intended volumes to mount
# VOLUME /home/deal/package.json
# VOLUME /home/deal/server
# VOLUME /home/deal/src
EXPOSE 8080
CMD ["npm", "start"]
