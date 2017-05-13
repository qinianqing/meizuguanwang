$(function () {
    //获取大盒子
    var $homeSlider = $("#MzHomeSlider");
    //获取ul
    var $ul = $homeSlider.find(".bxslider");
    //获取ul中的li
    var $lis = $ul.find(".home-slider-box");
    //获取ol  装小圆点的
    var $ol = $homeSlider.find("ol");
    //获取左右按钮层
    var $ear = $(".bx-controls-direction");
    //ul的背景色
    var config = ["#ffffff", "#E9E9EB", "#121212", "#E9E8EA", "#000000"];
    //索引，
    var pic = 0;


    //创建ol中的li,并绑定事件
    for (var i = $lis.length; i--;) {
        var li = $("<li></li>");
        $ol.append(li);
        li.click(function () {//绑定点击事件
            pic = $(this).index();
            showImg();
        }).hover(function () {
            clearInterval(timeId);
        }, function () {
            timeId = setInterval(rightMove, 5000);
        });
    }
    $ol.find("li").eq(0).css("backgroundColor", "deepskyblue");//设置第一个选中


    //加载图片后设置图片的margin值
    $ul.find("img").load(function () {
        $lis.each(function () {
            $(this).css("margin-left", -$(this).width() / 2 + "px");
        });
    });


    //鼠标经过轮播图显示左右按钮层
    $homeSlider.hover(function () {
        $ear.animate({opacity: 1});
    }, function () {
        $ear.animate({opacity: 0});
    });
    //鼠标经过 左右焦点停止轮播，离开继续
    $ear.hover(function () {
        clearInterval(timeId);
    }, function () {
        timeId = setInterval(rightMove, 5000);
    });


    //自动执行，向右
    var timeId = setInterval(rightMove, 5000);

    //向左向右点击事件，触发向左向右函数
    $(".bx-prev").click(leftMove);
    $(".bx-next").click(rightMove);

    //向左，向右的函数
    function rightMove() {
        pic = pic == $lis.length - 1 ? 0 : pic + 1;
        showImg()
    }
    function leftMove() {
        pic = pic == 0 ? $lis.length - 1 : pic - 1;
        showImg()
    }

    //显示对应图片，对应小圆点样式，对应背景色
    function showImg() {
        $lis.eq(pic).siblings().stop().animate({opacity: 0},"fast", function () {
            $lis.eq(pic).siblings().hide();
            $ol.find("li").eq(pic).css("backgroundColor", "deepskyblue").siblings().css("backgroundColor", "");
            $lis.eq(pic).show().stop().animate({opacity: 1},"slow");
            $ul.css("backgroundColor", config[pic]);
        });
    }
});