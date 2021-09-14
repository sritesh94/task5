$(document).ready(function(){

    $(".toggle").click(function(){
        $("#slidepanel").addClass("active");
        $(".times").show();
        $(".toggle").hide();
    });
    $(".times").click(function(){
        $("#slidepanel").removeClass("active");
        $(".times").hide();
        $(".toggle").show();
    })

    const $menu = $('#slidepanel');
    

    $(document).mouseup(e => {
    if (!$menu.is(e.target) 
    && $menu.has(e.target).length === 0)
    {
        $menu.removeClass('active');  
        $(".times").hide();
        $(".toggle").show();
    }
    });
});







