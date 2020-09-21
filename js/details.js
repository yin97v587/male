
$(function () {

	var fnName = 'magnifier';
	var magnifier = {
		magnifier: ".magnifier",//最外层的大容器

		container: ".magnifier-container",//选择当前主图的承载容器

		containerImg: '.images-cover',//图片的容器

		view: ".magnifier-view",//图片放大后承载容器

		width: 400,//图片放大后承载容器宽度

		height: 400,//图片放大后承载容器高度

		moveView: ".move-view",//跟随鼠标移动的容器

		moveWidth: null,//如果设置了移动盒子的宽度，则不计算缩放比例

		zoom: 4,//缩放比例

		thumbnail: ".magnifier-line > ul",//缩略图容器

		assembly: ".magnifier-btn",//按钮组

		index: 0//当前图片的索引
	};

	// cnm里面的点击
	$('#banner .bandtl .cnm ul>li').click(function () {
		$(this).addClass('ck').siblings().removeClass('ck')
	})
	$('#banner .cnm>form>div>div button:first').click(function (e) {
		a = $('#banner .cnm>form>div>div input').val()
		a++
		$('#banner .cnm>form>div>div input').val(a)
		e.preventDefault()
	})

	$('#banner .cnm>form>div>div button:last').click(function (e) {
		a = $('#banner .cnm>form>div>div input').val()
		a--
		if (a > 0) {
			$('#banner .cnm>form>div>div input').val(a)
		} else {
			if (a == 0) {
				$('#banner .cnm>form>div>div input').val(a)
				// 为什么这里先输出再改变框内的值啊
				alert('请至少选择一件商品')
			} else {
				alert('你在教我卖东西？')
				$('#banner .cnm>form>div>div input').val(1)
			}
		}
		e.preventDefault()
	})

	for (let i = 0; i < 9; i++) {
		$('#newitem>ul>li:eq(' + i + '),#see_one_see .look_one_look>li:eq(' + i + ')').append(`
			<img src="./imgs/servant (${i+1}).webp" alt="">
			<img src="./imgs/img/index05_18.jpg" alt="">
			<p>白夜行  东野上吾</p>
			<p><span class="price">￥:38</span><span class="in">￥:58</span></p>
	`)

	}

	// 人气新品的黎曼的hover
	$('#newitem>ul>li').mouseenter(function(){
		$(this).addClass('ck').siblings().removeClass('ck')
	})


	$('.footer_link>ul>li').append(`购物指南`)
	$('.footer_link>ul').addClass(`fl`)
})