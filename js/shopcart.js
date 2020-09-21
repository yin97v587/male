$(function () {
    // 克隆
    $('tbody').append($('tbody>tr:first').clone())
    $('tbody').append($('tbody>tr:first').clone())



    num = 0
    // 选全控子
    $('.selall').click(function () {
        bool = $(this).prop('checked')
        $('.singlechk , .selall').prop("checked", bool)
        sooji()
    })
    // 选字控全
    $('.singlechk').click(function () {
        bool = $(this).prop('checked')
        if (!bool) {
            $('.selall').prop("checked", bool)
        } else {
            num = $('.singlechk:checked').length
            if ($('.singlechk:checked').length == $('.singlechk').length) {
                $('.selall').prop("checked", true)
            }
        }
        // $('.prall').html(`总价:${num}.00`)
        sooji()
    })
    $('tbody td>a:contains(-)').click(function () {
        a = $(this).next('input').val()
        $(this).next('input').val(--a)

        if (a > 0) {
        } else {
            if (a == 0) {
                // 为什么这里先输出再改变框内的值啊
                // 因为会打断
                // alert('请至少选择一件商品')
                console.log('请至少选择一件商品');
            } else {
                alert('你在教我卖东西？')
                $(this).next('input').val(1)
            }
        }
        sojiji(this, a)
        sooji()
    })
    $('tbody td>a:contains(+)').click(function () {
        a = $(this).prev('input').val()
        $(this).prev('input').val(++a)
        sojiji(this, a)
        sooji()

    })

    // 算小计
    function sojiji(obj, n) {
        x = $(obj).parent().siblings('.spr').html()
        $(obj).parent().siblings('.soji').html((x * n).toFixed(2))
    }
    // 选总价 和 个数
    function sooji() {
        npr = 0.0
        many = 0
        $('.singlechk:checked').each(function (i, v) {
            a = $(v).parent().siblings('.soji').html()
            npr += parseFloat(a)
            many += parseInt($(v).parent().siblings().children('input').val())
        })
        $('tfoot .prall').html(npr.toFixed(2))
        $('tfoot .many').html(`已选择 ${many} 件商品`)
    }
    // 删除
    $('tbody td>.rem').click(function () {
        $(this).parents('tr').remove()
        sooji()
    })
    // 输入限制
    $('tbody>tr>td>input').keyup(function () {
        a = $(this).val()
        if (isNaN(a)) $(this).val(1)
        if (a > 200) $(this).val(200)
        a = $(this).val()
        console.log(a, $(this).val());
        sojiji(this, a)
        sooji()
    })
    // 删除选中
    $('.KingChuan-deriky').click(function () {
        $('.singlechk:checked').each(function (i, v) {
            $(v).parents('tr').remove()
        })
        sooji()
    })





    $('#newitem>ul>li').mouseenter(function(){
		$(this).addClass('ck').siblings().removeClass('ck')
	})
    for (let i = 0; i < 9; i++) {
		$('#newitem>ul>li:eq(' + i + '),#see_one_see .look_one_look>li:eq(' + i + ')').append(`
			<img src="./imgs/servant (${i+1}).webp" alt="">
			<img src="./imgs/img/index05_18.jpg" alt="">
			<p>白夜行  东野上吾</p>
			<p><span class="price">￥:38</span><span class="in">￥:58</span></p>
	`)
	}
    $('.footer_link>ul>li').append(`购物指南`)
    $('.footer_link>ul').addClass(`fl`)
})