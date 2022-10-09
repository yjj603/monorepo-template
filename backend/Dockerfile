FROM node:16
RUN mkdir -p /home/nest
COPY ./ /home/nest/
ENV ENV 'prod'
ENV NAME 'pkg1'
WORKDIR /home/nest/backend
EXPOSE 4008
ENTRYPOINT ["npm", "run"]
CMD ["start:prod2"]