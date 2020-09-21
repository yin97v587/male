
$(function () {

    $("#banner .pptbox").slidebox({
        boxh: 600,//盒子的高度
        w: 1000,//图片的宽度
        h: 600,//图片的高度
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 24,//控制按钮宽度
        controlsH: 24,//控制按钮高度
        radius: 12,//控制按钮圆角度数
        controlsColor: "#d8d8d8",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
    })

    $("#stn .pptbox").slidebox({
        boxh: 520,//盒子的高度
        w: 1200,//图片的宽度
        h: 520,//图片的高度
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 24,//控制按钮宽度
        controlsH: 24,//控制按钮高度
        radius: 12,//控制按钮圆角度数
        controlsColor: "#d8d8d8",//普通控制按钮的颜色
        controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
    })

    // banner添加内容以及交互
    for (let i = 0; i < 15; i++) {
        $('#banner .fr li:eq(' + i + ')').append(`
            <p>${i+1}</p>
            <span>聖杯戦争第${i + 1} 职阶，看起来猛的一批，实际上贼拉跨，门都出不了</span>
            <img src="./imgs/9${i}.png" alt="">
        `)
        // ///////////////
        $('#banner .fl .controls li:eq(' + i + ')').append(i + 1)          // 这里在给轮播下面的循环按钮加数字，但是加不上
        // ///////////////////
        $('#introduce>ul>li:eq(' + i + ')').append(`
            <img src="./imgs/servant (${i + 1}).webp">
            <img src="./imgs/img/index05_18.jpg" alt="">
        `)
        $('#zero>.leftbox>ul>li:eq(' + i + ')').append(`
        <img src="./imgs/servant (${i + 1}).webp">
        `)
        $('#stn>.pptbox>ul>li:eq(' + i + ')').find('a>ul>li').append(`
        <img src="./imgs/servant (${i + 1}).webp">
        `)
        let a = parseInt(Math.random() * 22 + 1)
        // console.log(a);
        $('#maylike>ul>li:eq(' + i + ')').append(`
        <img src="./imgs/servant (${a}).webp">
        `)
        $('.product_6 >ul>li:eq(' + i + ')').append(`
            <div class="product_6p">
                <p>常见职阶精选</p>
                <p>猛的雅痞</p>
                <p>买一送一</p>
            </div>
            <img src="./imgs/9${i+2}.png">
        `)
    }

    $('#banner .fr li').mouseenter(function () {
        $('#banner .fr li').removeClass('ck')
        $(this).addClass('ck')
    })

    // introduce部分
    $('#introduce>ul>li').addClass('fl').mouseenter(function () {
        $('#introduce>ul>li').removeClass('ck')
        $(this).addClass('ck')
    })




    $('#zero .rightbox li:first-child').children('.jieshao').toggleClass('un')
    $('#zero .rightbox li:first-child').children('.bookname').toggleClass('unn')
    $('#zero .rightbox li:first-child').css('height', '170px').css('background', 'url(./imgs/素材图片/书籍/23353342-1_l.jpg) no-repeat').css('background-position', '-8px 1px')

    $('#zero .rightbox li').mouseenter(function () {
        $('#zero .rightbox li').children('.jieshao').addClass('unn')
        $('#zero .rightbox li').children('.bookname').removeClass('unn')
        $('#zero .rightbox li').css('height', '40px').css('background', 'none')
        $(this).children('.jieshao').removeClass('unn')
        $(this).children('.bookname').addClass('unn')
        $(this).css('height', '170px').css('background', 'url(./imgs/素材图片/书籍/23353342-1_l.jpg) no-repeat').css('background-position', '-8px 1px')
    })

    // 改动过的轮播部分内容
    $('#stn').find("h2>span>span").mouseenter(function(){
        //点击一个控制按的时候，给他加上当前的样式，把他的同辈的当前样式移除
        $(this).addClass("ck").siblings().removeClass("ck");

        var index=$('#stn').find("h2>span>span").index(this);
        k=index+1;
        leftx=-k*1200
        $('#stn').find(".innerwrapper").animate({"left":leftx},300)
        // 做的不好，勉强能用
    });	

    
    // 猜你喜欢的随机按钮
    $('.huan').click(function () {
        let b = []
        $('#maylike>ul>li').html('')
        for (let i = 0; i < 13; i++) {
            a = parseInt(Math.random() * 22 + 1)
            
            if(b.indexOf(a)==-1){
                b[i]=a
                console.log(b);
                $('#maylike>ul>li:eq(' + i + ')').append(`
                <img src="./imgs/servant (${a}).webp">
                `)
            }else{
                i--
            }
        }
        $('#maylike>ul>li>img').toggle().fadeIn(500)
    })

    // 地下6广告
    // $('.product_6 li'),addClass('clearfix')

    $('.footer_link>ul>li').append(`购物指南`)
    $('.footer_link>ul').addClass(`fl`)
})