const letters = "0123456789ABCDEF";
const divs = document.querySelectorAll("div");

console.log(divs);


function updateColor() {

  for (let j = 0; j < divs.length; j++) {
    let color = ['#'];
    let colorMC = letters[(Math.floor(Math.random() * 16))];


    for (let i = 0; i < 6; i++) {
      let colorAll = letters[(Math.floor(Math.random() * 16))]
      color.push(colorAll);
    }
    color = color.join("");
    console.log(color);
    console.log(divs[j]);
    
    divs[j].style.backgroundColor = `${color}`;
  }

  
}

setInterval(updateColor, 500);