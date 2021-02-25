let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#962DC8"

dodger.style.bottom = "0px"

let game = document.getElementById("game");

game.style.backgroundColor = "#008080"

console.log(dodger.style.left); // "180px"
console.log(dodger.style.bottom); // "0px"

document.addEventListener("keydown", function(e) {
    console.log(e.key);
  });

document.addEventListener("keydown", function(e) {
    
    if (e.key === "ArrowLeft") {
        let leftNumbers = dodger.style.left.replace("px", "");
        let left = parseInt
        (leftNumbers, 10);

        dodger.style.left = '${left - 1}px';
    }  
    console.log(e)
});

function moveDodgerLeft() {
    let LeftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {
            dodger.style.left = '${left - 1}px';
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
