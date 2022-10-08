FROM node:16
RUN mkdir -p /home/nest
COPY ./ /home/nest
WORKDIR /home/nodeNestjs
EXPOSE 4008
CMD ["node","/home/nodeNestjs/dist/apps/pkg1/main.js"]