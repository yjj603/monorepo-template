# pnpm
- pnpm add --workspace
- pnpm outdated
- pnpm prune 不支持递归
# docker
- systemctl start docker
- systemctl restart docker
- systemctl stop docker
- docker rmi [镜像id/名称]
- docker exec -it bash
- docker run
    - -i：表示运行容器
    - -t：表示容器启动后会进入其命令行。加入这个两个参数后，容器创建就能登录进去。即分配一个伪终端
    - -v：表示目录映射关系（目录挂载）（前者是宿主机目录，后者是映射到宿主机上的目录），可以使用多个-v做多个目录或文件映射。注意：最好做目录映射，在宿主机上做修改，然后共享到容器上
    - -d：在run后面加上-d参数，则会创建一个守护式容器在后台运行（这样创建容器后不会自动登录容器，如果只加-i -tl两个参数，创建后就会自动进去容器）
    - -p：表示端口映射，前者是宿主机端口，后者是容器内的映射端口。可以使用多个-p做多个端口映射
    - -e：添加环境变量
- docker inspect
- docker rm -f
- docker image prune -af
# mysql
- docker run -id --name=mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root mysql:5.7
- docker exec -it mysql /bin/bash
- mysql -uroot -proot --default-character-set=utf8
- docker run --name mysql --restart=always -e MYSQL_ROOT_PASSWORD=123456 -d -p 3306:3306 mysql:tag
- 权限
  - mysql -uroot  -p
  - SELECT Host, User FROM mysql.user
  - GRANT ALL ON *.* TO 'someuser'@'somehost';
