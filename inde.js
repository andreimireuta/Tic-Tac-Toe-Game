var detectare = document;
var tabla=[1,1,1,1,1,1,1,1,1];
var tura=1;
detectare.onclick = e => {
    
    var clickedP = e.target.id;
    console.log(clickedP);
    document.getElementById("buttonR").onclick = function(){
        // alert("pana aici e ok");
        window.location.reload();
    }
    newClick = clickedP.replace(/^\D+/g, ''); // asa se extrag doar numerele dintr-o variabila
    console.log(newClick);
    var jucator= "";

   if(tura%2===1){
       jucator= "X";
   }
   else{
       jucator="O";
   }
    

    if (tabla[newClick -1] !== 1){
        // alert("Nu se mai poate adauga in aceasta casuta nimic");
    }
    else if(tura%2 ===1) {
        tabla[newClick - 1] = 2;
        document.getElementById(clickedP).innerHTML = jucator;
        document.getElementById(clickedP).classList.add("show");
        document.getElementById("juc").innerHTML= "0";
        tura+=1;
    }
    else{
        tabla[newClick - 1] = 0;
        document.getElementById(clickedP).innerHTML = jucator;
        document.getElementById(clickedP).classList.add("show");
        document.getElementById("juc").innerHTML= "X";
        tura+=1;
    }
    

    for (let i=0;i<tabla.length;i++){
        if((tabla[i]===tabla[i+3] && tabla[i+3]===tabla[i+6] && tabla[i]!==1 && tabla[i+3]!==1 && tabla[i+6]!==1)
        || (tabla[i]===tabla[i+1] && tabla[i+1]===tabla[i+2] && tabla[i]!==1 && tabla[i+1]!==1 && tabla[i+2]!==1)
        || (tabla[2]===tabla[4] && tabla[4]===tabla[6] && tabla[2]!==1 && tabla[4]!==1 && tabla[6]!==1)
        || (tabla[0]===tabla[4] && tabla[4]===tabla[8] && tabla[0]!==1 && tabla[4]!==1 && tabla[8]!==1)
            )
        {
            // alert(`Jucatorul ${jucator} a castigat aceasta runda`);
            document.getElementById("h222").innerHTML=`Jucatorul ${jucator} a castigat aceasta runda`;
            var gameOver=1;
            break;
        }
    }
    // if(gameOver==1 && confirm("Mai doriti sa jucati o runda?")){
    //     window.location.reload();
    // }
    // else{
    //     console.log("You pressed cancel");
    // }
}