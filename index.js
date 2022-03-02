let screenValue =document.getElementById("screenValue");
let calButtons = document.getElementsByTagName("button");

for(button of calButtons)
{
    button.addEventListener('click',(e)=>{
        let value = e.target.innerText;
        if(value=="C")
        {
            screenValue.value="";
        }
        else if(value=="DEL")
        {
            screenValue.value=screenValue.value.substring(0, screenValue.value.length - 1);
        }
        else if(value=="X")
        {
            screenValue.value+="*";
        }
        else if(value=="=")
        {
            try{
            screenValue.value=eval(screenValue.value);
            }
            catch(e)
            {
                alert("Please enter valid expression");
            }
        }
        else{
            screenValue.value+=value;
        }

    })
}


//ripple effect disabled because takes not working on fast clicking button
// function createRipple(event) {
//     const button = event.currentTarget;
  
//     const circle = document.createElement("span");
//     const diameter = Math.max(button.clientWidth, button.clientHeight);
//     const radius = diameter / 2;
  
//     circle.style.width = circle.style.height = `${diameter}px`;
//     circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
//     circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
//     circle.classList.add("ripple");
  
//     const ripple = button.getElementsByClassName("ripple")[0];
  
//     if (ripple) {
//       ripple.remove();
//     }
  
//     button.appendChild(circle);
//   }
  
//   const buttons = document.getElementsByTagName("button");
//   for (const button of buttons) {
//     button.addEventListener("click", createRipple);
//   }