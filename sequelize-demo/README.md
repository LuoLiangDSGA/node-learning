## Node.js之Sequelize起步

### 开始
提前安装好Node，MySQL

> 使用npm初始化一个node项目
```shell
$ mkdir sequelize-demo
$ cd sequelize-demo
$ npm init
```

> 添加相关依赖

```shell
$ npm install --save sequelize
$ npm install --save mysql2
```

> 项目结构如下

```
sequelize-demo/
|
+- .vscode/
|  |
|  +- launch.json <-- VSCode 配置文件
|
+- config.js <-- MySQL配置文件
|
+- app.js <-- 入口js
|
+- package.json <-- 项目描述文件
|
+- node_modules/ <-- npm安装的所有依赖包
```