Game_logic();
let Turn = "X"
let Count_Mach = 0;
let Game_over = false;


if (!Game_over) {

    document.querySelector(".line").style.visibility = "hidden";

}


// .................................... Change Turn ....................................

const Chang_Turn = () => {

    // console.log(Turn)
    return Turn === "X" ? "0" : "X";


}

// .................................... Win Chake ....................................

function chake_win() {
    const Win = [
        [0, 1, 2, 3, 2.7, 0],
        [3, 4, 5, 3, 9, 0],
        [6, 7, 8, 3, 15, 0],
        [0, 3, 6, -6.1, 9.1, 90],
        [1, 4, 7, 3, 9.1, 90],
        [2, 5, 8, 12.1, 9.1, 90],
        [0, 4, 8, 2.9, 8.7, 34],
        [2, 4, 6, 3, 8.7, 146]
    ]


    let GameBox = document.querySelectorAll('.GameBox');
    Win.forEach((e) => {

        if ((GameBox[e[0]].innerText === GameBox[e[1]].innerText) && (GameBox[e[1]].innerText === GameBox[e[2]].innerText) && (GameBox[e[0]].innerText !== '')) {
           
            document.querySelector('.Show_Turn').innerText ='Win ' + GameBox[e[0]].innerText;
            document.querySelector(".line").style.visibility = "visible";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            Count_Mach++;
          
        


            if (Turn === "X") {
                console.log('Win by X')
                let Score_container = document.createElement('div');
                Score_container.className = 'Score_value';

                let count = document.createElement('span')
                count.innerText = Count_Mach;

                let Win_X = document.createElement('span')
                Win_X.innerText = 'Win';

                let Win_0 = document.createElement('span')
                Win_0.innerText = 'Lose';

                Score_container.appendChild(count);
                Score_container.appendChild(Win_X);
                Score_container.appendChild(Win_0);

                let temp = document.querySelector('.Score_bord')
                temp.appendChild(Score_container);
            }
            else if (Turn === "0") {
                console.log('Win by 0')
                let Score_container = document.createElement('div');
                Score_container.className = 'Score_value';

                let count = document.createElement('span')
                count.innerText = Count_Mach;

                let Win_X = document.createElement('span')
                Win_X.innerText = 'Lose';

                let Win_0 = document.createElement('span')
                Win_0.innerText = 'Win';

                Score_container.appendChild(count);
                Score_container.appendChild(Win_X);
                Score_container.appendChild(Win_0);

                let temp = document.querySelector('.Score_bord')
                temp.appendChild(Score_container);
            }

            Game_over = true;
        }
    })


    let New_game = document.querySelector('.New_game_Button');
    New_game.addEventListener('click', NewGame);
            let Restart_game = document.querySelector('.Restar_Button');
            Restart_game.addEventListener('click',Reset_Game);
}


//.................................... New Button ....................................

function NewGame() {
    let GameBox = document.querySelectorAll('.GameBox');
    GameBox.forEach((e) => {
        e.innerText = '';
    })


    Turn = "X";
    Game_over = false;

    document.querySelector('.Show_Turn').innerText = "Turn: X";
    Game_over = false;
    document.querySelector(".line").style.visibility = "hidden";
}

// .................................... Reset Button ....................................
function Reset_Game() {
    let GameBox = document.querySelectorAll('.GameBox');
    GameBox.forEach((e) => {
        e.innerText = '';
    })

    let ScoreValue = document.querySelectorAll('.Score_value')
    ScoreValue.forEach((e) => {
        e.remove();
    })



    Count_Mach=0;
    Turn = "X";
    Game_over = false;

    document.querySelector('.Show_Turn').innerText = "Turn: X";
    Game_over = false;
    document.querySelector(".line").style.visibility = "hidden";
}

// .................................... Game Logic ....................................
function Game_logic() {

    let GameBox = document.querySelectorAll('.GameBox');
    GameBox.forEach((e) => {


        e.addEventListener('click', () => {


            if (e.innerText === '' && !Game_over) {
                e.innerText = Turn;
                console.log(Turn);
                chake_win()

                document.querySelector('.line');

                  if (!Game_over) {
                Turn = Chang_Turn();
                document.querySelector('.Show_Turn').innerText = "Turn: " + Turn
            }
            }


          
        })
    })
}




