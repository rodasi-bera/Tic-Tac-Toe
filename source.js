var player = "X"
var positions = [0,0,0,0,0,0,0,0,0]
const myclick = (but) => {
    if (!isClickable(but)) return

    var buttonId ="b"+but
    document.getElementById(buttonId).innerHTML = player
    positions[but-1] = player
    if (isWin()) {
        document.getElementById("result").innerHTML = player + " won!"
        for (var i=1; i<=9; i++) {
            if (isClickable(i)){
                document.getElementById("b" + i).innerHTML = "-"
            }
        }
    }
    if (player==="X"){
        player="o"
    }else {
        player="X"
    }
    
    return;
}
const isClickable = (but)=> {
    var buttonId ="b"+but
    if (document.getElementById(buttonId).innerHTML === "") {
        return true
    }
    return false
} 
const isWin = ()=> {

    if (positions[0]!== 0 && positions[0] ===positions[1] && positions[1] === positions[2] ){
        return true
    }
    if (positions[3]!== 0 && positions[3] ===positions[4] && positions[4] === positions[5] ){
        return true
    }
    if (positions[6]!== 0 && positions[6] ===positions[7] && positions[7] === positions[8] ){
        return true 
    }
    if (positions[0]!== 0 && positions[0] ===positions[3] && positions[3] === positions[6] ){
        return true 
    }
    if (positions[1]!== 0 && positions[1] ===positions[4] && positions[4] === positions[7] ){
        return true 
    }
    if (positions[2]!== 0 && positions[2] ===positions[5] && positions[5] === positions[8] ){
        return true 
    }
    if (positions[0]!== 0 && positions[0] ===positions[4] && positions[4] === positions[8] ){
        return true 
    }
    if (positions[2]!== 0 && positions[2] ===positions[4] && positions[4] === positions[6] ){
        return true 
    }
    return false
}
