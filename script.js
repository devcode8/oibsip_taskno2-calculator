const display = document.querySelector(".screen");



const buttons = Array.from(document.querySelectorAll(".button"));
// console.log(buttons);

buttons.map(button => {
    button.addEventListener('click',(e) =>{
        // console.log(e);
        // console.log(e.target.innerHTML);
        switch (e.target.innerHTML) {
            case 'C':
                display.innerHTML='';
                break;
            case '⌫':
                display.innerHTML= display.innerHTML.slice(0,-1);
                break;
            case '=':
                if(display.innerHTML){
                    display.innerHTML= eval(display.innerHTML);
                }else{
                    display.innerHTML= '';
                }
                break;
            case '÷':
                display.innerHTML += '/';
                break;
            default:
                display.innerHTML += e.target.innerHTML;
                break;
        }
    })
})
