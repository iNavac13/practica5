let Emitter=require('./emitter');
let emtr = new Emitter();

emtr.on('greet', ()=>console.log('Somewhere someone said hello'));  //uso on para guardar la funcion
emtr.on('greet', ()=>console.log('A greeting ocurred'));
emtr.emit('greet'); //al ejecutar con .emit saldran los dos resultados de las dos funciones que guarde con 'greet'

emtr.on('jump', ()=>console.log('someone jumped'));
console.log(emtr);  //emit toma forma como de un objeto
emtr.emit('jump');