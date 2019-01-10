#Stage 1: Build Angular Application ##
FROM node:latest as node

WORKDIR /fjm-interface

COPY . .

RUN npm install
RUN $(npm bin)/ng build

#Stage 2 run nginx to serve the application ##
FROM nginx

COPY --from=builder /fjm-interface/dist/* /usr/share/nginx/html/

EXPOSE 80
