$(function () {

    //鼠标进入导航按钮
    $("#header_nav>ul>li").mouseenter(function () {
            $("#menu_container").css("height","202px")
             $("#menu_container").stop().slideDown()
        $(this).css("opacity","1").siblings().css("opacity","0.5")
        //获取当前li的索引  将索引对应的ul显示出来
            var index =$(this).index()
        $("#menu_product_"+index).show().siblings().hide()
    })
    //鼠标离开导航按钮
    $("#top_header").mouseleave(function () {
        $("#menu_container").hide()
        $("#header_nav>ul>li").css("opacity","1")
    })

    //鼠标进入菜单栏里面的li
    $("#menu_container li").mouseenter(function () {
        $(this).stop().animate({"opacity":"1"},50).siblings().stop().animate({"opacity":"0.5"},50)
    })
    //鼠标离开菜单栏里面的li
    $("#menu_container li").mouseleave(function () {
        $("#menu_container>ul>li").stop().animate({"opacity":"1"},400)
    })

    $("#login_up").click(function () {
        $("#login").show()
        $("#rubbish").css("display","block")
        $("#admin").focus();
        $("#header_user_box").hide()
        $("#header_user_trigger").hide()
    })
   /* $("#admin").blur(function () {
        if(/^[A-Za-z0-9_\-\u4e00-\u9fa5]+$/.test($(this).value)){
            $("#ale").text("*无效账号")
            $("#ale").css("color","red")

        }else{
            $("#ale").text("*有效账号")
            $("#ale").css("color","green")
        }
    })
*/
    //a标签跳转
    $("#password").blur(function () {
        if($(this)[0].value!==""){
            $("#pass").text("")
        }else{
            $("#pass").text("*请输入密码")
            $("#pass").css("color","red")
        }
    })
    //关闭登录层
    $("#login").find("i").click(function () {
        $("#login").hide()
        $("#rubbish").hide()
        $("#admin").val("")
        $("#password").val("")
        $("#ale").text("")
        $("#pass").text("")
    })
    //拖动层
    $("#welcome").on("mousedown",function (e) {
        //获取鼠标点击的位置距离盒子边框的距离
        var x = e.clientX-$("#login")[0].offsetLeft;
        var y = e.clientY-$("#login")[0].offsetTop;
        //注册鼠标移动事件
        $(document).on("mousemove",function (e) {
            var left = e.pageX-x;
            var top = e.pageY-y;
            $("#login").css({"left":left+255+"px","top":top+50+"px"})
        })
    })
    $(document).on("mouseup",function () {
        $(document).off("mousemove")
    })
    //动态添加more中的图片
    //$("#menu_product_more p").each(function (index,element) {
    //    $(element).css("backgroundImage","url(images/mz-product"+(index+21)+".png)")
    //})
})