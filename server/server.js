
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

// const onchat = null;

//链接到mongodb
const dbName = "onchat";
const dbClient = new mongo('mongodb://127.0.0.1');
dbClient.connect(err => {
    if(err) throw err;
    console.log("MongoDB Successfully connected ...");
    const db = dbClient.db(dbName);

    client.on('connection', (socket) => {
        console.log('Client connected ' + socket.id);
    
        //用户登陆逻辑
        socket.on("login", (data) => {
            console.log(data)
            db.collection("users").insert({n:data.n,t:data.t});
            socket.emit('login_Status', true);
        });
    
        //断开链接
        socket.on('disconnect', () => {
            console.log('Client disconnect from server ' + socket.id);
        });
    });
});

