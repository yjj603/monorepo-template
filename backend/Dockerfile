FROM node:16
RUN mkdir -p /home/nest
COPY ./ /home/nest
RUN cd /home/nest
RUN rm -rf /client
RUN rm -rf /backend/apps
RUN rm -rf /backend/libs
WORKDIR /home/nest/backend
EXPOSE 4008
ENTRYPOINT ["npm", "run"]
CMD ["start:prod2"]