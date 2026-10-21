FROM node:24-alpine3.23 AS build
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build
FROM node:24-alpine3.23 AS production
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json .
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
EXPOSE 3333
CMD ["npm", "run", "start:prod"]
FROM node:24-alpine3.23 AS development
WORKDIR /app
ENV NODE_ENV=development
COPY package*.json .
RUN npm ci
EXPOSE 3333
CMD ["npm", "start"]
