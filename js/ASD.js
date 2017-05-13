/**
 * Created by cccc on 2016/9/4.
 */

$(function () {
    $(".CGpics .l1").mouseenter(function () {
        $(".CGpics .l1 div").stop().animate({"top":"-20px"},1000);
    });
    $(".CGpics .l1").mouseleave(function () {
        $(".CGpics .l1 div").stop().animate({"top":"0px"},1000);
    });
    $(".CGpics .l2").mouseenter(function () {
        $(".CGpics .l2 div").stop().animate({"top":"-30px"},1000);
    });
    $(".CGpics .l2").mouseleave(function () {
        $(".CGpics .l2 div").stop().animate({"top":"0px"},1000);
    });
    $(".CGpics .l3").mouseenter(function () {
        $(".CGpics .l3 div").stop().animate({"bottom":"20px"},1000);
    });
    $(".CGpics .l3").mouseleave(function () {
        $(".CGpics .l3 div").stop().animate({"bottom":"0px"},1000);
    });
    $(".CGpics .l4").mouseenter(function () {
        $(".CGpics .l4 div").stop().animate({"left":"-80px"},1000);
    });
    $(".CGpics .l4").mouseleave(function () {
        $(".CGpics .l4 div").stop().animate({"left":"0px"},1000);
    });
})
