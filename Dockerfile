FROM node:alpine
COPY . /app
WORKDIR /app
EXPOSE 8046
CMD node index.js
