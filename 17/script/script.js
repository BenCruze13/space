window.onscroll = function(){key(),key1(),key2(),key3(),key4()};


function key(){
    if(document.documentElement.scrollTop> 500) {
        document.getElementById("facts").className = "slide";
    }else if(document.documentElement.scrollTop< 500){
        document.getElementById("facts").className = "slide1";

    }
    
}

function key1(){
    if(document.documentElement.scrollTop> 350) {
        document.getElementById("welcome").className = "slide";
    }else if(document.documentElement.scrollTop< 350){
        document.getElementById("welcome").className = "slide1";
    }
}

function key2(){
    if(document.documentElement.scrollTop> 700) {
        document.getElementById("plan").className = "opac";
    }else if(document.documentElement.scrollTop< 700){
        document.getElementById("plan").className = "opac1";
    }
}

function key3(){
    if(document.documentElement.scrollTop> 1200) {
        document.getElementById("img").className = "slide";

    }else if(document.documentElement.scrollTop< 1200){
        document.getElementById("img").className = "slide1";
    }
}

function key4(){
    if(document.documentElement.scrollTop> 1650) {
        document.getElementById("form").className = "slide";
    }else if(document.documentElement.scrollTop< 1650){
        document.getElementById("form").className = "slide1";
    }
}



/*function key(){
    if(document.documentElement.scrollTop> 500) {
        document.getElementById("first").className = "slide";
    }else if(document.documentElement.scrollTop< 500){
        document.getElementById("first").className = "slide1";
    }
}*/

window.onload = function(){intro(),pop(),introb()};

function intro(){
    document.getElementById("front").className = "intro";
}

function pop(){
    document.getElementById("backdrop").className = "pop";
}

function introb(){
    document.getElementById("back").className = "introb";
}





