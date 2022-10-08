FROM node:16
RUN mkdir -p /home/nest
COPY ./ /home/nest
WORKDIR /home/nodeNestjs
EXPOSE 4008
RUN cd ..
RUN ls
CMD ["node","/dist/apps/pkg1/main.js"]