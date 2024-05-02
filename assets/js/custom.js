$(document).ready(function(){
    const d = new Date(); 
// let time = d.getMinutes();
let seconds = d.getSeconds();
 
    const date = new Date();
    let hours = date.getHours();
    // const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    const minutes = date.getMinutes().toString().padStart(2, '0');
 
 
console.log(seconds);

 
    const A = 61
    for (let i = 0; i < 60; i++) {
        const rotation = i*6
        var html =''
        if(i === seconds){
             html = `<span class="line active" style="transform: rotate(${rotation}deg);"></span>`;
        }else{
            html = `<span class="line" style="transform: rotate(${rotation}deg);"></span>`;

        }
        $('.hour').append(html) 
        
    }
})