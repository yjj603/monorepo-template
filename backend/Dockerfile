FROM node:16
RUN mkdir -p /home/nest
RUN ls
COPY ./ /home/nest
WORKDIR /home/nest
EXPOSE 4008
ENTRYPOINT ["npm", "run"]
CMD ["start:prod2"]