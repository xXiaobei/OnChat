
//登陆到聊天室
function onchat_login() {
    $uname = $("#userName").val();
    if ($uname.trim() == "") {
        alert("请输入用户名，再重试...");
        return;
    }

    socket = io.connect("http://192.168.1.12:3999");

    let d = new Date();
    const t = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    socket.emit("login", { n: $uname, t: t });
    socket.on("login_Status", (data) => {
        if (data) {
            window.location.href = "http://192.168.1.12:3000/home"
        }
    });
}