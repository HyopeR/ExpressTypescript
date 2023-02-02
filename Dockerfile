FROM node:19-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /usr/src/try-backend
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:19-alpine
WORKDIR /usr/src/try-backend
COPY --from=builder /usr/src/try-backend/package.json ./
COPY --from=builder /usr/src/try-backend/dist ./dist
RUN npm install -g patch-package
RUN npm install --production
ENV NODE_ENV production
ENV PORT 3306
EXPOSE 3306
CMD ["npm", "start"]
