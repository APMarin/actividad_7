function operation(num1, num2){

    //console.log(num1 + num)
    return num1 + num2;
}

console.log(operation(2,3));

const operacionFlechita = () => {
    valor1 = document.getElementById('valor1').value;
    valor2 = document.getElementById('valor2').value;
    operation = document.getElementById('operacion').value;

    if(operation == 1 ){
        var resultado2 = parseInt(valor1) + parseInt(valor2);
    }
    if(operation == 2){
        var resultado2 = parseInt(valor1) - parseInt(valor2);
    }
    if(operation == 3){
        var resultado2 = parseInt(valor1) * parseInt(valor2);
    }
    if(operation == 4){
        var resultado2 = parseInt(valor1) / parseInt(valor2);
    }
    console.log(resultado2);
    document.getElementById('resultado').innerHTML = resultado2;
    

}