$(function(){
    
    /* Gnb 클릭시 Scroll 이동 */
    
    $('#gnb>li').find('a').click(function(event){
        event.preventDefault();       $('html,body').animate({scrollTop:$(this.hash).offset().top},500);
    });
    
    
    
    
    /* Down 클릭시 이동 */
    
    $('.down>a').click(function(){
        $('html,body').animate({scrollTop:$('#style').offset().top},500)
    });  
        
    
    
    /* Style Btn 클릭 */
    
    $('#style_btn label[for="ex"]').on('click',function(){
        
        $('#interior').find('.intro').stop().animate({"width":"0"},1000);
        $('#exterior').find('.intro').stop().animate({"width":"100vw"},1000,function(){
            $('#exterior').stop().removeClass('on');
            $('#interior').stop().removeClass('on');
            $('#exterior').stop().addClass('on');
            $('.part').find('.control_btn').fadeIn();
           
        });        
        $('#exterior .intro').find('.txt_box').stop().fadeIn(500).animate({"left":"100px"},800);        
    });
    
    $('#style_btn label[for="in"]').on('click',function(){ 
        $('#interior').find('.intro').stop().animate({"width":"100vw"},1000);
        $('#exterior').find('.intro').stop().animate({"width":"0"},1000, function(){            
            $('#exterior').stop().removeClass('on');   $('#interior').stop().removeClass('on');   
            $('#interior').stop().addClass('on');
            $('.part').find('.control_btn').fadeIn();
        });
        $('#interior .intro').find('.txt_box').stop().fadeIn(500).animate({"right":"100px"},800);
    });
    
    /* Style Slide 버튼 */
    
    var styleNum = $('#interior .page').length;
    var styleImgW;
    var sCurrentNum = 0;
    $('#style .back').hide();
    
    $('#style .more').on('click',function(event){
        event.preventDefault();
        if(sCurrentNum == 0){
            $('#style .back').fadeIn();            
        }
        sCurrentNum++;
        if(sCurrentNum >= styleNum){
            sCurrentNum = styleNum-1;
        }
        if(sCurrentNum == (styleNum-1)){
            $('#style .more').fadeOut();
        }
        var styleImgW = $('.part .color').width();
        $('.slides').width(styleNum*styleImgW);
        var moveLeft = sCurrentNum*(-styleImgW);
        $('.slides').animate({left:moveLeft},600);
    });
    
    $('#style .back').on('click',function(event){
        event.preventDefault();
        if(sCurrentNum == (styleNum-1)){
           $('#style .more').fadeIn();            
        }
        sCurrentNum--;
        if(sCurrentNum <= 0){
            sCurrentNum = 0;
        }
        if(sCurrentNum == 0){
            $('#style .back').fadeOut();
        }
        var styleImgW = $('.part .color').width();
        $('.slides').width(styleNum*styleImgW);
        var moveLeft = sCurrentNum*(-styleImgW);
        $('.slides').animate({left:moveLeft},600);
    });

    /* Style Color 버튼 */
    
    $('#exterior').find('.color_btn label').on('click',function(event){
        event.preventDefault();        
        $('#exterior').find('.color_img li').removeClass('on');
        var i = $(this).index();        
        $('#exterior').find('.color_img li').eq(i).addClass('on');
    });
    
    $('#interior').find('.color_btn label').on('click',function(event){
        event.preventDefault();
        $('#interior').find('.color_img li').removeClass('on');
        var i = $(this).index();        
        $('#interior').find('.color_img li').eq(i).addClass('on');
    });
    
    /* Style Detail 버튼 */
    
    $('#exterior .detail').find('.thumb_img label').on('click',function(event){
        event.preventDefault();        
        $('#exterior').find('.main_img img').removeClass('on');
        var i = $(this).index();        
        $('#exterior').find('.main_img img').eq(i).addClass('on');
    });
    
    $('#interior .detail').find('.thumb_img label').on('click',function(event){
        event.preventDefault();        
        $('#interior').find('.main_img img').removeClass('on');
        var i = $(this).index();        
        $('#interior').find('.main_img img').eq(i).addClass('on');
    });
    
    
    
    /* Performance Slide 버튼 */
    
    var perNum = $('#performance li').length;
    var perImgW = $('#performance li').width();
    $('#performance .content_wrap ul').width(perNum*perImgW);
    var perCurrentNum = 0;
    
    $('#performance .back').hide();
    
    $('#performance .more').on('click',function(event){
        event.preventDefault();
        if(perCurrentNum == 0){
            $('#performance .back').fadeIn();
        }
        perCurrentNum++;
        if(perCurrentNum >= perNum){
            perCurrentNum = perNum-1;
        }
        if(perCurrentNum == (perNum-1)){
            $('#performance .more').fadeOut();
        }
        var moveW = perCurrentNum*(-perImgW);
        $('#performance .content_wrap ul').animate({left:moveW},600);        
    });
    $('#performance .back').on('click',function(event){
        event.preventDefault();
        if(perCurrentNum == (perNum-1)){
            $('#performance .more').fadeIn();
        }
        perCurrentNum--;
        if(perCurrentNum <= 0){
            perCurrentNum = 0;
        }
        if(perCurrentNum == 0){
            $('#performance .back').fadeOut();
        }
        var moveW = perCurrentNum*(-perImgW);
        $('#performance .content_wrap ul').animate({left:moveW},600);
        
    });
    
    
    
    /* Safety Slide 버튼 */
    
    var safeNum = $('#safety .page').length;
    var safeW = $('#safety .page').width();
    $('#safety .page_wrap').width(safeNum*safeW);    
    $('#safety .back').hide();
    
    $('#safety .more').on('click',function(event){
        event.preventDefault();
        $(this).fadeOut();
        $('#safety .back').fadeIn();
        $('#safety .page_wrap').animate({left:-safeW},600);
    });
    $('#safety .back').on('click',function(event){
        event.preventDefault();
        $(this).fadeOut();
        $('#safety .more').fadeIn();
        $('#safety .page_wrap').animate({left:0},600);
    });
    
    
    
    /* Color 회전 버튼 */
    
    function slide (){
        var img = $('#exterior .color_img li.on').find('img');
        img.eq(1).fadeIn(500);
        img.eq(0).fadeOut(500,function(){
           $(this).appendTo($('#exterior .color_img li.on')); 
        });
    }
    $('.btn a.next').on('click',function(event){
        event.preventDefault();
        console.log('click');        
        slide();
        });
    
    function slide2 (){
        var img = $('#exterior .color_img li.on').find('img');
        img.eq(3).prependTo($('#exterior .color_img li.on')).hide();
        img.eq(0).show();
        img.eq(3).fadeIn(500);
        img.eq(0).fadeOut(500);
    }
    $('.btn a.prev').on('click',function(evnet){
        event.preventDefault();
        slide2();
        });
    
    /* CONVENIENCE */
    
    $('#convenience .content_wrap > div').on('click',function(event){
        event.preventDefault();        
        if($(this).find('div').attr('class') == 'click'){            
            $(this).find('div').removeClass('click');
        }else {
            $('#convenience .content_wrap > div > div').removeClass('click');
            $(this).find('div').addClass('click');            
        }
        
        if($(this).attr('class') == 'bg'){
            $(this).removeClass('bg');
        }else {
            $('#convenience .content_wrap > div').removeClass('bg');
            $(this).addClass('bg');
        }
        
    });   
    
    
    /* Toggle Menu */
    
    $('#toggle_btn').on('click',function(event){
        event.preventDefault();
        if($(this).attr('class') == 'active'){
            $(this).removeClass('active');
            $('#gnb').removeClass('toggle');
        }else{
            $(this).addClass('active');
            $('#gnb').addClass('toggle');
        }
    });
    $('#gnb').on('click',function(){
        $(this).removeClass('toggle');
        $('#toggle_btn').removeClass('active');
    });
    
    
   
});