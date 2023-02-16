let obj={nombre:'carlos',
 edad:44,
 apellido:'Ulibarri',
keypress: function () {
    return'Se ha presionado una tecla';
},
mouseOver: function () {
    return 'El puntero del mouse está arriba'
}
};

console.log(obj.nombre);
console.log(obj['nombre']);
let mykey='nombre';
console.log(obj[mykey]);    //uso la variable donde guardé el nombre de la key

let myKey2='keypress';
console.log(obj[myKey2]()); //uso una key para ejecutar una funcion dentro del objeto
let myKey3='mouseOver';
console.log(obj[myKey3]());

let myArray=[];
myArray.push(4);                            //Puedo hacer push de cualquier codigo a un array(funciones, strings, numeros, etc)
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
    console.log('hola desde el array');
})
console.log(myArray);

console.log(myArray[2][myKey2]());

let funcArray=[];
funcArray.push(()=>{
    console.log('Function 1');
});
funcArray.push(()=>{
    console.log('Function 2');
});
funcArray.push(()=>{
    console.log('Function 3');
});
console.log(funcArray)

funcArray.forEach((item)=>{     //Estoy ejecutando el array de funciones para ver el resultado de todas las funciones
    item();
});


