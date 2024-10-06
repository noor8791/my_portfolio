 $(function(){
        $('#menu').slicknav({
              "label":"",
              "brand":"Noor Mohammad"
        });
    });

 $(document).ready(function() {
  $(".skitter-large").skitter({
    dots:false
  });
});

 $(document).ready(function(){
  $('.owl-carousel').owlCarousel({
     loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:false
        },
        600:{
            items:3,
            nav:false,
            dots:false
        },
        1000:{
            items:5,
            nav:false,
            dots:false,
            loop:true
        }
    }
  });
});

 $(document).ready(function(){
     $(".progress_bar_html").animate({"width":"80%"},300,function(){
        $(".progress_bar_CSS_2").animate({"width":"70%"},300,function(){
            $(".progress_bar_css_3").animate({"width":"82%"},300,function(){
                $(".progress_bar_script").animate({"width":"75%"},300,function(){
                    $(".progress_bar_jquery").animate({"width":"60%"},300);
                });
            });
        });
     });
 });