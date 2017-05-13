$(function () {
    //�����
    var $bigBanner = $("#bigBanner");
    var $ul = $bigBanner.find("ul");
    var $ul_lis = $ul.children();
    var $ol = $bigBanner.find("ol");
    var clientWidth = $(document).width();
    var picc = 0;
    //����li�Ŀ��Ϊ��Ļ���
    $ul_lis.width(clientWidth);

    //����±�  Բ��
    for (var i = 0; i < $ul_lis.length; i++) {
        var li = $("<li></li>");
        $ol.append(li);
        li.click(function () {
            picc = $(this).index();
            $ul.stop(true, true).animate({left: -clientWidth * $(this).index()}, "slow");
            olIndex();
			
			$.each(initDatas[picc], function (key, value) {
				
                    $ul_lis.eq(picc).find(key).css(value);
            });
            userAnimate();
        });
    }
    var $ol_lis = $ol.find("li");
    $ol_lis.eq(0).addClass("current");//Ĭ��ѡ�е�һ��

    //��¡��һ����ͼƬ׷�ӵ����
    $ul.append($ul_lis.eq(0).clone());
    //��ȡul�Ŀ��
    var ulWidth = $ul.width();
	
    //�ֲ�����ִ��
    setInterval(rightMove, 3000);

    //�����ƶ��ĺ���
    function rightMove() {
		
		$.each(initDatas[picc], function (key, value) {
		
            $ul_lis.eq(picc).find(key).css(value);
        });
		
        var current = $ul.position().left;
        if (-current < ulWidth - clientWidth) {
            $ul.stop().animate({left: current - clientWidth}, "slow", function () {
                if (-$ul.position().left === ulWidth - clientWidth) {
                    $ul.css("left", 0);
                }

                userAnimate();
            });
        } else {
            $ul.stop().animate({left: -clientWidth}, "slow", function () {
			
                userAnimate();
            });
        }
		
        picc = picc === $ol_lis.length - 1 ? 0 : picc + 1;
        olIndex();
    }

    //���� ol ��������ʽ
    function olIndex() {
        $ol_lis.eq(picc).addClass("current").siblings().removeClass("current");
    }

    //��ʼ����
    var initDatas = {
        "0": {
            ".title": {
                "bottom": "-60px",
                "opacity": "0"
            },
            ".more": {
                "top": "0px",
				"opacity": "0"
            },
			".f1":{
				"top":"0"
			},
			".f2":{
				"top":"0"
			}
        },
        "1": {
			".title": {
                "bottom": "-60px",
                "opacity":"0"
            },
            ".more": {
                "top": "0px",
				"opacity": "0"
            },
			".f1":{
				"top":"0"
			},
			".f2":{
				"top":"0"
			}
		},
        "2": {
			".title": {
                "bottom": "-60px",
                "opacity":"0"
            },
            ".more": {
                "top": "0px",
				"opacity": "0"
            }
		},
        "3": {
			".title": {
                "bottom": "-60px",
                "opacity":"0"
            },
            ".more": {
                "top": "0px",
				"opacity": "0"
            },
			".f1":{
				"left":"150px"
			},
			".f2":{
				"left":"150px"
			}
		},
        "4": {
			".title": {
                "bottom": "-60px",
                "opacity":"0"
            },
            ".more": {
                "top": "0px",
				"opacity": "0"
            },
			".f1":{
				"left":"0px"
			},
			".f2":{
				"left":"0px"
			},
			".f3":{
				"left":"0px"
			}
		}
    };


    //Ŀ�����
    var animateData = {
        "0": {
            ".title": {
                "bottom": "-80px",
                "opacity":"1"
            },
            ".more": {
                "top": "30px",
				"opacity": "1"
            },
			".f1":{
				"top":"-30px"
			},
			".f2":{
				"top":"30px"
			}
        },
        "1": {
			".title": {
                "bottom": "-80px",
                "opacity":"1"
            },
            ".more": {
                "top": "30px",
				"opacity": "1"
            },
			".f1":{
				"top":"-30px"
			},
			".f2":{
				"top":"30px"
			}
		},
        "2": {
			".title": {
                "bottom": "-80px",
                "opacity":"1"
            },
            ".more": {
                "top": "30px",
				"opacity": "1"
            }
		},
        "3": {
			".title": {
                "bottom": "-80px",
                "opacity":"1"
            },
            ".more": {
                "top": "30px",
				"opacity": "1"
            },
			".f1":{
				"left":"0px"
			},
			".f2":{
				"left":"0px"
			}
		},
        "4": {
			".title": {
                "bottom": "-80px",
                "opacity":"1"
            },
            ".more": {
                "top": "30px",
				"opacity": "1"
            },
			".f1":{
				"left":"-50px"
			},
			".f2":{
				"left":"0px"
			},
			".f3":{
				"left":"50px"
			}
		}
    };

    function userAnimate() {
		
            $ul_lis.eq(picc).find(".title").animate(animateData[picc]['.title'],1000,function(){
				
				$ul_lis.eq(picc).find(".more").animate(animateData[picc]['.more'],1000);
			});
			
			$.each(animateData[picc],function(key,value){
				if(key!=='.title'||key!=='.more'){
					$ul_lis.eq(picc).find(key).animate(value,1000);
				}
			});
    }
	
		
	$.each(initDatas[i], function (key, value) {
		
				$ul_lis.eq(i).find(key).css(value);
	});

    userAnimate();
});