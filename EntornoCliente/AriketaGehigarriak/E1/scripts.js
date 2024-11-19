$(document).ready(function() {

    $("#Hasi").click(animation);
});

function animation(){
    sun_raft();
    cloud1();
    cloud2();
    cloud3();
    $("#greetings").animate({top: '125px' }, 900);
    $("#stamp").animate({left: '600px' }, 900);
}

function sun_raft(){
    $("#sun").animate({opacity: "0.7" }, 900).animate({opacity: "1"}, 900);
    $("#raft").animate({top: "-=1px" }, 900).animate({top: "+=1px"}, 900);
    $("#raftripple").animate({opacity: "0.1" }, 900).animate({opacity: "1"}, 900);
    setTimeout(sun_raft, 2000);
}
function cloud1(){
    $("#cloud1").animate({left: "800px" }, 10000).animate({left: "-100px"}, 0);
    setTimeout(cloud1,10000);
}
function cloud2(){
    $("#cloud2").animate({left: "900px" }, 9000).animate({left: "-250px"}, 0);
    setTimeout(cloud2,9000);
}
function cloud3(){
    $("#cloud3").animate({left: "750px" }, 6000).animate({left: "-100px"}, 0);
    setTimeout(cloud3,6000);
}