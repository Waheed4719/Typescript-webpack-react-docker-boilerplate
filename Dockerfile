FROM node:18-bullseye

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ENV WATCHPACK_POLLING=TRUE

CMD ["npm", "run", "start"]