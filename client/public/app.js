
//登陆到聊天室
function onchat_login() {
    $uname = $("#userName").val();
    if($uname.trim() == "") {
        alert("请输入用户名，再重试...");
        return;
    }
    
}