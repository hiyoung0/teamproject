$(document).ready(function () {


            // 백그라운드 전환
            $('.sub1').hover(function () { $('#main').css("background-image", "url(./img/sub1/tos4.jpg)"); },
                function () { $('#main').css("background-image", "url(./img/main/main1.jpg)"); });

            $('.sub2').hover(function () { $('#main').css("background-image", "url(./img/main/siciliamain2.jpg)"); },
                function () { $('#main').css("background-image", "url(./img/main/main1.jpg)"); });

            $('.sub3').hover(function () { $('#main').css("background-image", "url(./img/main/roma2.jpg)"); },
                function () { $('#main').css("background-image", "url(./img/main/main1.jpg)"); });


            // 메인텍스트 전환
            $('.sub1').hover(function () {
                $('.Toscana').stop().fadeIn();
                $('.Italy').hide();
                $('video').hide();
                $('.change').show();
                $('.maintext').show();
            }, function () {
                $('.Italy').stop().fadeIn();
                $('.Toscana').hide();
            });

            $('.sub2').hover(function () {
                $('.Sicilia').stop().fadeIn();
                $('.Italy').hide();
                $('video').hide();
                $('.change').show();
                $('.maintext').show();
            }, function () {
                $('.Italy').stop().fadeIn();
                $('.Sicilia').hide();
            });

            $('.sub3').hover(function () {
                $('.Roma').stop().fadeIn();
                $('.Italy').hide();
                $('video').hide();
                $('.change').show();
                $('.maintext').show();
            }, function () {
                $('.Italy').stop().fadeIn();
                $('.Roma').hide();
            });



            //리스트
            $('.click').click(function () {
                $('.list').slideToggle();

            });


            //이미지 자동 슬라이드

            $(".change > img:gt(0)").hide();

            setInterval(function () {
                $('.change > img:first')
                    .stop().fadeOut(1000)
                    .next()
                    .stop().fadeIn(1000)
                    .end()
                    .appendTo('.change');
            }, 2000);


            //백그라운드 비디오
            $('.playvideo').click(function () {
                $('video').fadeIn();
                $('.change').hide();
                $('.maintext').hide();


            });

            $('.book').click(function () {
                $('video').fadeOut();
                $('.change').show();
                $('.maintext').show();

            });


            // 이미지 더보기
            $('.change').click(function () {
                $('#wrapper').fadeIn();
            });
            $('.ex').click(function () {
                $('#wrapper').fadeOut();
            });


            // // 이미지 더보기 슬라이드
            //   $('.left').click(function(){
            //       $('.slide li:last').prependTo('.slide');
            //       $('.slide').css('margin-left',-1820);
            //       $('.slide').stop().animate({marginLeft:0},800)
            //   });

            //   $('.right').click(function(){
            //       $('.slide').stop().animate({marginLeft:-1820},800,function(){
            //           $('.slide li:first').appendTo('.slide');
            //           $('.slide').css({marginLeft:0});
            //       });
            //   });

            //current position
            var pos = 0;
            //number of slides
            var totalSlides = $('#slider-wrap ul li').length;
            //get the slide width
            var sliderWidth = $('#slider-wrap').width();


            


                /*****************
                 BUILD THE SLIDER
                *****************/
                //set width to be 'x' times the number of slides
                $('#slider-wrap ul#slider').width(sliderWidth * totalSlides);

                //next slide 	
                $('#next').click(function () {
                    slideRight();
                });

                //previous slide
                $('#previous').click(function () {
                    slideLeft();
                });



                /*************************
                 //*> OPTIONAL SETTINGS
                ************************/
                //automatic slider
                var autoSlider = setInterval(slideRight, 3000);

                //for each slide 
                $.each($('#slider-wrap ul li'), function () {

                    //create a pagination
                    var li = document.createElement('li');
                    $('#pagination-wrap ul').append(li);
                });

                //counter
                countSlides();

                //pagination
                pagination();

                //hide/show controls/btns when hover
                //pause automatic slide when hover
                $('#slider-wrap').hover(
                    function () { $(this).addClass('active'); clearInterval(autoSlider); },
                    function () { $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
                );



            //DOCUMENT READY



            /***********
             SLIDE LEFT
            ************/
            function slideLeft() {
                pos--;
                if (pos == -1) { pos = totalSlides - 1; }
                $('#slider-wrap ul#slider').css('left', -(sliderWidth * pos));

                //*> optional
                countSlides();
                pagination();
            }


            /************
             SLIDE RIGHT
            *************/
            function slideRight() {
                pos++;
                if (pos == totalSlides) { pos = 0; }
                $('#slider-wrap ul#slider').css('left', -(sliderWidth * pos));

                //*> optional 
                countSlides();
                pagination();
            }




            /************************
             //*> OPTIONAL SETTINGS
            ************************/
            function countSlides() {
                $('#counter').html(pos + 1 + ' / ' + totalSlides);
            }

            function pagination() {
                $('#pagination-wrap ul li').removeClass('active');
                $('#pagination-wrap ul li:eq(' + pos + ')').addClass('active');
            }


        });