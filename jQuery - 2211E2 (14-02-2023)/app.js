// $(document).ready(function(){
//     $("#hide").click(function(){
//        $("#img").toggle("slow")
//     })
// })


//480 seconds
//8 minutes
// $(document).ready(function(){
//     $("#show").click(function(){
//        $("#img").show(10000)
//     })
// })






//Anonymus Functions


// $(document).ready(function(){
// $("#hide").click(function(){
//     $("#img").fadeOut(6000);
// })
// })

// $(document).ready(function(){
//     $("#show").click(function(){
//         $("#img").fadeIn(6000);
//     })
//     })

// $(document).ready(function(){
//     $("#hide").click(function(){
//         $("#img").fadeTo(3000,0.75);
//     })
//     })


// $(document).ready(function(){
// $("#hide").click(function(){
//     $("#img").slideUp();
// })
// })

// $(document).ready(function(){
//     $("#show").click(function(){
//         $("#img").slideDown();
//     })
//     })


// $(document).ready(function(){
//     $("#hide").click(function(){
//        $("#img").fadeToggle(3000)
//     })
// })

// $(document).ready(function(){
//     $("#hide").click(function(){
//         $("#div").animate({left: '250px'});
//     })
// })

// $(document).ready(function(){
//     $("#hide").click(function(){
//       $("#div").animate({
//         left:'250px',
//         opacity:'0.5',
//         height:'+=250px',
//         width:'+=250px'
//     },5000);
//     });
//   });


$(document).ready(function(){
    $("#hide").click(function(){
        let time=+prompt("Enter time in seconds")
        $("#para").toggle(time*1000)
    })
})