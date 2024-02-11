const select = document.querySelector(".select");
const text = document.querySelector(".text");
const input = document.querySelector(".input");
const time = document.querySelector(".time");
const score = document.querySelector(".score");
const HeightScore = document.querySelector(".HeightScore");

const modal = document.querySelector(".modal");
const result = document.querySelector(".result");

const words = [
  "abreact",
  "abreacted",
  "abreacting",
  "abreaction",
  "abreactions",
  "paltrier",
  "paltriest",
  "paltrily",
  "paltriness",
  "paltrinesses",
  "paltry",
  "paludal",
  "paludism",
  "shiv",
  "shiva",
  "shivah",
  "shivahs",
  "shivaree",
  "shivareed",
  "shivareeing",
  "welcome",
  "high",
  "probably",
  "control",
  "government"
];

var randomText;
var num = 0;
var gameTime = 10;

var hScore = localStorage.getItem("hScore")? localStorage.getItem("hScore") : 0

const writeText = () => {
  var index = Math.floor(Math.random() * words.length);
  randomText = words[index];
  text.textContent = randomText;
};

writeText();

input.addEventListener("input", () => {
  if (randomText == input.value) {
    writeText();
    input.value = "";

    num++;
    score.textContent = num;

    var level = select.value;

    if (level == "Easy") {
      gameTime += 5;
      time.textContent += "+5";
    } else if (level == "Medium") {
      gameTime += 3;
      time.textContent += "+3";
    } else {
      gameTime += 2;
      time.textContent += "+2";
    }
  }
});




const interval = setInterval(() => {
  if (gameTime == 0) {
    clearInterval(interval);

    if(num>hScore){
      localStorage.setItem("hScore", num)

      hScore = localStorage.getItem("hScore")
    }

    HeightScore.textContent = hScore


    modal.classList.add("active");
    result.textContent = num;

  } else {
    gameTime--;

    time.textContent = gameTime;
  }
}, 1000);


HeightScore.textContent = hScore











// LOCALSTORAGE

// 1) Ma'lumot joylash

// localStorage.setItem("name", "Otabek")
// localStorage.setItem("age", "15")

// 2) Ma'lumot olish

// var name = localStorage.getItem("name")
// var age = localStorage.getItem("age")

// console.log(name, age);


