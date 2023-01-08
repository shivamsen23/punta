
    gsap.registerPlugin(ScrollTrigger);
  

//circle
function circle(){
var text = document.querySelector('#tex p');
text.innerHTML=text.innerText.split('').map(
    (char ,i)=>
    `<span style="transform:rotate(${i*8.3}deg)">${char}</span>`
).join('');
}

circle();


//box-zoom
gsap.to( "#zoomin", {
    duration: 3,
    scrollTrigger: {
        trigger: "#zoomin",
        start: "top 70%",
        end: "top 30%",
    scrub: true,
        toggleClass: "scrollingzoomin",
       
    },
    repeat:-1
})


// circle-color change
$(window).on('scroll', function() {
   console.log( $(this).scrollTop() );
    
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if( scroll_pos>0 &&  scroll_pos < 125) {
            $("#tex").css('color', 'white');
            $("#circle>i").css('color', 'white');
            
        } else if(scroll_pos>125 && scroll_pos < 4840){
            $("#tex").css('color', 'white');
            $("#circle>i").css('color', 'white');
        }
        else{
            $("#tex").css('color', 'black');
            $("#tex").css('font-weight', '700');
            $("#circle>i").css('color', 'black');
        }
    });
});

/*
const scroll = new LocomotiveScroll({
    el:document.querySelector("[data-scroll-container]"),
    smooth:true,
    tablet:{smooth:true},
    smartphone:{smooth:true},
   
       });


*/


function forth(){

gsap.to(" #im1 img",{
    scrollTrigger:{
        trigger:"#forth",
        start:"top 90%",
       
       //s scroller:".container",
        scrub: 0.4,
        end: "+=3000",
    },
    y: -500,
    stagger: .001,
    //opacity:0.5,
})
gsap.to(" #im2 img",{
    scrollTrigger:{
        trigger:"#forth",
        start:"top 90%",
        end: "+=3000",
       
       //s scroller:".container",
        scrub: 0.4
    },
    y: -500,
    stagger: .001,
    //opacity:0.5,
})
gsap.to(" #im3 img",{
    scrollTrigger:{
        trigger:"#forth",
        start:"top 90%",
        end: "+=3000",
       //s scroller:".container",
        scrub: 0.4
    },
    y: -500,
    stagger: .001,
    //opacity:0.5,
})

gsap.to(" #im4 img",{
    scrollTrigger:{
        trigger:"#forth",
        start:"bottom 120%",
        end: "+=3000",
       //s scroller:".container",
        scrub: 0.4
    },
    y: -600,
    stagger: .001,
    //opacity:0.5,
})
gsap.to(" #im5 img",{
    scrollTrigger:{
        trigger:"#forth",
        start:" bottom 100%",
        end: "+=3000",
       //s scroller:".container",
        scrub: 0.4
    },
    y: -600,
    stagger: .001,
    //opacity:0.5,
})
gsap.to(" #bar1",{
    scrollTrigger:{
        trigger:"#forth",
        start:"top 99%",
        end: "+=3000",
       //s scroller:".container",
        scrub: 0.4
    },
    y: -600,
    stagger: .001,
    //opacity:0.5,
})

}
forth();

function seventh(){
gsap.to(" #simage1 img",{
    scrollTrigger:{
        trigger:"#seventh",
        start:"top 97%",
        end:"top 10%",
        end: "+=1000",
       //s scroller:".container",
        scrub: 0.1
    },
    y: -400,
    stagger: .00001,
    //opacity:0.5,
})
gsap.to(" #simage2 img",{
    scrollTrigger:{
        trigger:"#seventh",
        start:"top 97%",
        end:"top 10%",
       //s scroller:".container",
       end: "+=1000",
        scrub: 0.5
    },
    y: -300,
    stagger: .00001,
    //opacity:0.5,
})

gsap.to(" #simage3 img",{
    scrollTrigger:{
        trigger:"#seventh",
        start:"top 60%",
      //  end:"top 8%",
      end: "+=2000",
       //s scroller:".container",
        scrub: 0.4,

    },
    y: -700,
    stagger: .0001,
    //opacity:0.5,
})
gsap.to(" #simage4 img",{
    scrollTrigger:{
        trigger:"#seventh",
        start:"top 60%",
       // end:" top 8%",
       //s scroller:".container",
       end: "+=2000",
        scrub: 0.4
    },
    y: -700,
    stagger: .0001,
    //opacity:0.5,
})

gsap.to(" #simage5 img",{
    scrollTrigger:{
        trigger:"#seventh",
        start:"top 100%",
       // end:" top -8%",
       //s scroller:".container",
        scrub: 0.4,
        end: "+=1500",
    },
    y: -500,
    stagger: .0001,
    //opacity:0.5,
})
gsap.to(" #simage6 img",{
    scrollTrigger:{
        trigger:"#seventh",
        start:"top 100%",
       // end:" top -8%",
       end: "+=1500",
       //s scroller:".container",
        scrub: 0.4
    },
    y: -500,
    stagger: .0001,
    //opacity:0.5,
})
}
seventh();

var text1=document.querySelector("#text2");
var text2=document.querySelector("#text3");

window.onscroll = () =>{
    var pos= window.scrollY-22800;
    text1.style.left=`${pos}px`;
    text2.style.right=`${pos}px`;

}




gsap.to("#loader  ",{
    top:-800,
    duration:2,
    ease: Expo.easeInOut
    
    })


    gsap.to("#footer #box1", {

        y:-72,
        duration:1,
        stagger:1,
        scrollTrigger: {
            trigger: "#footer",
            start: "seventh top 100% ",
           
           
           
        },
        ease: Expo.easeInOut
        
        })


        $(document).on('scroll',function(){


            $('#text2 h2').css("margin-left",Math.max(700-0.35*window.scrollY,100)+"px")

        })
        $(document).on('scroll',function(){


            $('#text3 h2').css("margin-left",Math.max(700-0.35*window.scrollY,100)+"px")

        })

        
       
       
