FROM node:16
RUN mkdir -p /home/nest
COPY ./backend /home/nest
COPY ./library /home/nest
COPY ./node_modules /home/nest
WORKDIR /home/nest/backend
EXPOSE 4008
ENTRYPOINT ["npm", "run"]
CMD ["start:prod2"]