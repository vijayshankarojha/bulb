var bol= document.querySelector("#bol")
var bu=document.querySelector("button")
var f=0

bu.addEventListener( "click",function(){
   if(f==0){
   bol.style. backgroundColor="yellow"
   
   f=1
} 
else{
   bol.style.backgroundColor="transparent"
   f=0
}

})