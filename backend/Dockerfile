FROM node:16
RUN mkdir -p /home/nest
COPY ./dist /home/nest
COPY ./node_modules /home/nest
WORKDIR /home/nodeNestjs
EXPOSE 4008
CMD ["node","/home/nodeNestjs/dist/apps/pkg1/main.js"]