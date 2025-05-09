function step1(fn){
    setTimeout(function(){
        console.log("Select a pic from gallery");
        // step2();
        fn();
    },5000);
}
function step2(fn){
    setTimeout(function(){
        console.log("Applying Filter");
        // step3();
        fn();
    },2000);
}
function step3(fn){
    setTimeout(function(){
        console.log("Adding caption");
        // step4();
        fn();
    },3000);
}
function step4(){
    setTimeout(function(){
        console.log("Uploading my post on Instagram");
    },1000);
}

// step1();
step1(function(){
    step2(function(){
        step3(function(){
            step4();
        });
    });
});

// step1();
// step2();
// step3();
// step4();
