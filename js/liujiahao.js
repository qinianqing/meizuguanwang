$(function () {
    function arrowMove() {
        if ($("#publicboxes1").css("marginLeft") == "0px") {
            $("#publicboxes1").animate({"marginLeft": "-1240px"}, 500);
            $("#arrow-r").css({"borderColor": "#f0f0f0", "color": "#e0e0e0", "zIndex": "0"});
            $("#arrow-l").css({"borderColor": "#c0c0c0", "color": "#b0b0b0", "zIndex": "1"});
        } else {
            $("#publicboxes1").animate({"marginLeft": "0px"}, 500);
            $("#arrow-r").css({"borderColor": "#c0c0c0", "color": "#b0b0b0", "zIndex": "1"});
            $("#arrow-l").css({"borderColor": "#f0f0f0", "color": "#e0e0e0", "zIndex": "0"});
        }
    }


    $("#arrow-r").click(function () {
        arrowMove();
    });

    $("#arrow-l").click(function () {
        arrowMove();
    });

    $(".content1 .more").hover(function () {
        clearInterval(timeId);
    }, function () {
        timeId = setInterval(arrowMove, 3000);
    });

    var timeId = setInterval(arrowMove, 3000);

    $("#con1-bd").mouseenter(function () {
        clearInterval(timeId);
    })

    $("#con1-bd").mouseleave(function () {
        timeId = setInterval(function () {
            arrowMove();
        }, 3000);
    })

    $("#publicboxes2 li").mouseenter(function () {
        $(this).stop().animate({"top": "-5px"}, "fast");
    });

    $("#publicboxes2 li").mouseleave(function () {
        $(this).stop().animate({"top": "0px"}, "fast");
    });

    $("#con2-l,.con3-l-item,.publicbox3").mouseenter(function () {
        $(this).stop().animate({"top": "-5px"}, "fast");
    });

    $("#con2-l,.con3-l-item,.publicbox3").mouseleave(function () {
        $(this).stop().animate({"top": "0px"}, "fast");
    });

    $(".home-ad").mouseenter(function () {
        $(this).children().children().animate({"width":"260px","height":"160px","marginTop":"-10px","marginLeft":"-10px"});
    });

    $(".home-ad").mouseleave(function () {
        $(this).children().children().animate({"width":"240px","height":"140px","marginTop":"0px","marginLeft":"0px"});
    });

    $(".publicbox3").mouseenter(function () {
        $(this).children("div").stop().animate({"height":"76px"},"fast");
    });

    $(".publicbox3").mouseleave(function () {
        $(this).children("div").stop().animate({"height":"0px"},"fast");
    });

    $(".content2 .hd .more a").mouseenter(function () {
        $(this).stop().animate({"color":"#ff6700"},"fast");
    })

    $(".content2 .hd .more").mouseenter(function () {
        $(this).find("span").stop().animate({"backgroundColor":"#ff6700"},"fast");
    })

    $(".content2 .hd .more a").mouseleave(function () {
        $(this).stop().animate({"color":"#4f453d"},"fast");
    })

    $(".content2 .hd .more").mouseleave(function () {
        $(this).find("span").stop().animate({"backgroundColor":"#b0b0b0"},"fast");
    })

    $(".content3 .hd .tabTop li").mouseenter(function () {
        $(this).stop().animate({"color":"#ff6700","borderBottomColor":"#ff6700"},"fast");
        $(this).siblings().stop().animate({"color":"#424242","borderBottomColor":"#f5f5f5"},"fast");
        var idx = $(this).index();
        $(".content3 .bd .tab").eq(idx).show().siblings().hide();
    });



});

