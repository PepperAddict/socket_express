FROM node:12.18.3

WORKDIR /
COPY package*.json ./
RUN npm install
COPY . /
EXPOSE 80
CMD ["npm", "run", "start"]