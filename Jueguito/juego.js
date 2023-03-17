function proceso() {
    var img = document.createElement('img');
    img.src = './image/piedra.jpg';
    let opc = document.querySelector("#opcion").value ;
    let maquina = Math.floor(Math.random()*5)
    let ganar = 1
    let resultadoG ="Has ganado wwiiiiiii"
    let resultadoP ="Perdiste maldita escoria"
    let piedra =" la maquina eligio piedra" ;
    let papel = " la maquina eligio papel ";
    let tijera =" la maquina eligio tijera" ;
    let lagarto =" la maquina eligio lagarto" ;
    let spock =" la maquina eligio spock" ;
    let empate = "Empates"
    
    switch(opc){

        //Caso piedra
        case 0:
                if(maquina == 1 || maquina == 4){
                document.querySelector("#ganador").textContent = resultadoP;
                 }
                 if(maquina == opc){
                    document.querySelector("#ganador").textContent = empate;
                    }
                else{
                    document.querySelector("#ganador").textContent=resultadoG;
                }
        break;

                //Caso papel
            case 1:
                if(maquina == 2 || maquina == 3){
                document.querySelector("#ganador").textContent = resultadoP;
                ganar = 0
                }
                if(maquina == opc){
                    document.querySelector("#ganador").textContent = empate;
                    }
                else{
                    document.querySelector("#ganador").textContent=resultadoG;
                    }
            break;

                //caso tijeras
            case 2:
                if(maquina == 0 || maquina == 4){
                document.querySelector("#ganador").textContent = resultadoP;
                ganar = 0
                }
                if(maquina == opc){
                    document.querySelector("#ganador").textContent = empate;
                    }
                else{
                    document.querySelector("#ganador").textContent=resultadoG;
                    }

            break;

                //Caso lagarto
            case 3:
                if(maquina == 0 || maquina == 2){
                document.querySelector("#ganador").textContent = resultadoP;
                ganar = 0
                }
                if(maquina == opc){
                    document.querySelector("#ganador").textContent = empate;
                    }
                else{
                    document.querySelector("#ganador").textContent=resultadoG;
                    }

            break;

                //Caso spock
            default:
                if(maquina == 3 || maquina == 1){
                document.querySelector("#ganador").textContent = resultadoP;
                ganar = 0
                }
                if(maquina == opc){
                    document.querySelector("#ganador").textContent = empate;
                    }

                else{
                document.querySelector("#ganador").textContent=resultadoG;
                }
    }


    



    
    switch(maquina){
    case 0:
        document.querySelector("#maquina").textContent = piedra;
        break;

    case 1:
        document.querySelector("#maquina").textContent = papel;
        break;

    case 2:
        document.querySelector("#maquina").textContent = tijera;
        break;

    case 3:
        document.querySelector("#maquina").textContent = lagarto;
        break;

    case 4:
        document.querySelector("#maquina").textContent = spock;
        break
}
}
