
//文档加载事件
$(function () {
    $("#slider").slidebox({
        boxh: 400,//盒子的高度
        w: 1000,//图片的宽度
        h: 400,//图片的高度
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    })
    $(".ebook_slider,.ebook_slider2,.ebook_slider3").slidebox({
        boxh: 220,//盒子的高度
        w: 330,//图片的宽度
        h: 220,//图片的高度
        controltop: 5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 14,//控制按钮宽度
        controlsH: 3,//控制按钮高度
        radius: 0,//控制按钮圆角度数
        controlsColor: "#ffffff",//普通控制按钮的颜色
        controlsCurrentColor: "#7f7f7f",//当前控制按钮的颜色
    })
    $("#cloth .pptbox,#sport .pptbox,#childcloth .pptbox,#house .pptbox").slidebox({
        boxh: 340,//盒子的高度
        w: 420,//图片的宽度
        h: 340,//图片的高度
        controltop: 5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 14,//控制按钮宽度
        controlsH: 3,//控制按钮高度
        radius: 0,//控制按钮圆角度数
        controlsColor: "#ffffff",//普通控制按钮的颜色
        controlsCurrentColor: "#7f7f7f",//当前控制按钮的颜色
    })


    // ////////////////






    ////menu的隐藏控制
    $('.menu').mouseleave(function () {
        $('.menu').toggleClass("un")
    })
    // 怎么解决闪烁的问题：用leave
    $('#banner .banl>ul>li').hover(function () {
        let x = $(this).text()
        x = x.replace(/、/, ">>&nbsp;&nbsp;&nbsp;")
        $('#banner .nav').html(x + '>>')
        $(".menu").toggleClass("un")
    })
    //////////////////////
    // 电子书的最新上架切换
    $('#ebook h2>p>a').mouseenter(function () {
        $('#ebook h2>p>a').removeClass('ebookck')
        $('.ebook_show').addClass('unn')
        $(this).addClass('ebookck')
        var ebk = $(this).index()
        $('.ebook_show:eq(' + ebk + ')').removeClass('unn') // 这里遇到问题，eq里面能放012正常显示，但是不能用变量ebk代替        
        // 问题解决，eq中使用变量一定要在变量两边添加加号并用引号引起来
    })

    // //////////////////////
    // 最右书的hover

    $('#ebook .br li:first-child').children('.jieshao').toggleClass('un')
    $('#ebook .br li:first-child').children('.bookname').toggleClass('unn')
    $('#ebook .br li:first-child').css('height', '150px').css('background', 'url(./imgs/素材图片/书籍/23353342-1_l.jpg) no-repeat').css('background-position', '-8px 1px')

    $('#ebook .br li').hover(function () {
        $('#ebook .br li').children('.jieshao').removeClass('un')
        $('#ebook .br li').children('.bookname').removeClass('unn')
        $('#ebook .br li').css('height', '40px').css('background', 'none')
        $(this).children('.jieshao').addClass('un')
        $(this).children('.bookname').addClass('unn')
        $(this).css('height', '150px').css('background', 'url(./imgs/素材图片/书籍/23353342-1_l.jpg) no-repeat').css('background-position', '-8px 1px')
    },
        function () { })
    // ////////懒狗全局///////////
    $('.shang>ul,.xia>ul,.xia>img').addClass('clearfix fl')
    $('.shang,.xia').addClass('clearfix')
    // li标签里面的图片
    $('.shang li').append(`
        <img src="./imgs/img/index100_05.jpg" alt="">
    `)
    $('.xia li').append(`
    <img src="./imgs/img/index100_11.jpg" alt="">`)

    for (let i = 0; i < 10; i++) {
        $('.iconlist').append(`
        <img src="./imgs/img/logo13_11.jpg" alt="">
        `)
    }
    $('#spread li').addClass('fl').append(`
    <img src="./imgs/img/index25_12.jpg" alt="">
    <p>Pigeon法国制奶嘴，无毒天然乳胶</p>
    <p class="price">￥:189</p>
    <span>
        <img src="./imgs/img/index27_14.jpg" alt="">
        已有<i>988</i>条评价
    </span>
    `)// 给推广加图

    $('.footer_link>ul>li').append(`购物指南`)
    $('.footer_link>ul').addClass(`fl`)

    // 楼层跳转
    let bgc = ['#93d46f', "#f65727", "#bb9dee", "#ff7394", "#c2ec51"]
    $('.floor li').hover(function () {
        let index = $(this).index();
        $(this).css({
            "backgroundColor": bgc[index],
            "background-position-x": -40,
            width: 40
        })
    }, function () {
        $(this).css({
            "background-position-x": 0,
            "backgroundColor": '',
            width: 0
        })
    }).click(function () {
        let $jumpBox = $(".jump").eq($(this).index());
        let top = $jumpBox.offset().top;
        $("html,body").stop().animate({ scrollTop: top }, 300)
    })


    // 通用hover
    $('.btl>p>a').mouseenter(function(){
        $(this).parents('h2').find('a').removeClass('ebookck')
        $(this).addClass('ebookck')
        $(this).parents('section').children('.rightbox').addClass('unn')
        var hflag = $(this).index()
        // console.log(hflag);
        $(this).parents('section').children('.rightbox:eq(' + hflag + ')').removeClass('unn')
    })
    // 家居单独写
    $('#house .btl>p>a').mouseenter(function(){
        $('#house').children('.leftbox').addClass('unn')
        var hflag = $(this).index()
        $('#house').children('.leftbox:eq(' + hflag + ')').removeClass('unn')
    })
    // 推广的摸
    $('#spread li').mouseenter(function(){
        $('#spread li').removeClass('spreadck')
        $(this).addClass('spreadck')
    })

    // 领券
    $('.ling').hover(function(){
        $('.ling .ling_img').stop().animate({right: 39},300)
    },function(){
        $('.ling .ling_img').stop().animate({right: -61},300)
    })

    $(window).scroll(function(){
        let a = document.documentElement.scrollTop || document.body.scrollTop
        let b = document.documentElement.clientHeight
        x = parseInt(a+b/2-180)
        $('.ling').stop().animate({top: x},300)
    })

    // 返回顶部
    $('.gtt').click(function(){
        $('html,body').stop().animate({scrollTop:0},500)
    })












})

