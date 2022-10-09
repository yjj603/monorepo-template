FROM node:16
RUN mkdir -p /home/nest
COPY ./backend ./library ./node_modules /home/nest/
COPY ./package.json ./pnpm-lock.yaml ./pnpm-workspace.yaml  /home/nest/
ENV ENV = prod NAME=pkg1
WORKDIR /home/nest/backend
EXPOSE 4008
ENTRYPOINT ["npm", "run"]
CMD ["start:prod2"]