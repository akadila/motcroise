//var input = document.getElementById//
var submit = document.getElementById("submit");
var reponses = ["C","H","A","T","A","O","R", "O","U","I","A","U","T","O"];
var input = document.querySelectorAll("input");


submit.addEventListener("click", function(){
    var all = true;
for(var i = 0; i < reponses.length; i++){
    if(input[i].value.toUpperCase() === reponses[i]){
    input[i].style.backgroundColor = "#00ff00"
}
    else if (input[i].value === ""){
    input[i].style.backgroundColor = "#ffffff";
    all = false;
}
    else {
    input[i].style.backgroundColor = "#ff0000";
    all = false;
    


}
}
 if (all === true ){
 alert("Vous avez GAGNE !")}
 else{
     alert("Vous avez malheureusement perdu :( ")
 }
});

