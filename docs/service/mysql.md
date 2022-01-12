# MySQL 5.7 服务


> 我们将采用docker容器方式启动 mysql 5.7版本，方便当前开发


## 容器安装并运行

```
// MYSQL_ROOT_PASSWORD=root 环境变量表示root密码
//  --name mysql5.7 对应的是容器的自定义名称

docker run --name mysql5.7 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7


// 若M1芯片

docker run --name  mysql5.7 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d amd64/mysql:5.7

```


## 容器启动

```
docker start mysql5.7


```

## 容器停止


```
docker stop mysql5.7

```