let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //PlayerX,playerO

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  count = 0;
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};
let count = 0;

const counts = () => {
  count = count + 1;
  console.log(count);
  if (count == 9) {
    console.log("Count reach to 9");
    msg.innerText = "Game Draw , Restart The game";
    msgContainer.classList.remove("hide");
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    counts();

    if (turnO) {
      //Player O
      box.classList.remove("red");

      box.innerText = "O";

      turnO = false;
    } else {
      //Player X
      box.classList.add("red");
      box.innerText = "X";

      turnO = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showwinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  count = 0;
  disableBoxes();
};

const checkwinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showwinner(pos1Val);
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
