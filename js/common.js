/**
 * Created by dell on 2016/9/1.
 */
$(document).ready(function () {
    $("#wei").mouseenter(function () {
        $(".box1").css("display", "block");
    });
    $("#wei").mouseleave(function () {
        $(".box1").css("display", "none");
    });

    $("#foots .ico").click(function () {
        $("html,body").animate({scrollTop: 0}, 1000);
    });

    $(document).scroll(function () {
        if ($("#foots>div").css("opacity") < 0) {
            $("#foots>div").css("opacity", 0);
            return;
        }
        var value = (2 * $("#foots").height() - ($(document).height() - $("#foots").offset().top)) / $("#foots").height();
        $("#foots>div").css("opacity", value);
    });

});


