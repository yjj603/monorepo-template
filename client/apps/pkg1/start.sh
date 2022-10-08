#!/bin/bash
docker pull yjj603/client-pkg1:latest
docker rm -f client-pkg1
docker run -d -p 4001:80 --name client-pkg1 yjj603/client-pkg1