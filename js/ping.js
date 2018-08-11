var deter=function(inPut)
{ for(myNumber=1;myNumber<inPut;myNumber ++){
if(myNumber%3===0 && myNumber%5===0){$(".kuria").append("<li>status:pingpong</Li>")}else if(myNumber%5===0){
                $(".kuria").append("<li>ping</Li>")}else if(myNumber%3===0){
                                $(".kuria").append("<li>status:pong</Li>")
              }else{$(".kuria").append("<li>status:"+ myNumber + "</Li>")};}};
            ;
$(document).ready(function() {
  $("form#number").submit(function(event){
    event.preventDefault();
    var inPut=parseInt($("input#put").val());
    deter(inPut);

});
});
