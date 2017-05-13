
$(function () {
    //封装鼠标进入和离开事件   name:隐藏盒子
    var mouse = {
        //鼠标进入
        mouseenter: function (element,name) {
            //给商品放到指定的位置
            //element.children("li").css("opacity","0.3")
            element.css("right","0px");
            element.find("li").css({"width":"0px","opacity":"0.1"});
            //以动画形式显示ul的高和位置
            name.stop().slideDown();
            //动画形式改变li的款
            element.find("li").animate({"width":"140px","opacity":"1"},800);
            //显示自己 将其他的隐藏
            element.show().parent().siblings().find("ul").hide();
        },
        //鼠标离开
        mouseleave:function (element,name) {
            //ul隐藏
            element.hide();
            //li的宽度变为0
            element.find("li").css({"width":"0px"});
            //隐层遮罩层
            name.hide();
        }
    }

    //魅族手机事件
    $("#mx").mouseenter(function () {
        mouse.mouseenter($("#header_mx_bottom"),$("#shaw"));
    });
    $("#header_box").mouseleave(function () {
        mouse.mouseleave($("#header_mx_bottom"),$("#shaw"));
    });
    //魅蓝手机事件
    $("#mz").mouseenter(function () {
        mouse.mouseenter($("#header_mz_bottom"),$("#shaw"));
    });
    $("#header_box").mouseleave(function () {
        mouse.mouseleave($("#header_mz_bottom"),$("#shaw"));
    });
    //配件事件
    $("#flag").mouseenter(function () {
        mouse.mouseenter($("#header_flag_bottom"),$("#shaw"));
    });
    $("#header_box").mouseleave(function () {
        mouse.mouseleave($("#header_flag_bottom"),$("#shaw"));
    });

    //为其他的li注册事件
    $("#shop,#about,#serve,#only,#commu").mouseenter(function () {
        mouse.mouseleave($("#header_flag_bottom"),$("#shaw"));
        mouse.mouseleave($("#header_mz_bottom"),$("#shaw"));
        mouse.mouseleave($("#header_mx_bottom"),$("#shaw"));
    })

    //鼠标进入每个li让其他的模糊 让当前的高亮
    $("#header_mx_bottom>li").mouseenter(function () {
        $("#header_mx_bottom>li").css("opacity","0.5");
        $(this).css("opacity","1");
    });
    $("#header_mz_bottom>li").mouseenter(function () {
        $("#header_mz_bottom>li").css("opacity","0.5");
        $(this).css("opacity","1");
    });
    $("#header_flag_bottom>li").mouseenter(function () {
        $("#header_flag_bottom>li").css("opacity","0.5");
        $(this).css("opacity","1")
    });
    //鼠标离开当前按钮 让当前层的li都高亮
    $("#header_mx_bottom").mouseleave(function () {
        $("#header_mx_bottom>li").css("opacity","1");
    });
    $("#header_mz_bottom").mouseleave(function () {
        $("#header_mz_bottom>li").css("opacity","1");
    });
    $("#header_flag_bottom").mouseleave(function () {
        $("#header_flag_bottom>li").css("opacity","1");
    });


    //用户登录事件
    $("#header_user_img").mouseenter(function () {
        $("#header_user_box").show();
        $("#header_user_trigger").show();
    });
    $("#loginbar").mouseleave(function () {
        $("#header_user_box").hide();
        $("#header_user_trigger").hide();
    });
    //点击登录事件
    $("#button").click(function () {
        $("#login").show();
        $("#rubbish").css("display","block");
        $("#admin").focus();;
        $("#header_user_box").hide();
        $("#header_user_trigger").hide();
    });
    $("#admin").blur(function () {
        if(!/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/.test($(this).value)){
            $("#ale").text("*无效账号");
            $("#ale").css("color","red");

        }else{
            $("#ale").text("*有效账号");
            $("#ale").css("color","green");
        }
    });

    //a标签跳转
    $("#password").blur(function () {
        if($(this)[0].value!==""){
            $("#pass").text("");
        }else{
            $("#pass").text("*请输入密码");
            $("#pass").css("color","red");
        }
    });
    //关闭登录层
    $("#login").find("i").click(function () {
        $("#login").hide();
        $("#rubbish").hide();
        $("#admin").val("");
        $("#password").val("");
        $("#ale").text("");
        $("#pass").text("");
    });
    //拖动层
    $("#welcome").on("mousedown",function (e) {
        //获取鼠标点击的位置距离盒子边框的距离
        var x = e.clientX-$("#login")[0].offsetLeft;
        var y = e.clientY-$("#login")[0].offsetTop;
        //注册鼠标移动事件
        $("#welcome").on("mousemove",function (e) {
            var left = e.pageX-x;
            var top = e.pageY-y;
            $("#login").css({"left":left+255+"px","top":top+50+"px"});
        });
    });
    $("#welcome").on("mouseup",function () {
        $("#welcome").off("mousemove");
    });
})