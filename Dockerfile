FROM --platform=linux/amd64 node:alpine
COPY . /app
WORKDIR /app
CMD node index.js
