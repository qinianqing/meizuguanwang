var datas = {
    'yu': '【花粉随手拍】那天我的城市傍晚下起了小雨',
    'nv': '【花粉女生】五月随心走',
    'newP': '【新版本爆料】荣耀手机EMUI4.0极客版6.6.1亮点爆料',
    'darongliang': '大容量就是长续航？5C带你终结谎言！',
    'v8photo': 'V8到手一周，来交摄影作业啦，快来看山城夜景',
    'small': '【花粉独家】小侦探再现，探秘荣耀最新动作！ ',
    'quan': '【圈圈大讲堂第一期】主题制作入门篇视频回顾！',
    'gui': '【花粉女生】跟闺密一起农家乐走起',
    'qing': '【荣耀V8】#青春不散场#+毕业快乐，不说再见',
    'feng': '【花粉随手拍】#荣耀V8脱影而出#风云变换的世界',
    'life': '【花粉女生】Zero·生活',
    'safe': '【特部科普】荣耀V8的安全系统到底有多强大？',
    'root': '【HRT团队】华为Mate8全系列 B182精简root',
    'gold': '【主题爱好者】荣耀V8内置-流金-主题通用增强版',
    'gold2': '【主题爱好者】荣耀V8内置-流金-主题通用增强版',
    'water': '【花粉随手拍】 #荣耀V8脱影而出# 丝绢流水 ',
    'hidden': '什么？荣耀7竟然还有这些隐藏功能！',
    'vr': '【VR资源放送】荣耀V8带你畅游VR世界',
    'duoping': '屏幕太小看剧不爽？多屏互动轻松帮你搞定！',
    'car': '【城市末班车】一直好奇的轨道车驾驶室原来长这样！！',
    'bigHalo': '什么？大光圈竟然还能这么玩，新技能get！',
    'yu2': '【花粉随手拍】那天我的城市傍晚下起了小雨',
    'nv2': '【花粉女生】五月随心走',
    'newP2': '【新版本爆料】荣耀手机EMUI4.0极客版6.6.1亮点爆料',
    'darongliang2': '大容量就是长续航？5C带你终结谎言！',
    'v8photo2': 'V8到手一周，来交摄影作业啦，快来看山城夜景',
    'small2': '【花粉独家】小侦探再现，探秘荣耀最新动作！ ',
    'quan2': '【圈圈大讲堂第一期】主题制作入门篇视频回顾！'
};

var datas2 = {
    "j_1": "华为P9功能视频-摄影篇",
    "j_2": "HUAWEI P9 TVC",
    "j_3":"HUAWEI P9/P9 Plus 向经典致敬",
    "j_4":"HUAWEI P9/P9 Plus 发现不一样的美",
    "j_5":"华为揽阅M2青春版 | 7.0英寸 与你一起#玩出新花样#",
    "j_6":"献给用爱陪伴孩子长大的全职妈妈",
    "j_7":"HUAWEI G9青春版，来一场清新别致的fashion show",
    "j_8":"【沟通是金】2.14情人节为TA放下手机1小时",
    "j_9":"Mate7穿越时空三部曲之一",
    "j_10":"Mate7穿越时空三部曲之二",
    "j_11":"Mate7穿越时空三部曲之三",
    "j_12":"阿森纳俱乐部主教练温格专访",
    "j_13":"捕捉光的奇迹，华为P8全球发布会预告片",
    "j_14":"华为【因为时光】",
    "j_14w":"华为【因为时光】",
    "j_15":"华为Ascend G7 TVC：自在",
    "j_16":"华为Ascend G7产品视频：品味优雅，独运匠心",
    "j_17":"华为Ascend Mate7 TVC：爵士人生",
    "j_18":"华为Ascend Mate7：极致均衡，由你随心",
    "j_19":"华为EMUI3.0不忘初心品牌理念",
    "j_20":"华为EMUI3.0产品视频：用手触摸，用心感知",
    "j_1w": "华为P9功能视频-摄影篇",
    "j_2w": "HUAWEI P9 TVC",
    "j_3w":"HUAWEI P9/P9 Plus 向经典致敬",
    "j_4w":"HUAWEI P9/P9 Plus 发现不一样的美",
    "j_5w":"华为揽阅M2青春版 | 7.0英寸 与你一起#玩出新花样#",
    "j_6w":"献给用爱陪伴孩子长大的全职妈妈",
    "j_7w":"HUAWEI G9青春版，来一场清新别致的fashion show",
};

