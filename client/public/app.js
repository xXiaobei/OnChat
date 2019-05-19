
//登陆到聊天室
const onchat_login = () => {
    $uname = $("#userName").val();
    if ($uname.trim() == "") {
        alert("请输入用户名，再重试...");
        return;
    }

    var client = io.connect("http://127.0.0.1:3999");

    let d = new Date();
    const t = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    //链接服务器，验证登陆
    client.emit("login", { n: $uname, t: t });
    //服务器返回登陆状态
    client.on("login_Status", (data) => {
        console.log(data)
        if (data) {
            window.location.href = "http://127.0.0.1:3000/home"
        }
    });
}