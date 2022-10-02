// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//$(window).resize(
//    () => {
//        var canvas = document.getElementById('MoonQuakeMapCanvas');
//    }
//)


var min = new Date('1969.01.01').getTime() / 1000
var max = new Date('1977.12.31').getTime() / 1000



$(document).ready(() => {
    //https://codepen.io/2rod/pen/DoYPQL
    //Slider Time Line
    $("#slider-range").slider({
        range: true,
        min: min,
        max: max,
        step: 86400,
        values: [min, max],
        slide: function (event, ui) {
            //$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            console.log(ui.values[0] + " " + ui.values[1])
            $("#label1 p").html("Final Date: " + new Date(ui.values[1] * 1000).toLocaleDateString("en-US"))
            $("#label2 p").html("Start Date: " + new Date(ui.values[0] * 1000).toLocaleDateString("en-US"))


            //Control pintar solo los que estan dentro de la fecha
            if (global.lognane != null) {
                var auxKeys = Array.from(global.lognane.keys());

                auxKeys.forEach((e) => {
                    global.lognane.get(e).visible = false;
                    if ((e < new Date(ui.values[1] * 1000)) && (e > new Date(ui.values[0] * 1000))){
                        global.lognane.get(e).visible = true;
                    }
                });
            }

            //$("#label1").css("margin-left", (ui.values[0] - min) / (max - min) * 100 + "%");
            //$("#label2").css("margin-left", (ui.values[1] - min) / (max - min) * 100 + "%");
        }
    });
    //$("#amount").val("$" + $("#slider-range").slider("values", 0) +
    //    " - $" + $("#slider-range").slider("values", 1));
    $("#label1 p").html("Final Date: " + new Date(max * 1000).toLocaleDateString("en-US"))
    $("#label2 p").html("Start Date: " + new Date(min* 1000).toLocaleDateString("en-US"))

});