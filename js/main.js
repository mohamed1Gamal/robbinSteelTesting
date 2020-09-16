let colorItem = $(".color-item");
colorItem.eq(0).css("backgroundColor", "tomato");
colorItem.eq(1).css("backgroundColor", "#09c");
colorItem.eq(2).css("backgroundColor", "orange");
colorItem.eq(3).css("backgroundColor", "teal");
colorItem.eq(4).css("backgroundColor", "yellow");
colorItem.click(function() {
    let color = $(this).css("backgroundColor");
    $("body").css("color", color);
})
$("#options img").click(function() {
    let imgSrc = $(this).attr("src");
    $("header").css("backgroundImage", `url(${imgSrc})`);
});
$("#options i").click(function() {
    let colorBoxWidth = $(".colors-box").outerWidth();
    if ($("#options").css("left") == "0px") {
        $("#options").animate({
            left: `-${colorBoxWidth}`
        }, 1000);
    } else {
        $("#options").animate({
            left: `0px`
        }, 1000);
    }

})
$(document).ready(function() {
    $("#overLay").fadeOut(3000, function() {
        $("body").css("overflow", "auto")
    });

});