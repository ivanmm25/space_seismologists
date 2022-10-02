// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(window).resize(
    () => {
        var canvas = document.getElementById('MoonQuakeMapCanvas');
    }
)


var min = new Date('2010.01.01').getTime() / 1000
var max = new Date('2014.01.01').getTime() / 1000

var global = {
    lognane: []
};

$(document).ready(() => {
    //https://codepen.io/2rod/pen/DoYPQL
    //Slider Time Line
    $("#slider-range").slider({
        range: true,
        min: min,
        max: max,
        step: 86400,
        values: [75, 300],
        slide: function (event, ui) {
            //$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            console.log(ui.values[0] + " " + ui.values[1])
            //$("#label1").css("margin-left", (ui.values[0] - min) / (max - min) * 100 + "%");
            //$("#label2").css("margin-left", (ui.values[1] - min) / (max - min) * 100 + "%");
        }
    });
    //$("#amount").val("$" + $("#slider-range").slider("values", 0) +
    //    " - $" + $("#slider-range").slider("values", 1));


    $.ajax({
        type: 'GET',
        url: "/Home/Dataframe",
        success: (e) => {
            console.log(e);
            $(e.rows).each((i,j) => {
                console.log("aaa " + j[34]);
                //lognane.push({x:})
            });
        }
    })


});