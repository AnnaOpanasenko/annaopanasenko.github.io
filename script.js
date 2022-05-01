const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const counter = document.getElementById("counter");
document.addEventListener("keydown", function(event){    /*обработчик событий*/
jump();
});    

function jump() {         
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout (function(){
        dino.classList.remove("jump")
    }, 300/*milisec*/)
}
 /*к дино добавили класс, чтоб он мог прыгать (dino.classList.add("jump");) */
/*setTimeout позволяет вызвыть ф-ю через какое-то время (300мили сек) */
/*добавили if иначе можем прыгнуть только один раз*/
let isAlive = setInterval (function() {
   let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
   let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left")); 
let score = parseInt(counter.textContent);


   if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
 score++; 
    counter.textContent = score    
    alert("GAME OVER - you lost " + score + " times")


   }
}, 10)
/*вызываем ф-ю через определ. интервал времени(10 милисек) */
