# Build
FROM node:20.10.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production
FROM node:20.10.0-alpine AS production
WORKDIR /app
COPY package*.json ./
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
RUN npm install
COPY --from=build /app/dist ./dist
CMD ["sh", "-c", "npm run start"]