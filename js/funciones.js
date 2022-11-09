var array;

function cargarpagina(){
    array = [
        {nombre: "wilder", codigo: "190363", doc: "123456", prog: "ing. de sistemas"},
        {nombre: "Andres", codigo: "190363", doc: "123456", prog: "ing. de sistemas"},
        {nombre: "Duarte", codigo: "190363", doc: "123456", prog: "ing. de sistemas"},
    ]
}

function calcular(){
    let nombre = $("#nombre").val();
    for(let i=0; i<array.length; i++){
        if(nombre==array[i].nombre){
            console.log("el nombre encontrado es " + nombre);
            break;
        }
        else{
            console.log("su nombre "+nombre+" no fue encontrado");
        }
    }
}
