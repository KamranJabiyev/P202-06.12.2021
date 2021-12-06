// Task-1
// let item = document.getElementById("elm");

// function getParents(elm){
//     if(elm.parentElement != null){
//         elm = elm.parentElement;
//         console.log(elm.tagName);
//         getParents(elm);
//     }
// }

// getParents(item)

// inputTxt.onblur=function(){
//     console.log("blur");
// }

// inputTxt.onfocus=function(){
//     console.log("focus");
// }

// inputTxt.onchange=function(){
//     console.log("change");
// }

// inputTxt.onkeyup=function(){
//     console.log("keyup "+this.value);
// }

// inputTxt.onkeydown=function(){
//     console.log("keydown "+this.value);
// }

// inputTxt.onkeypress=function(){
//     console.log("keypress "+this.value);
// }

// let form=document.querySelector("form");

// form.onsubmit=function(ev){
//     ev.preventDefault();
//     console.log("submit");
// }

//Task - form

// inputTxt.addEventListener("blur",function(){
//     validate(this)
// })

// inputTxt.addEventListener("keyup",function(){
//     validate(this)
// })

// createUser.addEventListener("submit",function(ev){
//     ev.preventDefault();
//     validate(inputTxt);
// })


// function validate(elm){
//     if(elm.value.trim()==""){
//         elm.nextElementSibling.classList.remove("d-none");
//     }else{
//         elm.nextElementSibling.classList.add("d-none");
//     }
// }

createLiForm.addEventListener("submit",function(ev){
    ev.preventDefault();
    parentLi.innerHTML="";
    for (let i = 1; i <= inputNumber.value; i++) {
        // let li=document.createElement("li");
        // li.className="list-group-item d-flex justify-content-between";
        
        // let span=document.createElement("span");
        // span.innerText=i;

        // let icon=document.createElement("i");
        // icon.className="fas fa-times";
        // icon.onclick=function(){
        //     this.parentElement.remove();
        // }

        // li.append(span,icon);
        // parentLi.appendChild(li);
        let li=`<li class="list-group-item d-flex justify-content-between">
                        <span>${i}</span>
                        <i class="fas fa-times" onclick="removeParent(this)"></i>
                  </li>`
        
         parentLi.innerHTML+=li;
    }
});

function removeParent(elm){
    elm.parentElement.remove();
}

inputNumber.onkeyup=function(ev){
    console.log(ev.keyCode);
}

// document.querySelector(".rectangle").onkeyup=function(ev){
//     console.log(ev.keyCode);
// }



