const canvas = document.querySelector("#cvs");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const myObject = () => {
  return {
    playerOne: [],
    playerTwo: [],
    gameGrid: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    counter: 0,
    gridBox() {
      ctx.beginPath();
      ctx.lineWidth = 4;
      ctx.strokeRect(40, 40, 200, 200);

      ctx.moveTo(40, 40);
      ctx.lineTo(240, 240);

      ctx.moveTo(40, 240);
      ctx.lineTo(240, 40);

      ctx.moveTo(40, 140);
      ctx.lineTo(240, 140);

      ctx.moveTo(140, 40);
      ctx.lineTo(140, 240);

      ctx.stroke();
    },
    gamePiece(x, y, color) {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fill();
    },
    gameLoop() {
      interval = setInterval(gameAreaFun, 10);
    },
    stopGame() {
      clearInterval(interval);
    },
    clear() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
    circleCreation() {
      playerone = this.playerOne;
      playertwo = this.playerTwo;
      counter = this.counter;

      addEventListener("click", function (ev) {
        console.log(` X :${ev.x}, Y :${ev.y}`);
        console.log(coordinateGrid(ev.x, ev.y));
        if (counter < 6) {
          if (counter % 2 == 0) {
            playerone.push(coordinateGrid(ev.x, ev.y));
          } else {
            playertwo.push(coordinateGrid(ev.x, ev.y));
          }
        }

        counter++;
      });
    },
    results(arry) {
      if (arry.length == 3) {
        if (
          arry.every((p) => {
            return p.x >= 36 && p.x <= 42;
          }) ||
          arry.every((p) => {
            return p.x >= 136 && p.x <= 142;
          }) ||
          arry.every((p) => {
            return p.x >= 236 && p.x <= 242;
          }) ||
          arry.every((p) => {
            return p.y >= 36 && p.y <= 42;
          }) ||
          arry.every((p) => {
            return p.y >= 136 && p.y <= 142;
          }) ||
          arry.every((p) => {
            return p.y >= 236 && p.y <= 242;
          })
        ) {
          return true;
        } else {
        }
      }
    },
  };
};

let object = myObject();
let x = 40;
let myPiece = object.playerOne[0];
object.gameLoop();
// object.circleCreation();
function gameAreaFun() {
  object.clear();
  object.gridBox();
  object.gamePiece(x, 40, "yellow");
  // if(x == 140){
  //   x =140
  //   console.log('hello')
  //   object.stopGame()
  // }
  // x++
  object.playerOne.forEach((player) => {
    object.gamePiece(player.x, player.y, "rgba(0,0,255,0.5)");
  });
  object.playerTwo.forEach((player) => {
    object.gamePiece(player.x, player.y, "rgba(255,0,0,0.5)");
  });

  if (object.results(object.playerOne || object.playerTwo)) {
    console.log("winner");
  }
}

function coordinateGrid(x, y) {
  if (x >= 30 && x <= 50 && y >= 30 && y <= 50) {
    // {0:0}
    x = 40;
    y = 40;
    return { x, y, posX: 0, posY: 0 };
  } else if (x > 130 && x < 152 && y > 30 && y < 52) {
    // {0:1}
    x = 140;
    y = 40;
    return { x, y, posX: 0, posY: 1 };
  } else if (x > 230 && x < 252 && y > 30 && y < 52) {
    // {0:2}
    x = 240;
    y = 40;
    return { x, y, posX: 0, posY: 2 };
  } else if (x > 30 && x < 52 && y > 130 && y < 152) {
    // {1:0}
    x = 40;
    y = 140;
    return { x, y, posX: 1, posY: 0 };
  } else if (x > 130 && x < 152 && y > 130 && y < 152) {
    // {1:1}
    x = 140;
    y = 140;
    return { x, y, posX: 1, posY: 1 };
  } else if (x > 230 && x < 252 && y > 130 && y < 152) {
    // {1:2}
    x = 240;
    y = 140;
    return { x, y, posX: 1, posY: 2 };
  } else if (x > 30 && x < 52 && y > 230 && y < 252) {
    // {2:0}
    x = 40;
    y = 241;
    return { x, y, posX: 2, posY: 0 };
  } else if (x > 130 && x < 152 && y > 230 && y < 252) {
    // {2:1}
    x = 140;
    y = 241;
    return { x, y, posX: 2, posY: 1 };
  } else if (x > 230 && x < 252 && y > 230 && y < 252) {
    // {2,2}
    x = 241;
    y = 241;
    return { x, y, posX: 2, posY: 2 };
  }
}
