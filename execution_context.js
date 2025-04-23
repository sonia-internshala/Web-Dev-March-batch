var a=10;
console.log(a);

function abc(){
    console.log("hello, i am abc");
    function def(){
        console.log("hello, I am def")
    }
    def();
}
abc();