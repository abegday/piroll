(function ($){
    $(document).ready(function (){
        $('.mickal-slider').slick({
            arrows:false,
            dots:true,
             customPaging : function(slider, i) {
             return ''
            },
        });
    })
})(jQuery)