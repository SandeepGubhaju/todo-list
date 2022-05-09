var input = document.querySelector("input");
var button1 = document.querySelector("#button1");
var button2=document.querySelector("#button2");

button1.addEventListener("click",function(){
    var paragraph = document.createElement("p");
    paragraph.innerText = input.value;
    TodoContainer.appendChild(paragraph);
    input.value=""
    paragraph.addEventListener("click",function(){
         paragraph.style.textDecoration="line-through"
    });
    paragraph.addEventListener("dblclick",function(){
        TodoContainer.removeChild(paragraph);
    });
    button2.addEventListener("click",function(){
        TodoContainer.removeChild(paragraph);
    })
    
});




