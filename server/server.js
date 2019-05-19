
//初始化MongoDB的driver
const mongo = require("mongodb").MongoClient;
//初始化socket,绑定到3999端口
const client = require("socket.io").listen("3999").sockets;

//用户表users
let onchat_users = null;
//群组表groups
let onchat_groups = null;
//消息表messages
let onchat_messages = null;


//链接到mongodb
//mongodb 为动态的schema 会自动创建onchat数据库
const dbUrl = 'mongodb://127.0.0.1/onchat';
mongo.connect(dbUrl, (err, dbClient) => {

    check_error(err); // 存在异常则抛出    

    //赋值对应的表
    onchat_users = dbClient.db("users");
    onchat_groups = dbClient.db("groups");
    onchat_messages = dbClient.db("messages");

    console.log("MongoDB successfully connected ... ");
});

//用户登陆逻辑
client.on("login", (data) => {
    onchat_users.insert({ n: data.n, t: data.t });
    client.emit('login_Status', true);
});



//异常处理
function check_error(err) {
    if (err) {
        throw err;
    }
}
