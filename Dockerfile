FROM node:20.9.0 as dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .

EXPOSE 3020

CMD [ "npm", "run", "start" ]