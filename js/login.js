$(function () {
    $('#banner .loginbox li').click(function () {
        a = $(this).index()
        $('#banner .box2 li:eq(' + a + '),#banner .box2 li:eq(' + a + ')').addClass('ck').siblings().removeClass('ck')
        $('#banner .loginbox:eq(' + a + ')').removeClass('unn').siblings().addClass('unn')
        console.log(a);
    })
    let flag1 = 0.0
    let flag2 = 0
    $('#username').keyup(function () {
        namepp = /^[a-zA-Z0-9]{4,16}$/.test(this.value)
        if (namepp) {
            flag1 = 1
            $('#username').css({
                borderColor: "green",
                color: "green",
            })
        } else {
            flag1 = 0
            $('#username').css({
                borderColor: "red",
                color: "red",
            })
        }
    })
    $('#pwd').keyup(function () {
        pwdpp = /^[a-zA-Z0-9]{4,16}$/.test(this.value)
        if (pwdpp) {
            flag2 = 1
            $('#pwd').css({
                borderColor: "green",
                color: "green",
            })
        } else {
            flag2 = 0
            $('#pwd').css({
                borderColor: "red",
                color: "red",
            })
        }
    })

    $('input:submit').click(function(e){
        if (flag1==1 && flag2==1) {
            alert("登录成功")
        } else {
            e.preventDefault();
            alert("不会吧，不会有人看不懂提示吧？")
        }
    })






















})