const Sequelize = require('sequelize');
const config = require('./config')

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

// 测试连接
sequelize
    .authenticate()
    .then(() => {
        console.log('和MySQL建立数据库连接成功...')
    })
    .catch((err) => {
        console.log('数据库连接建立失败...', err)
    });

// 定义model时，传入名称user，默认的表名就是users。
// 第二个参数指定列名和数据类型，如果是主键，需要更详细地指定。
// 第三个参数是额外的配置，我们传入{ timestamps: false }是为了关闭Sequelize的自动添加timestamp的功能。
const User = sequelize.define('user', {
    id: { type: Sequelize.INTEGER, primaryKey: true },
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING }
});

// force: true will drop the table if it already exists
// 创建表，使用promise方式
// User.sync({ force: true }).then(() => {
//     // Table created
//     return User.create({
//         id: 1,
//         username: 'steven rogers',
//         password: '123456'
//     }).then(p => {
//         console.log('created.' + JSON.stringify(p));
//     }).catch(function (err) {
//         console.log('failed: ' + err);
//     });
// });

// await方式
// (async () => {
//     var user = await User.create({
//         id: 1,
//         username: 'steven rogers',
//         password: '123456'
//     });
//     console.log('created.' + JSON.stringify(user));
// })();

// 查询数据
(async () => {
    const users = await User.findAll({
        // where: {
        //     username: 'luo'
        // }
    });
    console.log(`find ${users.length} users:`);
    for (let u of users) {
        console.log(JSON.stringify(u));
    }
})();

// 更新数据
(async () => {
    
})();