window.onload = function  () {
	$(document).scrollTop(0)
};
$(function  () {
	// 首屏滑入部分显示
	(function  () {
		var $wrap = $("#wrap"),
			$swp = $wrap.find(".swp");

		$swp.eq(0).animate({
			opacity:1,
			left:0
		},1800);
		$swp.eq(1).animate({
			opacity:1,
			right:0
		},1800);
		$swp.eq(2).animate({
			opacity:1,
			top:70
		},1800);
		$swp.eq(3).animate({
			opacity:1,
			top:610
		},1800);
		
	})();
	// game部分翻转
	(function  () {
		var $game = $('#game'),
			$picLi = $game.find('.pic ul li'),
			index = 0,
			length = $picLi.length;

		$picLi.click(function () {
            if ( $(this).index() !== index ){
                index = $(this).index();
                var lIndex = index - 1,
                    rIndex = index + 1;
                if (lIndex < 0 ){
                	lIndex = length-1;
                }
                if (rIndex >= length){
                	rIndex = 0;
                } 
                $picLi.removeClass("left mid right");
                $picLi.eq(lIndex).addClass("left");
                $picLi.eq(index).addClass("mid");
                $picLi.eq(rIndex).addClass("right");
            }
        });
	})();
});