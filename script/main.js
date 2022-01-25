$(function(){
    popup();
    tab();
    menu();
    slide()
    setInterval(slide,3000);
});

var i=0;
function slide(){
    var nPos = -300 * i;
    $("#imgs").css({
        "top":nPos
    });
    if(i >= 2){
        i = 0;
    }else{
        i++;
    }

}


function menu(){
    $("#gnb > li").mouseover(function(){
        console.log("mouserover!!");
        $(".lnb").css("display","block")
        $(this).addClass("highlight");
    });
    $("#gnb > li").mouseout(function(){
        console.log("mouserout!!");
        $(".lnb").css("display","none");
        $(this).removeClass("highlight");
    });
    $(".lnb > li").mouseover(function(){
        console.log("mouserover!!");
        $(this).addClass("highlight");
        
    });
    $(".lnb > li").mouseout(function(){
        console.log("mouserout!!");
        $(this).removeClass("highlight");
    });
    

}

function popup(){
    showPopup();
    hidePopup();
};
function showPopup(){
    $(".notice li:nth-child(1)").click(function(){
        $("#modal").css("display","block")
    })
}
function hidePopup(){
    $("#btn_close").click(function(){
        $("#modal").css("display","none")
    })
}

function tab(){
    $("#gallery_title").click(function(){
        $(".notice").css("display","none");
        $(".gallery").css("display","block");
        $(this).addClass("active");
        $("#news_title").removeClass("active");

    })
    $("#news_title").click(function(){
        $(".notice").css("display","block");
        $(".gallery").css("display","none");
        $(this).addClass("active");
        $("#gallery_title").removeClass("active");
    })
}