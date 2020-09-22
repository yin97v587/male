$(function () {
    $('#maqima').next().html(yzm())
    let flag1 = flag2 = flag3 = flag4 = flag5 = flag6 = 0
    $('#username').keyup(function () {
        a = /^[a-zA-Z0-9]{4,16}$/.test(this.value)
        if (a) {
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
        a = /^[a-zA-Z0-9]{4,16}$/.test(this.value)
        if (a) {
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
    $('#pwd2').keyup(function () {
        a = this.value
        b = $('#pwd').val()
        if (a == b) {
            flag3 = 1
            $('#pwd2').css({
                borderColor: "green",
                color: "green",
            })
        } else {
            flag3 = 0
            $('#pwd2').css({
                borderColor: "red",
                color: "red",
            })
        }
    })
    $('#tel').keyup(function () {
        a = /^[0-9]{11}$/.test(this.value)
        if (a) {
            flag4 = 1
            $('#tel').css({
                borderColor: "green",
                color: "green",
            })
        } else {
            flag4 = 0
            $('#tel').css({
                borderColor: "red",
                color: "red",
            })
        }
    })
    $('#maqima').keyup(function () {
        a = this.value
        b = $(this).next().html()
        if (a == b) {
            flag5 = 1
            $('#maqima').css({
                borderColor: "green",
                color: "green",
            })
        } else {
            flag5 = 0
            $('#maqima').css({
                borderColor: "red",
                color: "red",
            })
        }
    })
    $('#telmaqima').keyup(function () {
        a = this.value
        b = 'abcd'
        if (a == b) {
            flag6 = 1
            $('#telmaqima').css({
                borderColor: "green",
                color: "green",
            })
        } else {
            flag6 = 0
            $('#telmaqima').css({
                borderColor: "red",
                color: "red",
            })
        }
    })


    $('#maqima').next().click(function(){
        $(this).html(yzm())
    })

    maqimabadgirl = 0
    $('.read').click(function () {
        if (++maqimabadgirl % 2) {
            $('.ti').addClass('bgorn').attr("disabled", false)
        } else {
            $('.ti').removeClass('bgorn').attr("disabled", true)
        }
    })

    $('input:submit').click(function (e) {
        console.log(flag1,flag2,flag3,flag4,flag5,flag6);
        if (flag1+flag2+flag3+flag4+flag5+flag6==6) {
            alert("登录成功")
        } else {
            e.preventDefault();
            alert("不会吧，不会有人看不懂提示吧？")
        }
    })


    // 娱乐区
    // str = 'azAZ'
    // a-z 97-122 
    // A-Z 65-90
    // m = str.charCodeAt(3)
    // n = String.fromCharCode(97)
    // console.log(m);
    


    function yzm(){
        n = [0, 0, 0, 0]
        for (let i = 0; i < n.length; i++) {
            c3 = parseInt(Math.random() * 2)
            if (c3 == 0) {
                x = parseInt(Math.random() * 10) + 48
                n[i] = String.fromCharCode(x)
            }
            if (c3 == 1) {
                x = parseInt(Math.random() * 26) + 97
                n[i] = String.fromCharCode(x)
            }
            if (c3 == 2) {
                x = parseInt(Math.random() * 26) + 65
                n[i] = String.fromCharCode(x)
            }
            // console.log('asc = ',x,'word = ',n[i]);   
        }
        return n.join('')
    }


















})