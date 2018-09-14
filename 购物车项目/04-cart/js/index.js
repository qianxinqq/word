$(function () {
    // 调用fullPage.js的方法
    $('#fullpage').fullpage({
        // 1.设置每个section的背景色
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#fed", "#d04759", "#84d9ed", "#8ac060"],
        // 2.让页面显示小圆圈导航
        navigation: true,
        // 3.调节滚动时间
        scrollingSpeed: 1500,
        verticalCentered: false,
        
       
        afterRender: function () {
            //页面结构生成后的回调函数，或者说页面初始化完成后的回调函数
            $('.more').on('click', function () {
                //切换到下一页
                $.fn.fullpage.moveSectionDown();
            });
        },
        // 滚动到某一屏后的回调函数，
        // 接收 anchorLink 和 index 两个参数，
        //anchorLink 是锚链接的名称
        // ，index 是序号，从1开始计算
        // afterLoad: function (Link, index) {
           
        // },
        afterLoad: function (anchorLink, index) {
            //判断8屛
            if (index != 8) {
                $('.more').fadeIn(100);
            }
            if (index == 2) {
                // 找到 初始的搜索框  显示
                $('.qbh-list-initsearch').show().animate({
                    right: 478
                }, 1000, function () {

                    // 让搜索框中的文字显示
                    $('.qbh-list-initsearch img:last-child').animate({
                        opacity: 1
                    }, 1000, function () {
                        //$('.qbh-list-initsearch').hide(); //这句有问题 会让initsearch重新出现
                        // 让初始的搜索框隐藏
                        $('.qbh-list-initsearch').css({
                            opacity: 0
                        });
                        // 完成的搜索框 向右上角 运动
                        $(".qbh-list-finishsearch").show().animate({
                            width: 150,
                            bottom: 448,
                            left: 710
                        }, 1000);
                        // 让沙发列表 放大
                        $('.qbh-list-sofas').animate({
                            width: 441
                        }, 1000);

                        // 让提示语变化
                        // delay() 延迟  如果show()或者hide()用了delay 必须要给hide方法中加0
                        $('.qbh-list-tips img:first-child').delay(1000).hide(0);
                        
                    });
                });
            }
            // 第五屏
           if(index == 5) {
               $('.qbh-payment-hand img').show().animate({
                  top:20
               },1000,function(){
                   $('.qbh-payment-mouse img:last-child').show();
                   $('.qbh-payment-dropsofa').show().animate({
                    bottom:245
                   },500,function(){
                       $('.qbh-payment-cards img:first-child').animate({
                           top: -100
                       }, 400)

                       $('.qbh-payment-cards img:last-child').animate({
                           top: 140
                       }, 400)                     
                   })
               })
           }
            // 第七屛
            if (index == 7) {
                $('.qbh-apprise-main-star').addClass('active');
                $(".qbh-appraise-haoping").delay(1000).show(0).animate({
                    left: 45
                }, 1000, function () {
                    $(this).animate({
                        width: 72
                    }, 1000)
                })
            }
            // 第八屛
            if (index == 8) {
                $(document).mousemove(function (e) {
                    // console.log(1);

                    // 1.获取鼠标的坐标
                    var pagex = e.pageX - 140;
                    var pagey = e.pageY + 2;
                   var yy = $(window).height() - 449;
                   // 2.判断坐标
                   if (pagey < yy) {
                       // 3.把坐标值设置给手的样式  
                       $('.qbh-shopping-hands').css({
                           left: pagex,
                           top: yy
                       })
                   } else {
                       // 3.把坐标值设置给手的样式  
                       $('.qbh-shopping-hands').css({
                           left: pagex,
                           top: pagey
                       })
                   }
               })
               $('.qbh-shopping-again').click(function () {
                   $.fn.fullpage.moveTo(1);
               })
           }
        },
        //滚动前的回调函数
        onLeave: function (index, nextIndex , direction) {
            $('.more').fadeOut(100);
            if (index == 2 && nextIndex == 3) {
                // 离开第二屏 到第三屏 时，一个沙发从沙发列表掉落
                $('.qbh-list-dropsofa').show().animate({
                    bottom: -($(window).height() - 260),
                    width: 207,
                    left: 370
                }, 1000, function () {
                    $('.qbh-buy-main div:nth-child(2)').delay(1000).show(0);
                })
            }
            if (index == 3 && nextIndex == 4) {
                // 离开第三屏 到第四屏，一个斜着的沙发掉入购物车
                $(".qbh-list-dropsofa").css({
                    opacity: 0
                })
                $('.qbh-buy-dropsofa').show().animate({
                    bottom: -($(window).height() - 210),
                    right: 450,
                }, 1000, function () {
                    // 购物车载着斜着的沙发离开
                    $('.qbh-buy-dropsofa').css({
                        opacity: 0
                    });
                    $(".qbh-info-cart img:last-child").show();
                    $(".qbh-info-cart").animate({
                        right: -600
                    }, 1000, function () {
                        // 第四屏屏幕中间出现收货信息的同时 提示语发生变化
                        $('.qbh-info-profile').animate({
                            opacity: 1
                        }, 1000, function () {
                            $('.qbh-info-profile img:last-child').animate({
                                opacity: 1
                            }, 1000);
                        });

                        $('.qbh-info-tips img:last-child').animate({
                            opacity: 1
                        }, 1000);
                    });
                 
                })
            }
            // 第六屛
            if (index == 5 && nextIndex ==6) {
                $('.qbh-payment-smallsofa').show().animate({
                  bottom:-($(window).height()-450),
                  width:40
                },1000);
                $('.qbh-delivery-box').show().animate({
                  bottom:450,
                  left:180
                },1000,function(){
                    $('.qbh-payment-smallsofa').css({
                        opacity:0
                    })
                    $(this).animate({
                     bottom:50,
                     left:480,
                     width:10
                    },1000,function(){
                      $(this).css({ opacity:0 })
                      //小车
                        $('.qbh-delivery').animate({
                            backgroundPositionX:'100%'
                        },2000,function(){
                            $('.qbh-delivery-tips img:last-child').animate({
                               opacity:1
                            },2000,function(){
                                $('.qbh-delivery-man').animate({
                                    bottom:108,
                                    height:305,
                                    right:610
                                },1000,function(){
                                   $(this).animate({
                                       right:400
                                   },1000,function(){
                                       $('.qbh-delivery-door').show()
                                       $('.qbh-delivery-buyer').animate({
                                            height:294
                                       },1000,function(){
                                           $('.qbh-delivery-shouhuo').show()
                                       })
                                   })
                                })
                            })
                        })
                        $('.qbh-delivery-truck img:last-child').show();
                        // 提示语变化
                        $('.qbh-delivery-tips img:first-child').animate({
                            opacity: 0
                        }, 1000)

                    })
                })
            }
        },
       
       
       
    })
})
