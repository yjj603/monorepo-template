FROM node:16
RUN mkdir -p /home/nest
COPY ./ /home/nest
WORKDIR /home/nest
RUN npm install pm2 -g
EXPOSE 4008
ENTRYPOINT ["npm", "run"]
CMD ["start:prod2"]