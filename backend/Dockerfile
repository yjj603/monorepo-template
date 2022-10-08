FROM node:16
RUN mkdir -p /home/nest
COPY ./backend /home/nest
WORKDIR /home/nodeNestjs
RUN npm install pm2 -g
EXPOSE 4008
ENTRYPOINT ["npm", "run"]
CMD ["start:prod"]