$(function () {
    //初始化本模块用到的变量
    var snsObj = {
        index: 0,
        index2: 0,
        width: document.documentElement.clientWidth || document.body.clientWidth,
    }

    //加载第一层轮播图
    $.each(datas, function (key, value) {
        if (key[key.length - 1] === '2') {
            key = key.slice(0, -1);
        }

        $("#slides_01").append('<li class="cbg-img">'
            + '<a href="#" target="_blank">'
            + '<img src="images/' + key + '.jpg">'
            + '<div class="text-outer">'
            + '<div class="text-inner">' + value
            + '</div>'
            + '</div>'
            + '<div class="cbg-overlay">'
            + '</div>'
            + '</a>'
            + '</li>');

    });

    //加载第二层轮播图
    $.each(datas2, function (key, value) {
        if (key[key.length - 1] === 'w') {
            key = key.slice(0, -1);
        }
        $("#slides_02").append('<li class="cbg-img">'
            + '<a href="#" target="_blank">'
            + '<img src="images/'+key+'.jpg">'
            + '<div class="text-outer">'
            + '<div class="text-inner">' + value
            + '</div>'
            + '</div>'
            + '<div class="cbg-overlay">'
            + '</div>'
            + '</a>'
            + '</li>');
    });

    snsObj.timer1=setInterval(firSlidesRightMove, 3000); //第一层轮播图自动轮播
    snsObj.timer2=setInterval(secSlidesRightMove, 5000); //第二层轮播图自动轮播

    //鼠标进入  停止轮播
    $("#slides_01,#flex-nav01").mouseenter(function () {
        clearInterval(snsObj.timer1);
    });
    $("#slides_02,#flex-nav02").mouseenter(function () {
        clearInterval(snsObj.timer2);
    });

    //鼠标离开  开始轮播
    $("#slides_01").mouseleave(function () {
        snsObj.timer1=setInterval(firSlidesRightMove, 3000);
    });
    $("#slides_02").mouseleave(function () {
        snsObj.timer2=setInterval(secSlidesRightMove, 5000);
    });

    //鼠标进入li  li向上移动
    $("#slides_01 li,#slides_02 li").mouseenter(function () {
        $(this).children().stop().animate({'top': '-102%'});
    });

    //鼠标离开li  li回到原来位置
    $("#slides_01 li,#slides_02 li").mouseleave(function () {
        $(this).children().stop().animate({'top': '0'});
    });

    //定义第一个轮播图的向右移动
    function firSlidesRightMove() {
        if (snsObj.index >= 3) {
            snsObj.index = 0;
            $("#slides_01").css("left","0px");
        }

        snsObj.index++;
        $("#slides_01").animate({'left': -(snsObj.width * snsObj.index)});
    }

    //定义第二个轮播图的向右移动
    function secSlidesRightMove() {
        if (snsObj.index2 >= 3) {
            snsObj.index2 = 0;
            $("#slides_02").css("left","0px");
        }

        snsObj.index2++;
        $("#slides_02").animate({'left': -(snsObj.width * snsObj.index2)});
    }

    //点击第一个轮播图的右箭头
    $("#flex-nav01 .flex-next").click(firSlidesRightMove);

    //点击第一个轮播图的左箭头
    $("#flex-nav01 .flex-prev").click(function () {
        if (snsObj.index <= 0) {
            snsObj.index = 3;
            $("#slides_01").css("left",-(snsObj.index * snsObj.width));
        }

        snsObj.index--;
        $("#slides_01").animate({'left': -(snsObj.width * snsObj.index)});
    });

    //点击第二个轮播图的右箭头
    $("#flex-nav02 .flex-next").click(secSlidesRightMove);

    //点击第二个轮播图的左箭头
    $("#flex-nav02 .flex-prev").click(function () {
        if (snsObj.index2 <= 0) {
            snsObj.index2 = 3;
            $("#slides_02").css("left",-(snsObj.index2 * snsObj.width));
        }

        snsObj.index2--;
        $("#slides_02").animate({'left': -(snsObj.width * snsObj.index2)});
    });
});
