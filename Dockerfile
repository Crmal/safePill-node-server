FROM node:16.16.0-alpine AS INSTALLER

WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn --prod
RUN yarn global add @nestjs/cli
RUN yarn add -D @types/node

COPY . .
RUN yarn build

FROM node:16.16.0-alpine

WORKDIR /usr/src/app

COPY --from=INSTALLER /usr/src/app .

ENV NODE_ENV production
ARG PORT

CMD ["node", "dist/main.js"]
EXPOSE ${PORT}
