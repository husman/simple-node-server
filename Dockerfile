FROM mhart/alpine-node

WORKDIR /src

COPY package.json .
COPY index.js .
RUN npm i

COPY . .

EXPOSE 8000

CMD ["npm", "start"]