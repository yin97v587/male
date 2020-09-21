$(function(){
    $('#cont .choi').click(function(){
        $(this).toggleClass('ck')
    })
    
    $('#cont ul>li>.jia>span:first').click(function(){
        a = $(this).prev('input').val()
        a--
        alert(1)
		if (a > 0) {
			$(this).prev('input').val(a)
		} else {
			if (a == 0) {
				$(this).prev('input').val(a)
				// 为什么这里先输出再改变框内的值啊
				alert('请至少选择一件商品')
			} else {
				alert('你在教我卖东西？')
                $(this).prev('input').val(1)
                a = 1
			}
		}
		$('#cont ul>li>.jia>input').val(a)
    })

    $('#cont ul>li>.jia>span:last').click(function(){
        a = $('#cont ul>li>.jia>input').val()
        a++
        $('#cont ul>li>.jia>input').val(a)
        $('#cont ul>li>.prall').html(a*b)
    })

    // 用用克隆
    $('#cont ul').append($('#cont ul>li:eq(1)').clone())



    $('#cont ul>li>div:last button:first').click(function(){
        alert(1)
    })
    
    $('#cont ul>li>div:last button:last').click(function(){
        
    })









})